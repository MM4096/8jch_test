
var allowCookies = 1;
var itemCost;
var numberItems;
var totalCost;
function accepted() {
    allowCookies = 1;
    document.getElementById("cookieFooter").style.visibility = "hidden";
    hardSetCookie("cookiesEnabled", 1, 365);
}
function notAccepted() {
    allowCookies = 0;
    document.getElementById("cookieFooter").style.visibility = "hidden";
    hardSetCookie("cookiesEnabled", 0, 365);
}
function setCookie(cookieName, cookieValue, cookieValidDays) {
    let allowCookie = getCookie('cookiesEnabled')
    if (allowCookie == 1) {
        const day = new Date();
        day.setTime(day.getTime() + (cookieValidDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + day.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }

}
function hardSetCookie(cookieName, cookieValue, cookieValidDays) {

        const day = new Date();
        day.setTime(day.getTime() + (cookieValidDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + day.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

}
function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    allowCookies = getCookie("cookiesEnabled");
}
function getCookieValue(cookieName) {
    let value = getCookie(cookieName);
    window.alert(value);
    document.getElementById("returnCookieValue").innerHTML = value;
}
function calculateCost(itemNumber) {
    const costs = [
        0,
        //cost of item 1
        1,
        //cost of item 2
        1.5,
    ]
    itemCost = costs[itemNumber];
    numberItems = +document.getElementById("qty").value;
    totalCost = itemCost * numberItems;
    document.getElementById("cost").innerHTML = "Add " + numberItems + " to cart for $" + totalCost;
}
function updateCookie(cookieName) {
    setCookie("cookieName", numberItems, 365);

}
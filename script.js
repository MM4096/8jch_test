
var allowCookies = 1;
function accepted() {
    allowCookies = 1;
    document.getElementById("cookieFooter").style.visibility = "hidden";
    setCookie("cookiesEnabled", allowCookies, 365);
}
function notAccepted() {
    allowCookies = 0;
    document.getElementById("cookieFooter").style.visibility = "hidden";
    setCookie("cookiesEnabled", allowCookies, 365);
}
function setCookie(cookieName, cookieValue, cookieValidDays) {
    if (allowCookies == 1) {
        const day = new Date();
        day.setTime(day.getTime() + (cookieValidDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + day.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }

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
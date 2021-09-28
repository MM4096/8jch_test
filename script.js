
function accepted() {
    document.getElementById("cookieFooter").style.visibility = "hidden";
    setCookie("cookiesEnabled", 1, 365);
}
function notAccepted() {
    document.getElementById("cookieFooter").style.visibility = "hidden";
    setCookie("cookiesEnabled", 0, 365);
}
function setCookie(cookieName, cookieValue, cookieValidDays) {
    let allowCookie = getCookie("cookiesEnabled")
    if (allowCookie == 1) {
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
function getCookieValue(cookieName) {
    let value = getCookie(cookieName);
    window.alert(value);
    document.getElementById("returnCookieValue").innerHTML = value;
}
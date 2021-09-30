
var allowCookies = 0;
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
    if (allowCookie == "1") {
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
        1, //lolly scramble
        //cost of item 2
        1, //licorice allsorts
        //cost of item 3
        0.5, // Chocolate favorates
        //cost of item 4
        0.5, //chupa chups
        //cost of item 5
        0.5, //Sour candy
    ]
    itemCost = costs[itemNumber];
    numberItems = +document.getElementById("qty").value;
    totalCost = itemCost * numberItems;
    document.getElementById("cost").innerHTML = "Add " + numberItems + " to cart for $" + totalCost;
}
function updateCookie(cookieName) {
    setCookie(cookieName, numberItems, 365);

}
function cookieFooter() {
    let x = getCookie("cookiesEnabled");
    if (x == 1) {
        document.getElementById("cookieFooter").style.visibility = "hidden"
    } else {
        document.getElementById("cookieFooter").style.visibility = "visible"
    }
}



//Coundown for sales thanks to w3Schools

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
        + minutes + "minutes " + seconds + "seconds ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
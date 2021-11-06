const usernames = [
    0,
    "admin",
    "mm4096/admin"
]
const passwords = [
    0,
    "adminAccess",
    "adminAccess"
]
function login() {
    
    var loggedIn = 0;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    for (var i = 0; i < usernames.length; i++) {
        if ((usernames[i] === username) && (passwords[i] === password)) {
            console.log("Logged In!")
            if (localStorage.getItem("username") == username && localStorage.getItem("password") == password) {
                loggedIn = 1
            }
        }
        
    }
    if (loggedIn == 0) {
        document.getElementById("login").innerText = "Failed"
    } else {
        document.getElementById("login").innerText = "Signed In!"
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "https://mm4096.github.io/8jch_test/login.html"
    }
}
function signup() {
    var nUsername = document.getElementById("nUsername").value;
    var nPassword = document.getElementById("nPassword").value;
    var email = document.getElementById("email").value;
    var success = 1;
    if (nUsername.length < 4 || nUsername.length > 20) {
        success = 0;
        $("#erUser").show();
    } else {
        $("#erUser").hide();
    }
    if (nPassword.length < 5 || nPassword.length > 10) {
        success = 0
        $("#erPass").show();
    } else {
        $("#erPass").hide();
    }
    if (localStorage.getItem("username") != "") {
        success = 0;
    }
    if (success == 1) {
        var link = "mailto:enoch.wu@kingsway.school.nz"
            + "?cc=enoch.wu@kingsway.school.nz"
            + "&subject=" + encodeURIComponent("Signup")
            + "&body=" + encodeURIComponent("Please press <SEND>\r\r\r\r" + nUsername + "," + nPassword + "," + email)
            ;

        window.location.href = link;
    }
    localStorage.setItem("username", nUsername)
    localStorage.setItem("password", nPassword)
}
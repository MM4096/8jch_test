const usernames = [
    0,
    "admin",
]
const passwords = [
    0,
    "adminAccess",
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
    }
}

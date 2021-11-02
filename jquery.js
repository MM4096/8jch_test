$(document).ready(function () {
    
    
    $("#cost").click(function () {
        var txt = $("#cost").text();
        if (added == 1) {
            $("#cost").text("Added!");
        } else {
            $("#cost").text("Failed");
        }
        setTimeout(function () { $("#cost").text(txt);}, 1000);
        
    })
    //search function
    //Made by me!

    $("#search").change(function () { search() })

    var testPageOpen = 1;
    //Disable if something new to demo
    if (testPageOpen = 0) {


        console.log(getCookie("biscut"))
        if (getCookie("biscut") == "") {
            var code = window.prompt("Nothing to test! Come again later. This will redirect you back to the main page.", "");
            if (code == "biscut") {
                setCookie("biscut", 1, 365);
            } else {
                window.location.href = "https://mm4096.github.io/";
            }

        }
    }
    $("#showPassword").click(function () {
        if ($("#password").attr("type") == "password") {
            $("#password").prop("type", "text");
        } else {
            $("#password").prop("type", "password");
        }
    })

    
    if (sessionStorage.getItem("loggedIn") == "true") {
        $(".login").text("Signed into: " + localStorage.getItem("username"))
    }
    
    


})
function search() {
    const items = ["", "chocolate favorates", "chupa chups", "licorice allsorts", "lolly scramble", "mystery box", "sour candy"];
    var searchVal = $("#search").val();
    var searchValue = searchVal.toLowerCase();
    $("#result").show();
    $("#result").text("Search results for " + searchVal + ":");
    for (let i = 1; i < 7; i++) {
        var id = "o" + i;
        if (items[i].includes(searchValue)) {
            $("#" + id).show();
        } else {
            $("#" + id).hide();
        }
    }
}
function loginToggle() {
    $("#loginBody").toggle();
    $("#signupBody").toggle();
    if ($("#loginBody:visible").length == 0) {
        $("#signupToggle").text("No Account? Sign up Here!")
    } else {
        $("#signupToggle").text("Already have an account? Log in!")
    }
}

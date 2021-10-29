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


    //Disable if something new to demo
    if (parseInt(getCookie("biscut")) == 0) {
        var code = window.prompt("Nothing to test! Come again later. This will redirect you back to the main page.", "");
        if (code == abc123) {
            setCookie("biscut", 1, 365);
        }
        window.location.href = "https://mm4096.github.io/";
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


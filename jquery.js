$(document).ready(function () {
    
    const items = ["","chocolate favorates", "chupa chups", "licorice allsorts", "lolly scramble", "mystery box", "sour candy"];
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

    $("#search").on("keypress", function (e) {
        if (e.which == 13) {
            console.log("started!")
            var searchVal = $("#search").val();
            var searchValue = searchVal.toLowerCase();
            console.log(searchValue);
            for (let i = 1; i < 7; i++) {
                console.log("started search")
                console.log(i);
                if (items[i].includes(searchValue)) {
                    console.log("true")
                    $("#" + i).show
                } else {
                    console.log("false")
                    $("#" + i).hide
                }
            }
                

                                
            }
        })
    })

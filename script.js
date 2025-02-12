//defining variables
let currentDate = moment().format("[Today is] MMMM Do YYYY");
let presentTime = moment().format("H")
var saveButton = $(".saveBtn");
var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");




//displaying moment to page
function displayDate() {
    $("#currentDay").text(currentDate);
}
displayDate();
saveList();
getList();
timePassed();

//saving to do list text to local storage
function saveList() {
saveButton.on("click", function() {
    localStorage.setItem("9", nine.val());
    localStorage.setItem("10", ten.val());
    localStorage.setItem("11", eleven.val());
    localStorage.setItem("12", twelve.val());
    localStorage.setItem("1", one.val());
    localStorage.setItem("2", two.val());
    localStorage.setItem("3", three.val());
    localStorage.setItem("4", four.val());
    localStorage.setItem("5", five.val());
});
}

function getList() {
    nine.val(localStorage.getItem("9"));
    ten.val(localStorage.getItem("10"));
    eleven.val(localStorage.getItem("11"));
    twelve.val(localStorage.getItem("12"));
    one.val(localStorage.getItem("1"));
    two.val(localStorage.getItem("2"));
    three.val(localStorage.getItem("3"));
    four.val(localStorage.getItem("4"));
    five.val(localStorage.getItem("5"));
}

//changing the color if the time has passed
function timePassed() {
    $(".hour").each(function() {
        var hourBlock = $(this).attr("id");
        console.log(hourBlock);
        if (hourBlock > presentTime) {
            $(this).addClass("future");
        } else if (hourBlock < presentTime) {
           $(this).addClass("past");
        } else {
            $(this).addClass("present");
        }
    } 
)}

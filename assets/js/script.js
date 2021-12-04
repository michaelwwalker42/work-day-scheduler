// show current date 
$("#currentDay").text(moment().format('dddd,  MMMM Do YYYY'));

var currentHour = moment().hour();


//-----------------------------------------------setTaskColor function-------------------------------------------------

function setTaskColor() {
    // loop over time blocks and add class attributes for past, present, and future
    $(".time-block").each(function () {
        var taskHour = parseInt($(this).attr("id"));

        if (taskHour > currentHour) {
            $(this).addClass("future");
        } else if (taskHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
        return taskHour;
    })
};
//-------------------------------------------End setTaskColor function-------------------------------------------------

//------------------------------------------------saveBtn function-----------------------------------------------------

$(".saveBtn").on("click", function() {
    var taskHour = $(this).siblings(".hour").text();
    var task = $(this).siblings("textarea").val();
    console.log(taskHour, task);

    localStorage.setItem(taskHour, JSON.stringify(task));

});
//--------------------------------------------End saveBtn function-----------------------------------------------------



//----------------------------------------------------loadTasks function-----------------------------------------------

function loadTasks() {
    $("#9 textarea").val(JSON.parse(localStorage.getItem("9am")));
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10am")));
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11am")));
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12pm")));
    $("#13 textarea").val(JSON.parse(localStorage.getItem("1pm")));
    $("#14 textarea").val(JSON.parse(localStorage.getItem("2pm")));
    $("#15 textarea").val(JSON.parse(localStorage.getItem("3pm")));
    $("#16 textarea").val(JSON.parse(localStorage.getItem("4pm")));
    $("#17 textarea").val(JSON.parse(localStorage.getItem("5pm")));

}
//------------------------------------------------End loadTasks function-----------------------------------------------

loadTasks();

setTaskColor();
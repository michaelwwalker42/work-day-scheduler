// show current date 
$("#currentDay").text(moment().format('dddd,  MMMM Do YYYY'));

var currentHour = moment().hour();

function setTaskColor() {
    // loop over time blocks and add class attributes for past, present, and future
    $(".time-block").each(function () {
        var taskHour = parseInt($(this).attr("id"));

        if (taskHour > currentHour) {
            $(this).addCalss("future");
        } else if (taskHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

setTaskColor();
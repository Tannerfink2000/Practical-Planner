// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  $(function () {
    // Get the current date using Day.js and display it in the header
    var currentDate = dayjs().format('MM/DD/YYYY');
    $("#currentDay").text(currentDate);

    // Add a listener for click events on the save button
    $(".saveBtn").on("click", function () {
      // Get the description entered by the user
      var description = $(this).siblings(".description").val();

      // Get the id of the time-block containing the save button
      var timeBlockId = $(this).parent().attr("id");

      // Save the description in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, description);
    });

    // Get the current hour in 24-hour time using Day.js
    var currentHour = dayjs().hour();

    // Iterate over each time-block to apply the past, present, or future class
    $(".time-block").each(function () {
      // Get the hour associated with the time-block using its id
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      // Apply the appropriate class based on the current hour and time-block hour
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }

      // Get any user input saved in local storage and set the corresponding textarea value
      var savedDescription = localStorage.getItem($(this).attr("id"));
      if (savedDescription !== null) {
        $(this).find(".description").val(savedDescription);
      }
    });
  });
});

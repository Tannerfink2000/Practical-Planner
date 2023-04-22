# Practical-Planner

## What this code does and how it accomplishes its goals:
Displays the current date at the top of the page using Day.js library.
Provides timeblocks for standard business hours.
Color codes each timeblock to indicate whether it's in the past, present, or future based on the current hour.
Allows users to enter an event into each timeblock and save it in local storage using a unique key derived from the timeblock's id.
Retrieves any previously saved events from local storage and displays them in the corresponding timeblock textarea when the page is refreshed.
The code waits for the document to finish loading by wrapping all DOM-related code in a $(document).ready() function call.
The code gets the current date and time using the Day.js library and displays it in the header of the page.
The code applies a CSS class to each time-block element based on whether it is in the past, present, or future, using Day.js to get the current hour and comparing it to the hour associated with each time-block.
The code listens for click events on the save button within each time-block and saves the user input in local storage using the ID of the containing time-block as the key.
The code retrieves any saved user input from local storage and sets the values of the corresponding textarea elements when the page is loaded or refreshed.

![screencapture-127-0-0-1-5500-index-html-2023-04-22-12_44_56](https://user-images.githubusercontent.com/123831271/233803600-548a23b4-fcda-4b5c-b3a9-0aa79fd86949.png)

https://tannerfink2000.github.io/Practical-Planner/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var timeCur = dayjs().$H
  var timeBlocks = Array.from($(".time-block"))
  timeBlocks.forEach(currentTimeBlockDiv => {
    setColor(timeCur, currentTimeBlockDiv)
  // timeBlocks.forEach(parentTimeBlock.children[1].value) 
  // handleSave. 
  });
});

function setColor(currentHour, currentBlock) {
  var blockHour = currentBlock.id.split("-")[1]
  if (currentHour < blockHour) {
    currentBlock.classList.add("future")
  } else if (currentHour == blockHour) {
    currentBlock.classList.add("present")
  } else {
    currentBlock.classList.add("past")
  }
}

function handleSave(event) {
  var parentTimeBlock
   if (event.target.tagName == "I") {
    parentTimeBlock = event.target.parentElement.parentElement
   } else if (event.target.tagName == "BUTTON") {
    parentTimeBlock = event.target.parentElement
   } else {
    return
   }
   var id = parentTimeBlock.id
   var text = parentTimeBlock.children[1].value
  localStorage.setItem(id,text)
  } 
document.getElementById("time-block-container").addEventListener("click", handleSave)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
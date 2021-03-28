var currentDayEl = document.querySelector("#currentDay");

var date = moment().format("dddd, MMMM Do");


var displayDate = function() {
    var dateStr = date.toString();
    currentDayEl.innerHTML = dateStr;
};

displayDate();

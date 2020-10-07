//display text from local storage
$('#hourNine').val(localStorage.getItem('hourNine'))
$('#hourTen').val(localStorage.getItem('hourTen'))
$('#hourEleven').val(localStorage.getItem('hourEleven'))
$('#hourTwelve').val(localStorage.getItem('hourTwelve'))
$('#hourThirteen').val(localStorage.getItem('hourThirteen'))
$('#hourFourteen').val(localStorage.getItem('hourFourteen'))
$('#hourFifteen').val(localStorage.getItem('hourFifteen'))
$('#hourSixteen').val(localStorage.getItem('hourSixteen'))
$('#hourSeventeen').val(localStorage.getItem('hourSeventeen'))

//display date at top
var date = moment().format('LL');
$('#currentDay').html(date);

//variable for current hour
var currentHour = moment().hour(); //how to call JUST the current time?  This includes the current date as well.
console.log('currentHour:', currentHour);

//variables for time block hours
var nineAm = moment('09:00', 'hh').hour();
var tenAm =  moment('10:00', 'hh').hour();
var elevenAm = moment('11:00', 'hh').hour();
var twelvePm = moment('12:00', 'hh').hour();
var onePm = moment('13:00', 'hh').hour();
var twoPm = moment('14:00', 'hh').hour();
var threePm = moment('15:00', 'hh').hour();
var fourPm = moment('16:00', 'hh').hour();
var fivePm = moment('17:00', 'hh').hour();

$(document).ready(function() {
    //if time block hour > current hour turn green, if time block hour < current hour turn red, else turn grey
    if (nineAm<currentHour) {
        $("#hourNine").addClass("past");
    } else if (nineAm==currentHour) {
        $("#hourNine").addClass("present");
    } else {
        $("#hourNine").addClass("future");
    }

    if (tenAm<currentHour) {
        $("#hourTen").addClass("past");
    } else if (tenAm==currentHour) {
        $("#hourTen").addClass("present");
    } else {
        $("#hourTen").addClass("future");
    }

    if (elevenAm<currentHour) {
        $("#hourEleven").addClass("past");
    } else if (elevenAm==currentHour) {
        $("#hourEleven").addClass("present");
    } else {
        $("#hourEleven").addClass("future");
    }

    if (twelvePm<currentHour) {
        $("#hourTwelve").addClass("past");
    } else if (twelvePm==currentHour) {
        $("#hourTwelve").addClass("present");
    } else {
        $("#hourTwelve").addClass("future");
    }

    if (onePm<currentHour) {
        $("#hourThirteen").addClass("past");
    } else if (onePm==currentHour) {
        $("#hourThirteen").addClass("present");
    } else {
        $("#hourThirteen").addClass("future");
    }

    if (twoPm<currentHour) {
        $("#hourFourteen").addClass("past");
    } else if (twoPm==currentHour) {
        $("#hourFourteen").addClass("present");
    } else {
        $("#hourFourteen").addClass("future");
    }

    if (threePm<currentHour) {
        $("#hourFifteen").addClass("past");
    } else if (threePm==currentHour) {
        $("#hourFifteen").addClass("present");
    } else {
        $("#hourFifteen").addClass("future");
    }

    if (fourPm<currentHour) {
        $("#hourSixteen").addClass("past");
    } else if (fourPm==currentHour) {
        $("#hourSixteen").addClass("present");
    } else {
        $("#hourSixteen").addClass("future");
    }

    if (fivePm<currentHour) {
        $("#hourSeventeen").addClass("past");
    } else if (fivePm==currentHour) {
        $("#hourSeventeen").addClass("present");
    } else {
        $("#hourSeventeen").addClass("future");
    }


    //on click of save button, save text info to storage. 
    $(".saveBtn").on("click", function(event) {
        var timeClicked = event.target.previousElementSibling.id;
        console.log('timeClicked:', timeClicked)
        var enteredText = event.target.previousElementSibling.value;
        console.log('enteredText:', enteredText)
    
        localStorage.setItem(timeClicked, enteredText);
      });
      
});
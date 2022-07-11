/* 
 * clock.js
 * Author: Maria DeCesare 
 */

// set variables
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// function to show the current time on the page
var showCurrentTime = function() {
    
    // display the string on the webpage
    var clock = document.getElementById('clock');

    // create a date variable for the current time
    var currentTime = new Date();

    //use built in functions to get hours, minutes, seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // set default meridian
    var meridian = "AM";

    // set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // set minutes
    if (minutes < 10) {
        minutes = "0" + seconds;
    }

    // set seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    // change the text on the page in the html element with id "clock"
    clock.innerText = clockTime;
};

// getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {
    
    // set variable for the hour it is
    var time = new Date().getHours();
    // set variable for the message
    var messageText;
    // set variable for image
    var image = "images/clock.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var clockImageJS = document.getElementById("clockImage");

    // what pops up depending on what time is selected
    // comparing time variable to variables created in the beginning
    if (time == partytime) {
        image = "images/party.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "images/wakeup.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "images/lunchtime.jpg";
        messageText = "Lunch time!";
    }
    else if (time < noon) { 
        image = "images/goodmorning.jpg";
        messageText = "Good morning!";
    }
    else if (time >= evening) { 
        image = "images/goodevening.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "images/goodafternoon";
        messageText = "Good afternoon!";
    }

    // display message in console
    console.log(messageText);
    // display message in element with id "timeEvent"
    timeEventJS.innerText = messageText;

    clockImageJS.src = image;

    // call the function to show the current time on the page
    showCurrentTime();
};

// call the function just made to update the clock 
updateClock();

// getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// getting the party time button to work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
    if (partytime < 0) { 
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime =- 1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// active wake-up selector
var wakeUpTimeSelector = 
    document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// activate lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
    lunchtime - lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener("change", lunchEvent);

// active nap-time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
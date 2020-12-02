/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Mia EHrlich 
   Date: 4/26/20   

*/
"use strict";
// Display clock by calling showClock and update every 1sec
showClock();
setInterval("showClock()", 1000);

// Function to create countdown clock
function showClock() {
// Set date & time to local string for current date & time
  var thisDay = new Date();
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

//   Display date and time in html
  document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
  
//  Set variable for next july 4th by calling nextJuly4() and passing in the current date
  var j4Date = nextJuly4(thisDay);
  //Set time for J4 fireworks to 9pm
  j4Date.setHours(21);


//   Calculate days left
  var days = (j4Date - thisDay)/(1000*60*60*24);
//   Calculate hours left
  var hrs = (days - Math.floor(days)) * 24;
//   Calculate minutes left
  var mins = (hrs - Math.floor(hrs)) * 60;
//   Calculate seconds left
  var secs = (mins - Math.floor(mins)) * 60;

//    Display time left clock until July 4
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

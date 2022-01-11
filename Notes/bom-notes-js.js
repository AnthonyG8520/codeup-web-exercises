'use strict';
// BOM intro
let sirius = {
    numStudents: 30,
    classroom: "Pedernales/remote",
//  methods - functions stored inside of an object
    takeAttendance: function(){
        prompt("how many students?")
        return this.numStudents;
    }
    prompt: function(){
        // returns prompt window
    }
}

//sirius.takeAttendance();

//What BOM looks like
let BOM = {
    window: {
        currentPage: "google.com",
        prevPage: "facebook.com",
    },
    prompt: function(){
        return "prompt window";
    },
    setInterval: function (){
        // sets the interval
    }
}

var favoriteNumber = 18; //global scope. gets added into window object as property

function add(num1){
    var num2 = 10;
    return num1 + num2;
}

console.log(add(favoriteNumber))









//-- BOM Methods --
//SET INTERVAL (after a set amount of time) takes 2 parameters --function & an interval--
//clearInterval stops setInterval
var count = 0; //starting point
var max = 10; // max number we want to get to
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);//stops setInterval
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

//SET TIMEOUT
//similar to setInterval as far as syntax

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);







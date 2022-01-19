"use strict";


document.getElementById("heading"); // DOM
console.log($("#p-one"));// jQuery


//selecting by id
let heading = $ ("#heading").text();
let valHeading = $("#heading");

console.log(heading)

//adding class
$("p-one").addClass("border")


//add border if user is logged in:
//check value of isLoggedIn
//grab value of isLoggedIn
//save that value to a variable
//compare value of logged in to true
//add a border
//assign a class to the element, if true
//find the element
// add a class
let user1 = {
    name: "Ant",
    isLoggedIn: false,
    age: 22,
}

let loginStatus = user1.isLoggedIn;

if(loginStatus === true){
    $("#heading").addClass("border")
}





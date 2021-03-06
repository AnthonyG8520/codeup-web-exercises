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

//selecting by id and adding class
if(loginStatus === true){
    $("#heading").addClass("border")
}

//selecting element by class amd adding css
$(".blue-bg").css("background-color", "blue")


// selecting by tag name and changing font size
$("li").css("font-size", "24px")

//changing multiple css properties
$('#p-one').css('font-size', '8px').css('color', 'magenta')
$('#p-one').css({'color': 'red', 'font-size': '8px'})


//styling multiple elements
$('p, ul li').css

// style *ALL* elements
$('*').css


//---------------Essential Methods jquery-------------------
//give all paragraphs a border
//grab all the p elements
//change the css

// setting info to element
$('.border').css('border', '2px solid black');


//change h1 to say happy monday
//grab the element
//chain a method onto that element
//pass in the value you want to change it to

// .html() is SETTING info
$('h1').html('Happy Monday')

// .html() will also return the value of the content inside of the element selected if passed no value
//.html() is GETTING info
$('h1').html()


//add a class of border to my h2
$('#red').addClass('border'); //SETTER
//removing class from #red
$('#red').removeClass(); // (re)SETTER


//.toggleClass()
// toggle our h1 to be highlighted on an event
//grab the element you want to change
//grab the element thats listening for the click
//change the css (.css())
//toggle it

$('h1').click(function(){
    $(this).toggleClass('highlight') //can use (this) when the function is inside where the element has already been called
});


//---------------Traversing--jquery---------------------
//.children applies to all children under the grabbed element


//grab the next element in line use .next()
//.next() // SETTER
//setting a css property to the next element after whats being called
$('#pink').next().css('border', '2px solid black');

//grab the element first
//use .children() to traverse down multiple levels depending on how many times you apply .children()
$('#first').children().children.css('border', '2px solid black');

//.parent()

$('#pink').parent().css('border', '2px solid black');

//change properties for every element that is selected // can apply conditionals to select certain index
$('li').each(function(index){
    if(index % 2 == 0) {
        $(this).css('font-size', '24px');
    }
});

//.first() .last() method

$('li').first().css('background-color', 'blue')
$('li').last().css('background-color', 'green')


//grabbing parent of last item

$('li').last().parent()


//reduce method

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue

//---------------Ajax Requests--jquery---------------------

//AJAX - Asynchronous JavaScript and XML (and JSON) -->
//asynchronous - not at the same time - one thing running while something else is going on
//synchronous - at the same time
//xml - eXtensible Markup Language -- designed to store and transport data
//js
//Web Server - server that holds your website
// // software: handle requests, sends data, understands URLs, allows us to interact with servers, hosts files,
// // hardware: computers storing data
//HTTP Server - software that understands URLs and is able to communicate with the browser to view webpages
//JSON - JavaScript Object Notation
//JSON object syntax
// {'team': 'spurs',
//     'wins': 7
// }

// API - application programming interface -


//AJAX Request(jquery syntax)
//get info from ur random dog API

//$.ajax() jquery syntax for AJAX GET request

$.ajax("https://dog.ceo/api/breeds/image/random") //GET
$.ajax("url", {
    type: "POST",
    // data we want to save to the server:
    data:
})

//REQUESTS:
// GET
// POST --> sending information (through JSON) to be stored on the server
//DELETE --> send information about the thing you want to delete // not going to return anything (if successful)
// PUT --> edit / send the info about the thing your editing, and typically receive the edited thing back


// DOCUMENTATION

//default type is GET
$.ajax("url")

$.ajax("url", {
    type: "POST", //type of request
    data: { // if POST, PUT, DELETE: SEND INFO ALONG WITH REQUEST
        username: 'anthony',
        post: 'doing javascript'
    }
});


//GET - RESPONSE

// .done() tells when a request is done being made / accepts a function on what to do if request finishes
$.ajax("url").done(function(data, status){
    console.log("request is done")
});

//.fail tells when a request fails / accepts a function on what to do if request fails
$.ajax("url").fail(function(){
    console.log("your request has failed")
});

//request an image of a dog from DOG CEO API and render it dynamically on the HTML page

//select the element we want to change
//change its src attribute and give it a value
//retrieve data from API
// handle the response
//retrieve the actual item we need from the response // data.message
// --> string
//passes the string recieved into the value of src being changed


//sends the request
$.ajax("https://dog.ceo/api/breeds/image/random").done(function(data, status){
    //.done handling the response here
    // data is the object that is returned and .message return the message value from within the object
    console.log(data.message);
        //status returns the status of the request
    console.log(status);
    // inputs the url directly into the element were trying to modify
    $("#doggo").attr("src", data.message)
});

$.ajax("url").always(function() {
    // .always accepts a function that tells what to do no matter the outcome of the request
});


//adding ajax pulled info into html

//GET the url - using ajax request
//loop through the array of data
    //forEach
    //jquery .each()

//get the actual names of the comments
//.done() method -- to capture the data when it's returned
//append to element
//select /find the element that we want to append to
//create and element

$.get("url").done(function(){
    console.log(data)
    //here we have access to data returned
    $.each(data, function(i, comment){
        let newEl = `<h1>${comment.name}</h1>`
        // select element we're appending to
        //append whatever we pass in as a child
        $(".container").append(newEl)
    })
})



















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
















//Change span to say user input name

//--document-- the name of the DOM object
//Methods that retrieve objects from the DOM
//getElementById() --> by id
//getElementsByClass() --> by class
//getELementsByTagName() --> by tag name

// var promptAnswer = prompt("What's your name?");
//
// var retrievedSpan = document.getElementById('name');
//
// console.log("Prompt answer: ", promptAnswer);
// console.log("Retrieved span: ", retrievedSpan);
//
// retrievedSpan.innerHTML = promptAnswer;


//getElementsByClassName returns an array of elements with that class name.
// In order to modify the text you must specify which element in the array you want to modify.

var retrievedText = document.getElementsByClassName("text");

console.log(retrievedText)

retrievedText[0].innerHTML = "It's cloudy and cold.";

console.log(retrievedText.innerHTML)

//Write a function which determines is today is a good day to fly.
//Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function isAGoodDayToFly(cloudy, scheduledPlanes) {
    if (!cloudy && scheduledPlanes < 10) {
        console.log("We can fly today!");
    } else {
        console.log("It's not a good day to fly.");
    }
}
isAGoodDayToFly(false, 5)

//write 4 functions which each take in two parameters and return a number.  They will, respectively:
//Return the sum of two numbers
//Return the difference of two numbers
//Return the product of two numbers
//Return the dividend of two numbers
//Return the remainder of two numbers

function add(x, y){
    return (x + y);
}
console.log(add(5, 4));

function subtract(x, y){
    return (x - y);
}
console.log(subtract(20, 10));

function multiply(x, y){
    return (x * y);
}
console.log(multiply(5, 5));

function divide(x, y){
    return (x / y);
}
console.log(divide(10, 2));

function remainder(x, y){
    return (x % y);
}
console.log(remainder(6, 4));

var someText = ("Here is some text.");

//String reverse warmup 11/29/21
//function reverseString(string) {
 //   .split() .reverse() .join()
//}


// Warmup 11/30/21

function averageScore(score1, score2, score3){
    return ((score1 + score2 + score3) / 3);
}
console.log(averageScore(50, 65, 100));

function dividesByThreeOrFive(score1, score2, score3){
    let highestScore = (Math.max(score1, score2, score3));
    if (highestScore % 3 === 0 || highestScore % 5 === 0) {
        return true
    }else return false
}
console.log(dividesByThreeOrFive(10, 8, 11));

function lowerCase(nameofbowlingplace){
    let bowlingPlaceName = nameofbowlingplace
    return (bowlingPlaceName.toLowerCase())
}
console.log(lowerCase("ThEbEsTbOwLiNgPlAcEever"))

let score = 109;
let name = "bowling is fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

function typeOfData(data){
    return typeof(data)
}

console.log(typeOfData(score));
console.log(typeOfData(name));
console.log(typeOfData(isBowlingFun));
console.log(typeOfData(players));

function allPreviousFunctions(score1, score2, score3, nameOfPlace){
    let result = dividesByThreeOrFive(score1,score2,score3);
    console.log("The average score of the three is " + averageScore(score1, score2, score3));
    console.log(lowerCase(nameOfPlace));
    console.log("Whether or not the highest score is divisible by three or five is " + result);
    console.log(typeOfData(result));

}
allPreviousFunctions(1, 9, 11, "BOWLINGplaCE")


function myFunction(firstName, lastName){ return firstName + lastName}

console.log(myFunction("anthony", " gonzales"));


function thatsNotMyName(name) {
    if (name == "Laura") {
        return ("that's me!, I'm " + name)
    } else return ("that's not my name");
}
console.log(thatsNotMyName("anthony"))

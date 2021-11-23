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
    return x + y
}
console.log(add(5, 4))

function subtract(x, y){
    return x - y
}
console.log(subtract(20, 10))

function multiply(x, y){
    return x * y
}
console.log(multiply(5, 5))

function divide(x, y){
    return x / y
}
console.log(divide(10, 2))

function remainder(x, y){
    return x % y
}
console.log(remainder(6, 4))
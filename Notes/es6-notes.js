"use strict"

//exponentiation syntax
var x = 2 ** 8;

//use let or const from now on
const MY_CONST = 1;

// if(true){
//     let test1 = "bob";
// }
//
// console.log(test1);


//template strings
// let fullName = "Bob";
// let age = 30;
// let gender = "male";
// let job = "Developer";

// console.log("Name: " + fullName + " Age: " + age + " Gender: " + gender + " Job: " + job);
// console.log(`Name: ${fullName} Age: ${age} Gender: ${gender} Job: ${job}`);

//can make new lines using template literal
// console.log(`Name: ${fullName}
// Age: ${age}
// Gender: ${gender}
// Job: ${job}`)

let fruits = [
    {
        name: "apple",
        qty:2
    },
    {
        name: "pear",
        qty:2
    },
    {
        name: "banana",
        qty:5
    },
    {
        name: "graoe",
        qty:3
    }
]

//for.. of
for (let fruit of fruits){
    if(fruit.name === "banana"){
        break;
    }
    console.log(fruit);
    fruit = "asdf"
}
console.log(fruits)


//arrow functions

function foo2(x){
    return x + "!";
}

//if only 1 parameter you dont need parentheses / if it returns something you dont need the word return
const foo3 = x => {
    return x + "!"
}

//default parameter values

function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(sayHello()); // "Hello, World!".
console.log(sayHello('codeup'));; // "Hello, codeup!"


// Object Property Variable Assignment Shorthand

let fullName = "Bob";
let age = 30;
let gender = "male";
let job = "Developer";

let person = {
    fullName: fullName,
    age: age,
    gender: gender,
    job: job
}
console.log(person)

//Object Destructuring

var fn = person.fullName;
var a = person.age;

// var{fn, a, g ,j} = person;

//destructuring arrays

const food = ['olive', 'pizza', 'pasta', 'banana']

const [a, b] = food;
console.log(a + ' ' + b);










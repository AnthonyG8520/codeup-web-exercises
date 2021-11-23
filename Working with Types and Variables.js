var a = 1;
var b = a++;
var c = ++a;
console.log(a,b,c)
// what is the value of a, b, and c?

var d = "hello";
var e = false;

d++;
e++;
console.log(d,e)

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed)

var price = 2.7;
console.log(price.toFixed(2));

//var price = "2.7";
//console.log(price.toFixed(2))

console.log(isNaN(0))

console.log(isNaN(1))

console.log(isNaN(""))

console.log(isNaN("string"))

console.log(isNaN("0"))

console.log(isNaN("1"))

console.log(isNaN("3.145"))

console.log(isNaN(Number.MAX_VALUE))

console.log(isNaN(Infinity))

console.log(isNaN("true"))

console.log(isNaN(true))

console.log(isNaN("false"))

console.log(isNaN(false))

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN)

console.log(!true)

console.log(!false)

console.log(!!true)

console.log(!!false)

console.log(!!0)

console.log(!!-0)

console.log(!!1)

console.log(!!-1)

console.log(!!0.1)

console.log(!!"hello")

console.log(!!"")

console.log(!!'')

console.log(!!"false")

console.log(!!"0")

var sample = "Hello, Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
sample += " Students";
sample = sample.replace("Students", "class");
console.log(sample);
console.log(sample.indexOf("C"))
let cIndex = sample.indexOf("C")
console.log(sample.substring(cIndex, (sample.indexOf("p") +1)));

//Exercise 3
//Price of movie per day
var moviePrice = 3;
// Days rented
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;

console.log("The Little Mermaid cost " + moviePrice * littleMermaid +" dollars to rent.");
console.log("Brother Bear cost " + moviePrice * brotherBear + " dollars to rent.");
console.log("Hercules cost " + moviePrice * hercules + " dollars to rent.");

var googlePay = 400 * 6;
var amazonPay = 380 * 4;
var facebookPay = 350 * 10;
var weeksPay = googlePay + amazonPay + facebookPay;
console.log(weeksPay)
// 2 more exercises left




var username = 'codeup';
var password = 'notastrongpassword';

var passwordLongEnough = password.length >= 5;
console.log(passwordLongEnough);

var includesUsername = password == username;
console.log(includesUsername);

var usernameTooLong = username > 20;
console.log(usernameTooLong)

var noWhiteSpace = username.startsWith(" ", 0) || password.startsWith(" ", 0)
console.log(noWhiteSpace)
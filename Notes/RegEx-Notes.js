let re = /abc/;

let newArr = re.exec("habco");
// console.log(newArr)


//following regex simple character with * looks for zero or more of that character instead of just one
let myArr = /ab*c/.exec("bcabbbbbcdca");
// console.log(myArr)


// surrounding a match pattern makes a capture group that is saved and can be called back later
//    /(x)(x)/, $1-$2

// using bracket x{n} lets you find a specific amount of occurrences of the preceding item "x"
//    /x{3}/

let arr = /(\w{3})(\w{3})/.exec("abcabchelloo");
// console.log(arr)


// when using .replace method with regex string can be modified in second half after capturing groups
let str = "hello";
// console.log(str.replace(/(\w{3})(\w*)/, '$1-$2'));


// example with splitting phone number with parentheses and dashes
let phoneNumber = "2103558199"

console.log(phoneNumber.replace(/(\d{3})(\d{3})(\d*)/, "($1)-$2-$3"));

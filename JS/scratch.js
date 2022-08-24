"use strict";

function disemvowel(str){
    let checkStr = str.toLowerCase();
    let newStr = "";
    for(let i = 0; i <= str.length - 1; i++){
        if(checkStr.charAt(i) === "a" || checkStr.charAt(i) === "e" || checkStr.charAt(i) === "i" || checkStr.charAt(i) === "o" || checkStr.charAt(i) === "u"){
            continue
        }
        newStr += str.charAt(i)
    }
    return newStr;
}


function XO(str){
    let checkStr = str.toLowerCase();
    let oCount = 0;
    let xCount = 0;
    for(let i = 0; i < str.length; i++){
        if(checkStr.charAt(i) === "x"){
            xCount++
        }
        else if(checkStr.charAt(i) === "o"){
            oCount++
        }
    }
    return oCount === xCount
}


function sortOnlyOdds(arr){
    let oddsIteration = 0
    let oddsSorted = [];
    let odds = arr.filter(n => n % 2 !== 0).sort((a,b) => a-b);
    arr.forEach(num => {
        if(num % 2 === 0){
            oddsSorted.push(num)
        }
        else {
            oddsSorted.push(odds[oddsIteration])
            oddsIteration++
        }
    })
    return oddsSorted
}


// accepts a number in string format
function formatPhoneNumber(str){
    return str.replace(/(\d{3})(\d{3})(\d*)/, "($1)-$2-$3")
}


//accepts a number in array format
function arrToPhoneNumber(arr){
    return arr.join('').replace(/(\d{3})(\d{3})(\d*)/, "($1)-$2-$3")
}


function spinWords(string){
    let newStr = ""
    let strArr = string.split(" ")
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length >= 5){
            newStr += strArr[i].split("").reverse().join("") + " "
        }
        else newStr += strArr[i] + " "
    }
    return newStr.trim()
}


function splitWords(str){
    let strArr = str.match(/.{1,2}/g)
    let newArr = []

    if(str.length === 0){
        return newArr
    }else {
        strArr.forEach(function (string) {
            if (string.length === 1) {
                string += "_"
                newArr.push(string)
            } else {
                newArr.push(string)
            }
        })
        return newArr
    }
}


//this function finds the first number whos first and last index are the same making it the unique number in the arr
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


//arr is sorted first to get arr in numerical order then if the unique number is smaller than the rest arr[0] is returned since the arr was sorted in numerical order
// and the smallest would be at the front but if the unique number is larger than the rest it will end up at the end and arr.pop will return it
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }


function moveZeroes(arr){
    let newArr = arr.filter(n => n !== 0)
    let zeroArr= arr.filter(n => n === 0)

    zeroArr.forEach(z => newArr.push(z))

    return newArr
}


// console.log(disemvowel("Hello"));
//
// console.log(XO("XOooxx"))
//
// console.log(sortOnlyOdds([11,2,8,3,4,5,1]))
//
// console.log(formatPhoneNumber("2103558199"))
//
// console.log(arrToPhoneNumber([2,1,0,3,5,5,8,1,9,9]))
//
// console.log(spinWords("Welcome back from wherever"));
//
// console.log(splitWords("abc"))
//
// console.log(findUniq([88, 76, 88]));
//
// console.log(moveZeroes([0,1,5,3,0,89]))
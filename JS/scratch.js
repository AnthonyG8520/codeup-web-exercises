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






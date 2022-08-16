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

// console.log(disemvowel("Hello"));
//
// console.log(XO("XOooxx"))
//
// console.log(sortOnlyOdds([11,2,8,3,4,5,1]))

const re = /(\w+)\s(\w+)/;

const str = 'John Smith';

const newstr = str.replace(re, '$2, $1');

console.log(newstr);  // Smith, John





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

console.log(disemvowel("Hello"));

console.log(XO("XOooxx"))


function disemvowel(str){
    let checkStr = str.toLowerCase()
    let newStr = ""
    for(let i = 0; i <= str.length - 1; i++){
        if(checkStr[i] == "a" || checkStr[i] == "e" || checkStr[i] == "i" || checkStr[i] == "o" || checkStr[i] == "u"){
            continue
        }
        newStr += str[i]
    }
    return newStr
}

console.log(disemvowel("Hello"));


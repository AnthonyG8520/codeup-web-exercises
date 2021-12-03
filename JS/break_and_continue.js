// let userInput = prompt ("Enter an odd number that is between 1 and 50.")
// if (userInput > 50 || userInput % 2 === 0){
//     userInput
// }

// var userInput
//
// while (userInput < 50) {
//     userInput = prompt("Enter an odd number that is between 1 and 50.");
// }

var userNumber = 0;

do{
    userNumber = Number(prompt("Enter an odd number between 1 and 50."))
    if(userNumber < 1 || userNumber > 50){
        alert ("Invalid input.")
    }else if(userNumber % 2 === 0){
        alert("Not and odd number")
    }else if(isNaN(userNumber)){
        alert("Not a number.")
    }else{
        alert("Valid input.")
        break;
    }

}while(true)


console.log("Number to skip: " + userNumber)

for(let i = 1; i <= 50; i+=2){
    if(i === userNumber){
        console.log("Yikes, skipping number: " + userNumber)
        continue;
    }else
    console.log("Here is an odd number: " + i)
}

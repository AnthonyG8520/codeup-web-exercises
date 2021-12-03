//Loops

//--While--

//syntax
// while (condition){
//     // execute this code
//
// }


// let parkingSpotsAvail = 20;
// let isFull = console.log("The parking lot is full.")

//syntax
// let i = 0
// while(i < 10){
//     console.log(i);
//     i++; // i++ = i + 1
// }

// while(parkingSpotsAvail != 0){
//     console.log(parkingSpotsAvail + " parking spots available.")
//     parkingSpotsAvail--
//     console.log(parkingSpotsAvail + " parking spots available.")
// }

// while(parkingSpotsAvail >= 0) {
//     console.log(parkingSpotsAvail + " parking spots available.")
//     parkingSpotsAvail--
// }

//--do-while--
//ALWAYS RUNS FIRST and then checks the condition
// let i = 20
// do{
//     console.log("i before i++:" + i)
//     i++;
//     console.log("i after i++:" + i)
// }while(i <= 15)

// let i = 0
//
// do{
//     console.log(i);
//     i++;
//     i++;
// }while(i <= 50)

// practice
// let i = 0
// while(i <= 10){
//     console.log(i)
//     i++
// }
// console.log("-----------")
//
// let b = 0
// do{
//     b++
//     console.log(b)
// }while(b <= 10)

// let passWord = "1234";
// let userPassWord = prompt("Enter password.");
//


//Making a prompt loop
// var userInput = ''
// let name = "Anthony"
//
// do{
//     userInput = prompt ("Enter a name.")
//     if(userInput !== name){
//         alert ("wrong")
//     }else{
//         break;
//     }
// }while(true)


//--For Loop--

//syntax
// for (1; 2; 3){
//     //code
// };
//
// 1. Starting point;
// 2. Stopping point / condition;
// 3. How to iterate;


// for(let i = 0; i<=15; i++){
//     console.log("Num is:" + i);
// }

// To iterate by given number
// for(let i = 0; i<=15; i+=5){
//     console.log("Num is:" + i);
// }

// NESTED LOOPS

// for(let counter = 1; counter <=5; counter++){
//     console.log('FIRST counter:' + counter);
//     // count from 1 to 5
//     for(let counterTwo = 5; counterTwo >0; counterTwo--){
//         console.log("SECOND counter" + counterTwo);
//     }// counts from 5 to 1
//
// }
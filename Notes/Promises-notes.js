// //Promises
//
// // js object used as a polaceholder, used often with requests
//
// function add(a, b){
//     return a + b;
// }
//
// add(4,5);// trigger immediately once it's called
//
// $.ajax("https://api.github.com/zen").done(function(res){ //pending --> resolved || rejected
//     console.log(res);
// })//waits for the response before it triggers /.done callback function is the "promise"
//
// // similar to a conditional, in that a function will not run unless x condition (typically timely condition) is ready
//
//
// //PROMISE STATES:
// //PENDING - waiting for response / or waiting for condition to be met
// //RESOLVED - when condition waiting for is successfully met - your resolved function will execute
// //REJECTED - when event happens, but the condition is not met, trigger the function that will handle the failed error
//
// // FETCH REQUEST
// //comes from FETCH API - doesn't have to be embedded into our code in order to use
//
// //GET request using FETCH API
// //fetch()
//
// fetch("https://api.github.com/zen") // make the request // send info to make the request
//
// //how do we handle the response? JSON
//     //.then() handles the response / accepts two parameters
//     //1 - callback function -> executed only when the request is successful - state of promise -> resolved
//         //always going to accept the successful response object from the request as a parameter
//     //2 - callback function -> executed if request is made but fails - state of promise -> rejected
//         // accepts failed response / error as parameter
//     .then(function(res){
//         console.log(res)
//     }, function(err){
//         console.log(err)
//     })
//
// fetch("https://www.boredapi.com/activity")
//     .then(function(data){
//         console.log(data)
//     })
//
// //written in arrow function / if more than one response must be wrapped in curly braces
// fetch("https://www.boredapi.com/activity")
//     .then(data =>{
//         console.log('successful')
//         console.log(data)
//     }, err => {
//         console.log(err)
//         console.log('failed')
//     })
//
//
// //.catch() method handles any rejected response - accepts a callbck function
// //that callback function accepts the error message as it's parameter
//
// fetch('https://www.boredapi.com/activity')
//     // successful response object becomes parameter for the callback function in the next .then() method
//     .then(res =>{
//         res.json()
//         console.log(res)
//     })// accepts another callback function which accepts result from the previous chain
//     .then(result => console.log(result))
//
//     .catch(err => {
//         console.log(err)
//     })

// CUSTOM PROMISES
//can create custom promises using the Promise object

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 3000);
});

console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));






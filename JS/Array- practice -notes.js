//Arrays

//Example
// let students = ["Gerald", "Mark", "Mina", "Jason", "Justin", "Justin"];
//Returns 6 even though array elements start at 0. (Returns number of elements in the array.)
// console.log(students.length);


//Example
// let favoriteFood = ["pizza", "whataburger", "ramen", "sphagetti", "steak"]
// logging variable returns entire array including brackets
// console.log(favoriteFood);


//Returns a log of the element at that position as a string. (Jason)
// console.log(students[3]);


//modifiies a specific element in the array via concatenation
// console.log(students[4]) // Justin
// students[4] = students[4] + " sebastian";
// console.log(students[4]) // Justin Sebastian

// favoriteFood[0] += ": 1";
// favoriteFood[1] += ": 2";
// favoriteFood[2] += ": 3";
// favoriteFood[3] += ": 4";
// favoriteFood[4] += ": 5";
// console.log(favoriteFood)

// shows different positions due to the name being there twice.
// console.log(students.indexOf("Justin")) //4
// console.log(students.lastIndexOf("Justin")) /5

// let faveAnimal = "frogs"
// can call a variable inside an array to use as an element
// let laura = ["Laura", 31, "San Antonio", "mac", ["pizza", "french fries"], 2021, faveAnimal]
// let age = laura[1];
// console.log(age);
// console.log(laura[6])

//declare inner array to access it as its own array.
// let innerArr = laura[4];
// console.log(innerArr);
// console.log(innerArr[1]);

//can chain brackets together to access an element inside an inner array
// console.log(laura[4][1])
// console.log(laura)


//for loop to loop through an array and manipulate the element
//let ages = [14, 23, 89, 5, 25, 36];
// for(let i = 0; i <= ages.length - 1; i++){
//     console.log(ages[i] * 2);
// }

// for each loop
// ages.forEach(function(age){
//     console.log(age * 2);
// });

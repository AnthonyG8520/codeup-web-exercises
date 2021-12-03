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

//can pass multiple values into an array
//adds a value to the beginning of an array
array.unshift()
//removes a value from the beginning of an array
array.shift()
//adds a value to the end of an array
array.push()
//removes a value from the end of an array
array.pop()
//returns the index of the element you search for
array.indexOf()
// prints the index of the last time the element is in the array
array.lastIndexOf()
//return a sliced portion from the array/ if passed one index returns only that one/
// if given two the first arg is where it starts slicing and the second is how many elements it slices
array.slice()
//reverses a given array
array.reverse()
// by defualt .sort method sorts strings alphabetically and sorts numbers lowest to highest
array.sort()
//converts an array into a string, enter a string containing a separator to use a different separator
array.join()
//converts a string into an array, must input the separator used in the string
string.split()
//you can chain multiple methods together (.sort.reverse)
// spread operator (...) 1st shows adding to beginning 2nd adds to end
console.log(input, ...array)
console.log(...array, input)
//add two arrays together
console.log([...array, ...array])


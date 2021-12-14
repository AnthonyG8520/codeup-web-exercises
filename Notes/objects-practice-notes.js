// Objects

//syntax

//properties for object can contain any kind of data as well as other objects
//can wrap entire object inside a function to be able to fill out the object data through the function
//Either can be used (first method preferred)
//can add properties when object is first declared
//getDetails is A method that is printing out the details of the object in A string format
let birthdayObject = {
    month: "September",
    day: 23,
    getDetails: function(){
        return this.month + "," + this.day
    }
}

let person = {
    name: "Anthony",
    birthday: birthdayObject,
    isTall: false,
};
//let person = new Object();

//example shows an array used as a property/ shows using function as A property
let dog = {
    breed: "Huskey",
    colors: ["brown", "black", "white"],
    sex: "f",
    isFloofer: true,
    bark: function (loud) {
        if (true) {
            console.log("Woof, Woof!!")
        }
        if (false) {
            console.log("Woof.")
        }
    },
    getDetails: function () {
        return this.colors[0] + ' ' + this.breed
    }
};


//adding A property to an object
// person["name"] = "Anthony Gonzales";
//common syntax for adding A property
// person.birthday ="sep,23";
// person.isTall = true;

//can add a function to an object using:
person.sayHello = function(){
    return "Hello, " + this.firstName + " " + this.lastName + "!"
}

//can call certain properties through
// console.log(person.birthday.day)


//Math Object






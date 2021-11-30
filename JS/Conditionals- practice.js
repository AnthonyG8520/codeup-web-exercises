let weather = ("stormy");

if (weather === "sunny") {
    console.log("Wear Shirt.");
}else if (weather === "rainy"){
    console.log("Wear a raincoat.");
}else if (weather === "snowy"){
    console.log("Wear 10 jackets.");
} else {
    console.log("Wear whatever.");
}

let grade1 = 50;
let grade2 = 92;
let grade3 = 78;
let grade4 = 85;
let grade5 = 65;

function gradeToLetter(grade){
    if (grade >= 90){
        console.log("A");
    }else if (grade >= 80){
        console.log("B");
    }else if (grade >= 70){
        console.log("C");
    }else if (grade >= 60){
        console.log("D");
    }else console.log("F");
}
gradeToLetter(grade1);

gradeToLetter(grade2);

gradeToLetter(grade3);

gradeToLetter(grade4);

gradeToLetter(grade5);

let studentGrade = 90;

studentGrade >= 90 ? console.log("A") : console.log("");

//grade2 >= 80 ? console.log("B") : console.log("");

//grade3 >= 70 ? console.log("C") : console.log("");

//grade4 >= 60 ? console.log("D") : console.log("");

let number = 7

switch (number) {
    case 2 :
        console.log("The number is 2.");
        break;
    case 5 :
        console.log("The number is 5.");
        break;
    default :
        console.log("The number is not 2 or 5.");
        break;
}

let grade = 50

switch (grade){
    case >= 90:
        console.log("A");
        break;
    case >= 80:
        console.log("B");
        break;
    case >= 70:
        console.log("C");
        break;
    case >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}
// This statement (switch) doesn't accept expressions.^ (As shown) ONLY LITERALS
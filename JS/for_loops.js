//For loops
function showMultiplicationTable(input){
    for(let i = 1; i <= 10; i++) {
        let answer = input * i
        console.log(input + "x" + i + "=" + answer)
    }
}
showMultiplicationTable(5)


for(let i = 1; i <= 10; i++){
    var random = Math.floor((Math.random() * 180) + 20);
    if(random % 2 === 0){
        console.log(random + " is even")
    }else console.log(random + " is odd")
}

let totalNumberofRows = 9;
let output = '';
for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
    output = '';
}

for(let i = 100; i >= 5; i-=5){
    console.log(i)
}



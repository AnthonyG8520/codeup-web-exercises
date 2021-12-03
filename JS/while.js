let i = 1
while(i < 65536){
    console.log( i = i * 2)
}

var allCones = Math.floor(Math.random() * 50) + 50;
let soldCones = 0
console.log("Need to sell " + allCones + " cones")

do{
    soldCones = Math.floor(Math.random() * 5) + 1;
    if(soldCones < allCones){
        console.log(soldCones + " cones sold.");
    }else if (soldCones > allCones){
        console.log("I don't have " + soldCones + " to sell.");
    }
    allCones -= soldCones
    console.log(allCones)
}while (allCones > 0)

console.log("All cones have been sold");
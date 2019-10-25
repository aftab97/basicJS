
//arrays

var coffeeOrder = ["Coffee", "Tea", "Latte"];



for (i=0; i < coffeeOrder.length; i++){
    console.log(coffeeOrder[i]);
}


console.log(coffeeOrder.length);  //.length is a property not a method so does not have () at the end of it


coffeeOrder.push("Cappuccino"); //adds items to the array 

console.log(coffeeOrder);

//shift
coffeeOrder.shift(); //removes first element from array
console.log(coffeeOrder);

//pop
coffeeOrder.pop(); //removes the last element of the array
console.log(coffeeOrder);

//unshift
coffeeOrder.unshift("new element",1); //adds new elements at the start of the array
console.log(coffeeOrder);


//slice
console.log(coffeeOrder.slice(0,2)); //grabs the values from parameters

//splice
var months = ["Jan",  "March", "April"];

months.splice(0,2,"Feb"); //parameter one sets at which index it will add
//parameter 2 sets which how many elements it will replace

console.log(months);




// //VARIABLE SCOPE

// //outside function are global scope 

// // functions scope are variables inside the function

var globalScope = 1;
var globalScope2 = 2;

console.log(globalScope);
console.log(globalScope2);

function outerFunction(){
    var outerFunctionVariable = 3;
    console.log(globalScope);

    function innerFunction(){
        var innerFunctionVariable = 4;
        
    }

    console.log(innerFunctionVariable); // wont run because it cant access //undefined
}



function sayHello(greeting){
    console.log(greeting)
}

function typeOfHello(day,fn){   // fn takes the function sayHello() and defines the var inside
                                // the var being greeting is defined by the fn value
    if (day == "monday"){
        fn("Asslamwalakum");
    } else if (day == "tuesday"){
        fn("Hello")
    }   else{
        fn("Namaste")
    }
}

//the second arg is set as the first function 
typeOfHello("monday", sayHello)


function myFunction(){
    return function hello(){
        console.log("hello")
    }
}

console.log(myFunction())


//THIS IS A HIGER ORDER FUNCTION
//a function that takes a functions as a parameter

function multiply(num1){
    return function(num2){
        return num1 * num2
    }
}
console.log(multiply)
console.log(multiply());
console.log(multiply(8));
console.log(multiply(8)(7)); //returns 56 as is is setting the inner function with the second arg


//higher order

//simple funciton which logs Hello Code Nation


function printLog(){
    return "Hello Code Nation"
}

//CHALLENGE 1
function loopFunction(num){ 
    return function(){
        for (i = 0; i < num; i++){
            console.log("Hello Code Nation")
        }        
    }
}

loopFunction(4)()


// .map() method

var array = [1,2,3,4,5];

var map1 = array.map(function(x){   
    return x * x;
});

console.log(map1);

//map method passes array through and assigns new elements to 

//CHALLENGE 2


var newArray = [];

var array = [];
function squareFunction(string){
    string = "aftab";
    
    for(i=0;i < string.length; i++){
       array.push(string[i]);
       
    }

    


    // console.log(arrayAdd);
    // newArray = array.map(function(x){   
    //  return x * x;
    // });
}

squareFunction();
console.log(array)






//challenge 2
function intToStringConvertor(input){
       
    return input.toString();
}

console.log(intToStringConvertor(88));

//challenge 3
function incrementer(input){
    return ++ input
}

//challenge 4
function decrementerr(input){
    return -- input
}

//challenge 5 
function integerAdder(input1, input2){
    return input1 + input2;
}

console.log("Challenge 5:" + integerAdder(25,25));


//challenge 6
function minus(input1,input2){
    return input1 - input2;
}

console.log(minus(35,5));


function challenge10(input1,input2,operator){
    switch(operator){
        case "+": console.log("The sum is: " + input1 + operator + input2 + "=" + (input1 + input2));
        break;

        case "-": console.log("The difference is: " + input1 + operator + input2 + "=" + (input1 - input2));
        break;

        case "*": console.log("The product is: " + input1 + operator + input2 + "=" + (input1 * input2));
        break;

        case "/": console.log("The quotient is: " + input1 + operator + input2 + "=" + (input1 / input2));
        break;
    }
} 

challenge10(2,2,"+");

//CHALLENGE 15

function smallerInputChecker(input1, input2){
    if (input1 < input2){
        console.log(input1)
    }
    else if (input2 < input1){
        console.log(input2)
    }
}

smallerInputChecker(15,8);


// prompter for HTML
function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }

  myFunction();
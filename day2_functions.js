

const pressGrindBeans = () => {  // => means void does not return anything
    console.log("The function is working");
}

pressGrindBeans();


let coffeeIsGrinding = false; //assigning the boolean false

//creating a constant variable assigned to a arrow function
const pressGrindBeans2 = () => {
    if(coffeeIsGrinding){
        console.log("Stopping the grind")
        coffeeIsGrinding =false;
    }
    else{
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans2();

//PARAMETERS

const cashWithdrawl=(amount, accNum) =>{ // => is called arrow function syntax
    console.log("withdrawing: " + amount + ", from accountNumber: " + accNum);
}

cashWithdrawl(1500, 700231);


//another way of writting a function (declaration)
function functionTest(){
    console.log("This is another way of writting a function")
}

functionTest();

function addUp (num1 , num2){
    return num1 + num2;
}

console.log(addUp(3,4));


function multiplyByNineFifths (celcius){
    return celcius * (9/5)
}

function getFarenheit (celcius){
    return multiplyByNineFifths(celcius) +32;
}

console.log("The temperature is: " + getFarenheit(15));



function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1
    } else {
        return (n * factorial(n-1))
    }
}
console.log(factorial(5))


//ACTIVITY 2

//dispenses cash if pin number is correct
//and if balance equal to or more then the amount you're trying to withdraw

// var pinNumber = 2000;
// var amountInBank = 7000;

// function withdrawMoney(){
//     return pinNumberCheck() && amountInBankCheck();
// }

// function pinNumberCheck(input){
//    // var input = 2000;
//     if (input == pinNumber){
//         console.log("The correct pin was entered")
//         return true;
//     } else{
//         console.log("Incorrect pin entered")
//         return false;
//     }
// }

// function amountInBankCheck(input){
//   //  var input = 350;
//     if (input <= amountInBank){
//         console.log("we have this amount in the bank.....Withdrawing: " +  input)
//         return true;
//     } else{
//         console.log("we do not have this amount in the bank... amount declined, please enter a value equal to or less then "+ amountInBank)
//         return false;
//     }
// }

// pinNumberCheck(2000);
// amountInBankCheck(7500);


//activity 3 - cleaner code
var pinNumber = 2000;
var amountInBank = 7000;

function withdrawMoney(input1, input2){
    if (input1 == pinNumber){
        console.log("Correct pin enetered....proceeding to next step");
        if (input2 <= amountInBank){
            console.log("withdrawing the amount required: " + input2);
        } else{
            console.log("the ank does not contain this much....enter an amount less then or equal to: " + amountInBank);
        }

    } else{
        console.log("incorrect pin number entered");
    }
}

withdrawMoney(1500, 350);

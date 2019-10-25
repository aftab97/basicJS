//You've got a 


//switch statement / if statement for lots of scenarios
let car = "BMW"

switch(car){
    case "MERC":
        console.log("You've got a german car");
        break;
    case "KIA":
        console.log("You've got a South Korean car");
        break;
    case "BMW":
        console.log("You've got a Bimmer");
        break;
}

//challenge 1

var password = "aftab"

if (password.length < 8) {
    console.log("The password is too short")
}
else{
    console.log("This password is an acceptable length");
}

//challenge 2

var number = 10;

if (number % 3 == 0 || number % 5 == 0){
    console.log("It is divisable by 3 or 5")
}
else{
    console.log("It is not divisable by 3 or 5")
}


//challenge 3

var fizz = 3;
var buzz = 5;

challengeNumber = 30;

if (challengeNumber % 3 == 0){
    console.log("Fizz");
}
else if (challengeNumber % 5 == 0){
    console.log("Buzz");
}
else if (challengeNumber % 5 == 0 && challengeNumber % 3 == 0){
    console.log("Fizz Buzz");
} else{
    console.log("default");
}

//challenge 4


function palindrome(str) {
    // Step 1. The first part is the same as earlier
    //var re = /[\W_]/g; // this is regex    \W means "non word"  \w will match a word  
    var re = /[^A-Za-z0-9]/g; //the / marks the end and start of a regex expression // [ ] are the start
    //and the end of a character set
    //    /g is a global regex - operate on multiple matches along the string
    str = str.toLowerCase().replace(re, ''); // arg1 identifies if a regex, arg2 repaces it with ''
    
    // Step 2. Create the FOR loop
    var len = str.length; // var len = "A man" // length == 5
 
 for (var i = 0; i < len/2; i++) { //this will make the the length of the string be divided by 2 and itterate through that
   if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
       return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
   }
}
   return console.log("true this is a Palindrome");
   
   // Both parts are strictly equal, it returns true => The string is a palindrome
}

//if (str[i] !== str[len - 1 - i])
// this will itterate through the character i and as it increments move onto the next character
// the other half will start from the other side and keep itterating from the other side
// this will keep comparing both sides till it goes through the list of characters

palindrome("aftb btfa");
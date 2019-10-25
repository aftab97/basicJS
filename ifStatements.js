
// IF STATEMENTS
var music = 10;
var myMusic = 10;
var noMusic = 20;

if (music == myMusic){
    console.log("Oh no it's classical again");
}

else if (music == noMusic){
    console.log("Argh, peace and quiet");
}

else{
    console.log("Nice and noisy");
}

// === checks if the values and types are equal

numberExample = 10;
numberExample2 = 10;

if (numberExample === numberExample2){
    console.log("The type and the value are the same")
}

numberExample3 = 15;
stringExample = "15";

if (numberExample3 === stringExample){
    console.log("The type and value are the same")
} 
else{
    console.log("The VALUE are the same but the TYPE is not!")
}

// != means not equal to operator

if (music != myMusic){
    console.log("the values are not the same")
}


//activity

var age = 15;

if (age > 17){
    console.log("You are old enough I can serve you")
}
else{
    console.log("you are not old enough, I can not serve you!")
}


//the && operator means and 

let place ="Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny"){
    console.log("Check again")
} 
else if (place == "Manc" && weather == "Cloudy"){
    console.log("Sounds about right!")
}
else{
    console.log("What it isn't raining?!")
}
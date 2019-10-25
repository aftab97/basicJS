
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
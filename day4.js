
//functions can have multiplpe args
function subOrder(top1, top2, top3, top4, top5){
    console.log(`you are ordering: ${top1}, ${top2}, ${top3}, ${top4} and ${top5}`);
}

subOrder("cheese","tomato","beef","lettuce","mayo");


var array = [0,2,3,4,5,6,7,8,9];
for (i=0; i < 10; i++){
    console.log(array[i]);
}


for (i=0; i<6; i++){
    console.log(Math.random() * 49 + 1);
}

//itterates in the opposite direction
for (i=9; i > -1; i--){ 
    console.log(i);
}

let favDrinks= ["redBull", "coke", "fanta","sprite"];

for (let drinksIndex=0; drinksIndex<favDrinks.length; drinksIndex++){
    console.log(favDrinks[drinksIndex]);
}


var favMovies = ["toyStory", "batman", "shrek"];

favMovies.splice(0,0,"newMovie", "newMovie2");

for (var filmIndex = 0; filmIndex < favMovies.length; filmIndex++){
    console.log(favMovies[filmIndex]);
}

// WHILE LOOP

// checks until certain condition remains true

let cards = ["diamond","spade","heart"];
var currentCard = "spade"

while (currentCard == "spade"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}

//console.log(currentCard);

var films = ["Toy Story", "Shrek", "Ghost Buster"];


for (var filmIndex =0; filmIndex < films.length; filmIndex ++){
    console.log(films[filmIndex]);
}

function movieNameChecker(){
    if (films.slice(2,3) == "Ghost Buster"){
        console.log("that is a match");
    }
    else {console.log("not a match");
    }
}

movieNameChecker();


var two =2;

console.log(String.valueOf(two));



//slack activity
//print our string in reverse

var myString = "012345"

//console.log(myString.length);

for (i = myString.length; i > 0; i--){ //sets to 6 // makes sure 0 is lowest value 
    console.log(myString[i - 1]);  // because it will only allow only the lowest value being 1
    //and we have to go to index 0, therefore we use -1 to decrease it to 0

}

// for (i=0; i< myString.length; i++){
//     console.log(myString[i-1])
// }

function reverseStringPrinter(string){
    for (i = string.length; i > 0; i-- ){
        console.log(string[i-1]);
    }
}

reverseStringPrinter("apple");


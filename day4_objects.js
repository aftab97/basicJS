//key value array 

//this is how to create an object
//object is assigned a key and value
const object = {
    name: "aftab",
    seatingCapacity: 100,
    drinks : ["Tea", "Cofee"]
};

console.log(object);

//example
var person = {
    name: "aftab", //name is key and "aftab" is value
    age: 22
};

console.log(person.name);
console.log(person["name"]); //another way of doign the above

console.log(person.age);


//-------------------------------------------------------------------

var time = 1100;
var offer = "";

const cafe = {
    breakfastOffer: "freee fooood",
    eveningOffer: "Too slow you have to pay"
};

    if (time < 1200){
        console.log(offer = cafe.breakfastOffer);
    }


//activity

let alarm = {
    weekendAlarm : "no alarm needed",
    weekdayAlarm : "get up at 7AM"
};

function alarmSetter(day){
    if (day == "Sunday" || day == "Saturday"){
        console.log(alarm.weekendAlarm);
    }

    else {
        console.log(alarm.weekdayAlarm);
    }
}

alarmSetter("Monday");


//---------------------------------------------


const cafe = {
    breakfastOffer: "freee fooood",
    eveningOffer: "Too slow you have to pay"

        
    }


cafe.biscuits = ["wafffle"] // this adds a new key & value

console.log(cafe);




let offer = "none";
let time = 1200;

const cafe = { // { identify that this is an object
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
        openCafe(){ //this is how to add functions inside objects 
            //notice how you dont have to add the function key word
            if(this.hasSpecialOffers){ //checks if true, it is true so will go on
                return "Time for a special offer!";
           }
        },

        closeCafe(){
        return "We are closed, come back tomorrow!";
        }
};

console.log(cafe.openCafe()); //add the () due to it being a funciton


//ACTIVITY 1

var people = {
    name: "aftab",

    sayHi(){
        
        return `Hello my name ${this.name}`;
    }
};

console.log(people.sayHi());


//ACTIVITY 2

var pet = {
    name: "Lucky",
    typeOfPet: "Tabbie",
    age: "2 Years",
    colour: "Brown",

    eating(){
        return `${this.name} is eating cat food`
    }
};

console.log(pet.eating());


var coffeeObject = {
    branch: "Costa",
    Latte : "£1.40",
    Tea : "£1.20",
    Coffee: "1.50",
    Price: "",
    nameOfDrink: "",

    drinksOrdered(nameOfDrink){
        if (nameOfDrink == "Latte"){
            this.Price = " The price is £1.20"
        }
        return nameOfDrink;
    }
};

    console.log("You have ordered a " + coffeeObject.drinksOrdered("Latte")+ coffeeObject.Price);
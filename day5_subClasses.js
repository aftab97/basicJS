
//SUBCLASSES

class Animal{
    constructor(name, age){
        this._name = name;
        this._age = age;
        this._hunger = 100;
        this._thirst = 100;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get hunger(){
        return this._hunger;
    }

    get thirst(){
        return this._thirst;
    }

    eat(){
        this._hunger --;
    }

    drink(){
        this._thirst --;
    }

    animalPrey(){
        return "I love to eat people";
    }
}
// var animalObject = new Animal("Lucky");
// animalObject.eat();

//console.log(animalObject);



class Cat extends Animal{
    constructor(name, age, lovesCarrot){
        super(name, age); //use the methods from the parents class
        this._lovesCarrot = lovesCarrot;
    }

    get lovesCarrot(){
        return this._lovesCarrot;
    }

    prey(){
        return super.animalPrey(); //you can use the super keyword to access methods from the parent class
    }
}

//the extend features allows you to inherit the methods from the super class
//therefore you get the values of thirst and hunger


var cat = new Cat("Rosie", 18 ,true);

console.log(cat);


//console.log(cat.prey()); //does not have the get key word so close with brackets -> ()

// function display(content){
//     return console.log(content);
// }

//         display(cat);


// class Dog extends Animal{
//     constructor(name, age, woof, walk){
//         super(name,age)

//         this._woof = woof;
//         this._walk = walk;
//     }

//     get woof(){
//         return this._woof
//     }

//     get walk(){
//         return this._walk
//     }
// };

// var myDog = new Dog("PLUTO", 22 ,"Yes","No");

// display(myDog);
// display(Dog.woof);


// //can also pass through an array

// var myDog2 = new Dog("PLUTO", 
// months = [20,16,23,24], //dont use the var keyword when adding an array to a object
// "Yes",
// "No");

// display(myDog2);


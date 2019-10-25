
//Parent class 
/**
 * contains - Name , age
 */

 //child class
 /**
  * contains - typeOfAnimal, playWithPet, feedPet
  */


class Animal{
    constructor(name, age){
        this._name = name;
        this._age = age;
        this._health = 100;
    }

    get Name(){
        return this._name;
    }

    get Age(){
        return this._age;
    }

    get health(){
        return this._health;
    }
}

class Interaction extends Animal{
    constructor(name, age, typeOfAnimal){
        super(name, age)
        this._typeOfAnimal = typeOfAnimal;
        this._playWithPet;

    }

    playWithPet(){
        return "I'm so happy, WOoooOOOoooF woof"
    }
}

var dogObject = new Interaction("Clipper the dawwg",22,"Doggy");

console.log(dogObject);
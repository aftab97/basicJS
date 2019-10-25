
// Using concepts of OOP - object oriented progamming

//Inheritance

//classes are a way of mass producing objects

//state is another word for variable

//naming conventions 
// _name (key) inside object - when we dont want it to be accessed to it directly
//or dont want it to be changed


//so we use getter - it will return the value

let person = {
    _name:"aftab",
    _age:22,

    get name(){ //having get before the method allows us not to add () when using the method
        return this._name;
    },

    get age(){
        return this._age;
    },

    increaseAge(){
        return this._age ++;
    }
};

console.log(person.name); // we do not have to add the () at the end of the name becaus eof the keyword (get)
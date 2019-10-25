
//object prototypes


//Object Constructor
function Person(first,last,age,eyeColor){
    this._first = first;
    this._last = last;
    this._age = age;
    this._eyeColor = eyeColor;
}

var myDad = new Person("shahid","alam",51,"brown");

console.log(myDad);

//class is a template for objects

// var age = null;

// console.log(age);
// age = 21;
//     if (age != null){
//         console.log("no longer null")
//     }

//String  - this is a string object
//string  - this is a primative string

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  
  var myFather = new Person("John", "Doe", 50, "blue");

  console.log(myFather.nationality); //so we can use the prototype keyword to add new properties to the object constructor

///the keyword class creates a new calss

//parameter is a special type of function

class People{ //notice class keyword - creates a new class // class name convention starts with a capital letter
    constructor(name, age){ //this has to be initiliazed
        this._name = name; //setting
        this._age= age;

    }

    get name(){
        return this._name; //setting the variable
    }

    get age(){  
        return this.age;
    }

    increaseAge(){
        return this._age ++;
    }

}

    var myPeople = new People("aftab",17); //the new keyword creates a new instance of the class
    // myPeople creates a new variable that stres the new instance of our People class
    
    
    myPeople.increaseAge(); //remember to use brackets because it does not have the get keyword

    console.log(myPeople._age);


    //Activity

    class Car{
        constructor(carRegNo,timeParkedFor){ //car registration no //time parked for //amount charged
            this._carRegNo = carRegNo;
            this._timeParkedFor = timeParkedFor;
        }

        get carRegNo(){
            return this._carRegNo;
        }

        get timeParkedFor(){
            return this._timeParkedFor;
        }

        
        myCost(){


            return this.con
        }

        

    }

    var myCar = new Car("CX0 6OH",2); //create a new variable and an instance of the Car class

    console.log(myCar);
    myCar.myCost();

var costVar;

class Car{

    constructor(carRegNo,timeParkedFor){ //car registration no //time parked for //amount charged
        this._carRegNo = carRegNo;
        this._timeParkedFor = timeParkedFor;
        this._health = 100;
    }

    get carRegNo(){
        return this._carRegNo;
    }

    get timeParkedFor(){
        return this._timeParkedFor;
    }

    
    myCost(){
        var string = "The total cost for parking will be £";
        
        
        switch(this._timeParkedFor){
            case 1:
                costVar = 1.50;
                return string + 1.50;
            case 2:
                cost = 3.00;
                return string + 3.00;
            case 3:
                cost = 4.50;
                return string + 4.50;
        }
    }
}

// var myCar = new Car("OU60COH",1);
// console.log(myCar);
// console.log(myCar.myCost());

// console.log(costVar);



class Staff extends Car{ //make sure to extend the parent class when inheriting methods from there
    constructor(carRegNo, timeParkedFor, staffNumber, amountAvailable){
        super(carRegNo, timeParkedFor)
        this._staffNumber = staffNumber;
        this._amountAvailable = amountAvailable;
 //      this._sufficientFunds = sufficientFunds;
    }

    get staffNumber(){
        return this._staffNumber;
    }

    sufficientFunds(){
        if (this._amountAvailable - costVar > 0){
            return true;
        }
    }


}

var staff1 = new Staff("CS32SD", 2, "STFF1167", 12);
console.log(staff1);


//console.log(staff1.sufficientFunds());


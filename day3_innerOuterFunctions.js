

function outer(){
    let a = 3;

    function inner(){
        let b = 2
        return a + b;
    }

    return inner;
}

let insideFunction = outer();

console.log(insideFunction)


function myFunct(){
    let name1 ="Stuart"
    return function(){
        let name2 = "ben";
            return function(){
                let name3 = "dan"
                return name1 + "is cooler then " + name2
        }
    }    
}

var function2 = new myFunct();

console.log(function2)

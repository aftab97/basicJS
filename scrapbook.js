//itterate through a string and print out characters

// var string = "123321";
// var length = string.length;

// for (var i = 0; i < length; i++){
//     //console.log("printing out " + string[i]);
//     //console.log(string[length-i-1]);

//     if (string[i] === string[length-i-1]){
//         console.log("These values had matched")
//     }

// }

function test(stringExample){
    var length = stringExample.length;

    for (var i = 0; i < length; i++){
        console.log(stringExample[i]);
    }

}

// test("abcdefghij")


// var test = "aftab is the best"
// var re = /[^A-Za-z0-9]/g;

// console.log(test.replace(re, '')); //we are looking through all the values using regex
// //removing all the gaps seen

value1 = "aftab";
value2 = "aftab";
function booleanTest(){
    if (value1 == value2){
        return true;
    } else{
        return false;
    }
}

if (!booleanTest()){ // if (true) > proceed | if (false) > do not proceed
    console.log(booleanTest())
    console.log(booleanTest())
}


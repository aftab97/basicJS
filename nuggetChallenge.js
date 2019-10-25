

var arrayOfNumbers = [2,3,4,5,7];

    //finding closest number to 7

// if i is equal to 7, if not find difference 
//the one with the lowest difference use that

var differences = [];

for (i=0; i < arrayOfNumbers.length; i++){
    //this will itterate through the array
    //console.log(arrayOfNumbers[i]);
    var numberVar = 7;
    
    //find the number with the lowest difference 
    //make exception if difference is 0 the its a match

    var number = arrayOfNumbers[i]; //gets the elements from the arrays
    console.log(number)


    differences.push(7 - number); //adds these elements to array

    for (i = 0; i < differences.length; i ++){
        if (differences[i] == 0){
            console.log("The closes value is")
        }
    }
    

    

}

//dictionary 


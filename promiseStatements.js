let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });


 


function sleepForASecond(num, string){
  console.log(string)
  return new Promise( //function returns a new promise
    
    
    function(resolve,reject){// sets 2 variables one for if resolved and if rejected
    
    
      setTimeout(function(){ //sets a timeout for 1 second and passes a function


        if (num >= 5){  // if number is greater then 4 it resolves
            console.log("this was ran");
            resolve(num)
        }
        else{
            reject(num).catch()
        }
    },1000)
    
})
}

async function doThing(){
  //let newWaitObject = sleepForASecond(7,"This is the first line") //throws a unhadled promise rejection
  console.log("waiting for this to be done first")
  
  //the await keyword makes it wait till the promise is resolved
  let newWaitObject2 = await sleepForASecond(3, "This is the second line") 
  
}

doThing();

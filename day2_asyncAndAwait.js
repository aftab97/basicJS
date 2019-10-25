

//Async
//-defines a function / method as asynchronous

//Await
//-waits for code to finish processing

//these methods allow us to wait for slower code to finish processing before moving onto the next line

//PROMISES
//an object that will reutrn a value sometime in the future .... or not

//Resolved, Reject - return statement
//Pending

//resolved - when things go fine
//reject when there will be an error


//used for stuff such as CSS, waiting for an animation to finish to run a piece of code...

// function waitASecond(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Waited a second");
//         }, 1000);
//     });
// }

// async function doThing(){
//     let waited = await waitASecond();
//     console.log(waited);
//     console.log("Did a thing");
// }
// doThing()


function waitASecond(num){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (num >= 5){
                resolve(num)
            }
            else{
                reject(num)
            }
        },1000)
        
    })
}

async function doThing(){
    let waited = await waitASecond(7)  
    console.log(waited)
    console.log("donen waiting")
    
    var newFunct = await waitASecond(7);
    var statusPending = waitASecond(2) //Promise (pending)
}


doThing();
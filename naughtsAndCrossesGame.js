var Places = ["1","2","3","4","5","6","7","8","9"]


    function refreshBoard(){
        count = 0 
        for (i=1; i <12; i++){
            
            if (Number.isInteger(i/4)){ //checks if number is dividable by 4
                console.log("---------------------------")
                
            }
            else{
                if (Number.isInteger(i/2)){
                    console.log(`  |  ${Places[count]}   |  ${Places[count+1]}   |  ${Places[count + 2]}   |`)
                    count += 3
                }
            }
        }
    }

refreshBoard();
    //Create a new function named getComputerChoice//
        //function getComputerChoice() {
        //}//

    //Code a random number//
      //let randomNumber =  Math.floor(Math.random() * 100)//
    //Assign return values to random selector (“rock”, “paper” or “scissors”)//
        //if (randomNumber >= 0 && randomNumber <= 32) {
            //return "rock";
        //} else if (randomNumber >= 33 && randomNumber <= 65) {
            //return "paper";
        //} else {
            //return "scissors"
        //}//
    //Print value selected//

        function getComputerChoice() {
            let randomNumber =  Math.floor(Math.random() * 100);

                if (randomNumber >= 0 && randomNumber <= 32) {
                    return "rock";
                } else if (randomNumber >= 33 && randomNumber <= 65) {
                    return "paper";
                } else {
                    return "scissors";
                }
        }

        console.log(getComputerChoice())
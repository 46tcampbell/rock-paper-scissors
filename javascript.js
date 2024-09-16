//Step 2 Code Below//

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

//Step 3 Code Below//

    function getHumanChoice() {
        let humanChoice = prompt("Please enter \"rock\", \"paper\" or \"scissors\". Alternative inputs will default to \"rock\".");

        if (humanChoice.toLowerCase() === "rock") {
            alert("You have chosen rock");
            return "rock";
        } else if (humanChoice.toLowerCase() === "paper") {
            alert("You have chosen paper");
            return "paper";
        } else if (humanChoice.toLowerCase() === "scissors") {
            alert("You have chosen scissors");
            return "scissors";
        } else {
            alert("Invalid Choice");
            return "rock";
        }
    }

    console.log(getHumanChoice())

//Step 4 Code Below//

//Create two new variables named humanScore and computerScore in the global scope.
//Start variables with 0

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);


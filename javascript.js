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

//Step 4 Code Below//

//Create two new variables named humanScore and computerScore in the global scope.
//Start variables with 0

let humanScore = 0;
let computerScore = 0;

//Step 5 code below//

//Create a new function named playRound.
//Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
//Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
//Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        return ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        return ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        return ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        return ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        return ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.")
        return ++computerScore;
    } else {
        console.log("DRAW!")
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);
console.log(humanSelection);
console.log(computerSelection);
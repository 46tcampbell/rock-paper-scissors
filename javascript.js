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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose this round! Paper beats Rock.");
            return ++computerScore;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win this round! Rock beats Scissors.");
            return ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win this round! Paper beats Rock.");
            return ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose this round! Scissors beats Paper.");
            return ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win this round! Scissors beats Paper.");
            return ++humanScore;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose this round! Rock beats scissors.")
            return ++computerScore;
        } else {
            console.log("DRAW! No points for anyone.")
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win the whole game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the whole game!");
    } else {
        console.log("Draw - no winner! Equal number of points after 5 rounds.");
    }
    
    console.log("Human Score = " + humanScore);
    console.log("Computer Score = " + computerScore);
}

playGame()



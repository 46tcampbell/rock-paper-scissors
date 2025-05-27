let humanScore = 0;
let computerScore = 0;
let draws = 0;
const scoreDisplay = document.createElement('div')
const humanScoreDisplay = document.createElement('span');
humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
const computerScoreDisplay = document.createElement('span');
computerScoreDisplay.textContent = ` Computer Score: ${computerScore}`;
const drawsDisplay = document.createElement('span');
drawsDisplay.textContent = `Draws: ${draws}`
const ul = document.createElement('ul');
scoreDisplay.appendChild(humanScoreDisplay);
scoreDisplay.appendChild(computerScoreDisplay);
scoreDisplay.appendChild(drawsDisplay);
scoreDisplay.appendChild(ul);
document.body.appendChild(scoreDisplay);



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber >= 0 && randomNumber <= 32) {
        return "rock";
    } else if (randomNumber >= 33 && randomNumber <= 65) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(buttonChoice) {
    let humanChoice = buttonChoice;
    return humanChoice.toLowerCase();
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound(getHumanChoice('rock'), getComputerChoice());
});
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound(getHumanChoice('paper'), getComputerChoice());
});
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound(getHumanChoice('scissors'), getComputerChoice());
});


let isGameOver = false;


function playRound(humanChoice, computerChoice) {
    if (!isGameOver) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            const li = document.createElement('li');
            li.textContent = "You have chosen rock. You lose this round! Paper beats Rock.";
            ul.appendChild(li);
            ++computerScore;
            computerScoreDisplay.textContent = ` Computer Score: ${computerScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            const li = document.createElement('li');
            li.textContent = "You have chosen rock. You win this round! Rock beats Scissors.";
            ul.appendChild(li);
            ++humanScore;
            humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            const li = document.createElement('li');
            li.textContent = "You have chosen paper. You win this round! Paper beats Rock.";
            ul.appendChild(li);
            ++humanScore;
            humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            const li = document.createElement('li');
            li.textContent = "You have chosen paper. You lose this round! Scissors beats Paper.";
            ul.appendChild(li);
            ++computerScore;
            computerScoreDisplay.textContent = ` Computer Score: ${computerScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            const li = document.createElement('li');
            li.textContent = "You have chosen scissors. You win this round! Scissors beats Paper.";
            ul.appendChild(li);
            ++humanScore;
            humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            const li = document.createElement('li');
            li.textContent = "You have chosen scissors. You lose this round! Rock beats scissors.";
            ul.appendChild(li);
            ++computerScore;
            computerScoreDisplay.textContent = ` Computer Score: ${computerScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            }
        } else {
            const li = document.createElement('li');
            li.textContent = "DRAW! No points for anyone.";
            ul.appendChild(li);
            ++draws;
            drawsDisplay.textContent = `Draws: ${draws}`
            if (humanScore >= 5 || computerScore >= 5) {
                isGameOver = true
            } else {
                isGameOver = false
            }
        }
    } else {
        ul.remove();
        humanScore = 0;
        humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
        computerScore = 0;
        computerScoreDisplay.textContent = ` Computer Score: ${computerScore}`;
        draws = 0;
        drawsDisplay.textContent = `Draws: ${draws}`
    }
}

function playGame() {

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());

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

// playGame()



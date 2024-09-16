# rock-paper-scissors
Rock Paper Scissors Project - TOP

This repository is for TOP Project: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

I will be keeping psuedocode notes here, but all action will take place in the console. Psuedocode below by step:

Step 2: Write the logic to get the computer choice (write a function that randomly returns “rock”, “paper” or “scissors”)

    Create a new function named getComputerChoice
    Code a random selector
    Assign return values to random selector (“rock”, “paper” or “scissors”)
    Print value 
    
Step 3: Write the logic to get the human choice (write a function that takes the user choice and returns it.)

    Create a new function named getHumanChoice.
    User inputs choice
    choice is stored in variable
    choice is printed

Step 4: Declare the players score variables (write variables to keep track of the players score.)

    Create two new variables named humanScore and computerScore in the global scope.
    Start variables with 0


Step 5: Write the logic to play a single round (write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.)

    Create a new function named playRound.
    Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    Increment the humanScore or computerScore variable based on the round winner.




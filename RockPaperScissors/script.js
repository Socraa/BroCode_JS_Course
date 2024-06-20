const choices = ["rock", "paper", "scissors"];
const computerDisplay = document.querySelector('#computerDisplay');
const playerDisplay = document.querySelector('#playerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()* 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a TIE!";

    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
    }

    computerDisplay.textContent = "Computer: " + computerChoice;
    playerDisplay.textContent = "Player: " + playerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("green", "red");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("red");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
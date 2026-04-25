function getComputerChoice(){
    let compNum = Math.floor(Math.random() * 3);
    let compChoice;
    if(compNum === 0){
        compChoice = "rock";
    }
    else if(compNum === 1){
        compChoice = "paper";
    }
    else if(compNum === 2){
        compChoice = "scissors"
    }
    return compChoice;
}

function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors?");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(compChoice, humanChoice){
    if(compChoice === "rock"){
        switch (humanChoice){
            case "rock":
                console.log("Tie!");
                break;
            case "paper":
                console.log("You win! Paper beats Rock");
                humanScore++; 
                break;
            case "scissors":
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                break;
            default:
                console.log("Something went wrong!")
                break;
        }
    }
    else if(compChoice === "paper"){
        switch (humanChoice){
            case "rock":
                console.log("You lose! Paper beats Rock");
                computerScore++;
                break;
            case "paper":
                console.log("Tie!");
                break;
            case "scissors":
                console.log("You win! Scissors beats Paper");
                humanScore++;
                break;
            default:
                console.log("Something went wrong!")
                break;
        }
    }
    else if(compChoice === "scissors"){
        switch (humanChoice){
            case "rock":
                console.log("You win! Rock beats Scissors");
                humanScore++;
                break;
            case "paper":
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                break;
            case "scissors":
                console.log("Tie!");
                break;
            default:
                console.log("Something went wrong!")
                break;
        }
    }
    return;
}


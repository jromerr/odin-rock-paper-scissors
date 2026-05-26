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

function playGame(){
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

    const rockBtn = document.querySelector("#rockBtn");
    const paperbtn = document.querySelector("#paperBtn");
    const scissorsBtn = document.querySelector("#scissorBtn");

    const btnContainer = document.querySelector(".btn-container");
    function getHumanChoice(e){
        let target = e.target;
        switch(target.id) {
            case 'rockBtn':
                playRound(getComputerChoice(), 'rock');
                console.log("Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")");
                break;
            case 'paperBtn':
                playRound(getComputerChoice(), 'paper');
                console.log("Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")");
                break;
            case 'scissorBtn':
                playRound(getComputerChoice(), 'scissors');
                console.log("Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")");
                break;
        }
        if(humanScore === 5){
            console.log("You won!")
            btnContainer.removeEventListener('click', getHumanChoice);
        }
        else if(computerScore === 5){
            console.log("You lost!")
            btnContainer.removeEventListener('click', getHumanChoice);
        }
    }

    btnContainer.addEventListener("click", getHumanChoice);
}

playGame();
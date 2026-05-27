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

    const btnContainer = document.querySelector(".btn-container");

    const body = document.querySelector("body");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");
    body.insertBefore(infoDiv, btnContainer);

    const currResult = document.createElement("div");
    currResult.classList.add("currResult");
    body.appendChild(currResult);

    function playRound(compChoice, humanChoice){
        if(compChoice === "rock"){
            switch (humanChoice){
                case "rock":
                    currResult.textContent = "Tie!";
                    break;
                case "paper":
                    currResult.textContent = "You win! Paper beats Rock";
                    humanScore++; 
                    break;
                case "scissors":
                    currResult.textContent = "You lose! Rock beats Scissors";
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
                    currResult.textContent = "You lose! Paper beats Rock";
                    computerScore++;
                    break;
                case "paper":
                    currResult.textContent = "Tie!";
                    break;
                case "scissors":
                    currResult.textContent = "You win! Scissors beats Paper";
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
                    currResult.textContent = "You win! Rock beats Scissors";
                    humanScore++;
                    break;
                case "paper":
                    currResult.textContent = "You lose! Scissors beats Paper";
                    computerScore++;
                    break;
                case "scissors":
                    currResult.textContent = "Tie!";
                    break;
                default:
                    console.log("Something went wrong!")
                    break;
            }
        }
        return;
    }

    function getHumanChoice(e){
        let target = e.target;
        switch(target.id) {
            case 'rockBtn':
                playRound(getComputerChoice(), 'rock');
                infoDiv.textContent = "Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")"; 
                break;
            case 'paperBtn':
                playRound(getComputerChoice(), 'paper');
                infoDiv.textContent = "Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")"; 
                break;
            case 'scissorBtn':
                playRound(getComputerChoice(), 'scissors');
                infoDiv.textContent = "Computer Score: (" + computerScore + ") Your Score: (" + humanScore + ")"; 
                break;
        }
        if(humanScore === 5){
            currResult.textContent = "You won!";
            btnContainer.removeEventListener('click', getHumanChoice);
        }
        else if(computerScore === 5){
            currResult.textContent = "You lost!";
            btnContainer.removeEventListener('click', getHumanChoice);
        }
    }

    btnContainer.addEventListener("click", getHumanChoice);
}

playGame();
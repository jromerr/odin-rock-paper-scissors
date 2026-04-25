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

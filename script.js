function getComputerChoice() {
    let number = Math.random();
    if (number <= 0.33) {
        return "rock";
    }
    else if (number <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanPick = prompt("Pick rock, paper or scissors to play!").toLowerCase();
    return humanPick;
}



function playGame() {

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if ((humanChoice == "scissors" && computerChoice == "rock") || 
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")) {
            console.log(`You loose, ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {console.log(`It's a tie!`)}
        
    }

    function playDuration() {
        for (let i=0;i<5;i++) {
            playRound(getHumanChoice(),getComputerChoice());
            console.log(`Current score is ${humanScore} for the human and ${computerScore} for the computer`);
        }
        gameEnd();
    }

    function gameEnd (humanscore, computerscore) {
        if (humanScore > computerScore) {
            console.log(`Final score is ${humanScore} for the human and ${computerScore} for the computer. The human wins.`)
        }
        else if (computerScore > humanScore) {
            console.log(`Final score is ${humanScore} for the human and ${computerScore} for the computer. The computer wins.`)
        }
        else {
            console.log(`Final score is ${humanScore} for the human and ${computerScore} for the computer. It looks like we have a draw!`)
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    playDuration();
    
}

playGame();


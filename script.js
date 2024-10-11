const currentScoreDiv = document.querySelector('#currentScore');

let humanChoice;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    humanChoice = "rock";
    playGame();
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    humanChoice = "paper";
    playGame();
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    humanChoice = "scissors";
    playGame();
})

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

let humanScore = 0;
let computerScore = 0;

function playGame() {
    
    if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, getComputerChoice());
    }    
}

function playRound(humanChoice, computerChoice) {

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        currentScoreDiv.textContent = `You win, ${humanChoice} beats ${computerChoice}. Current score is: ${humanScore} (you) vs ${computerScore} (computer)`;
        
    } else if ((humanChoice == "scissors" && computerChoice == "rock") || 
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors")) {
        computerScore++;
        currentScoreDiv.textContent = `You loose, ${computerChoice} beats ${humanChoice}. Current score is: ${humanScore} (you) vs ${computerScore} (computer)`;
        
    } else {
        currentScoreDiv.textContent = `It's a tie! Computer got ${computerChoice} and you chose ${humanChoice}. Current score is: ${humanScore} (you) vs ${computerScore} (computer)`;
    }
    checkEnd();
}

function checkEnd() {
    if (humanScore >= 5 || computerScore >= 5){
        gameEnd();
    }
}

function gameEnd () {

    const finalScoreDiv = document.createElement('div');
    currentScoreDiv.appendChild(finalScoreDiv);

    if (humanScore > computerScore) {
        finalScoreDiv.textContent = `Final score is ${humanScore} for you and ${computerScore} for the computer. You win.`;
    } else {
        finalScoreDiv.textContent = `Final score is ${humanScore} for you and ${computerScore} for the computer. You lose.`;
    }

    const resetBtn = document.createElement('button');
    resetBtn.textContent = `Play this amazing game again`;
    currentScoreDiv.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        currentScoreDiv.textContent = "";
    })
}
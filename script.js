function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }

const computerChoice = getComputerChoice();

const playerChoice = "rock";

function playRound(computerChoice, playerChoice) {
    if (computerChoice===playerChoice.toLowerCase()) {
        return "It's a tie!";
    }
}
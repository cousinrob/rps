function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }

const computerChoice = getComputerChoice();

const playerChoice = prompt('Choose rock, paper, or scissors');

function playRound(computerChoice, playerChoice) {
    if (computerChoice===playerChoice.toLowerCase()) {
        return "It's a tie!";
    }
    else {
        return "The computer chose " + computerChoice;
    }
}

console.log(playRound(computerChoice, playerChoice));
function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }

    const computerChoice = getComputerChoice();

    const playerChoice = prompt('Choose rock, paper, or scissors');

    let score = 0;

function playRound(computerChoice, playerChoice) {
    if (computerChoice===playerChoice.toLowerCase()) {
        return "It's a tie! your score is " + score + " out of 5";
    }
    else {
        return "The computer chose " + computerChoice;
    }
}

function game() {
    console.log(playRound(computerChoice, playerChoice));
    console.log(playRound(computerChoice, playerChoice));
    console.log(playRound(computerChoice, playerChoice));
    console.log(playRound(computerChoice, playerChoice));
    console.log(playRound(computerChoice, playerChoice));
}

console.log(game())
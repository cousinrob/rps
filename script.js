function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }

function getPlayerChoice() {
    let answer=prompt('Choose rock, paper, or scissors')
    return(answer);
}

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();


    let score = 0;

function playRound(computerChoice, playerChoice) {

    if (computerChoice===playerChoice.toLowerCase()) {
        return "It's a tie! your score is " + score + " out of 5";
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='paper'){
        return "The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.";
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='rock'){
        return "The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.";
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='scissors'){
        return "The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.";
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='rock'){
        return "The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.";
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='scissors'){
        return "The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.";
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='paper'){
        return "The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.";
    }
    else {
        return "Your response was invalid";
    }
}

function game() {
    console.log(playRound(computerChoice, playerChoice));
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
    computerChoice=getComputerChoice();
    playerChoice=getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
}

console.log(game())
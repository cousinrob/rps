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

function finalScore() {
    if (score===0) {
        return "Your score is 0 out of 5! Ouch...a definite loss.";
    }
    else if (score===1) {
        return "Your score is 1 out of 5! Well...at least you got something.";
    }
    else if (score===2) {
        return "Your score is 2 out of 5! I guess you're not a total loser?";
    }
    else if (score===3) {
        return "Your score is 3 out of 5! So close!";
    }
    else if (score===4) {
        return "Your score is 4 out of 5! Good show!";
    }
    else if (score===5) {
        return "Your score is 5 out of 5! You're the champion!";
    }
}

console.log(game())
console.log(finalScore())
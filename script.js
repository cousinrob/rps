function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }


    let computerChoice = getComputerChoice();



    let score = 0;
    const result = document.querySelector('#result');
    const scorecard = document.querySelector('#score');

function playRound(computerChoice, playerChoice) {

    if (computerChoice===playerChoice.toLowerCase()) {
        console.log("It's a tie! your score is " + score + " out of 5");
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='paper'){
        console.log("The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.");
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='rock'){
        console.log("The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.");
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='scissors'){
        console.log("The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.");
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='rock'){
        console.log("The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.");
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='scissors'){
        console.log("The computer chose " + computerChoice + ". You won! Your score is " + ++score + " out of 5.");
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='paper'){
        console.log("The computer chose " + computerChoice + ". You lost! Your score is " + score + " out of 5.");
    }
    else {
        console.log("Your response was invalid");
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener("click", function(e) {
    computerChoice=getComputerChoice();
    playRound(computerChoice, "rock");
});
paper.addEventListener("click", function(e) {
    computerChoice=getComputerChoice();
    playRound(computerChoice, "paper");
});
scissors.addEventListener("click", function(e) {
    computerChoice=getComputerChoice();
    playRound(computerChoice, "scissors");
});



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

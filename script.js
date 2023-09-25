function getComputerChoice() {
        let rps = ['rock','paper','scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return(rps[choice]);
    }


    let computerChoice = getComputerChoice();


    let computerScore = 0;
    let score = 0;
    const result = document.querySelector('#result');
    const scorecard = document.querySelector('#score');
    const scoreFinal = document.querySelector("#finalscore");

function playRound(computerChoice, playerChoice) {

    if (computerChoice===playerChoice.toLowerCase()) {
        result.textContent = "It's a tie!"
        scorecard.textContent= "Your score is " + score + " out of 5. The computer's score is " + computerScore + " out of 5.";
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='paper'){
        result.textContent = "The computer chose " + computerChoice + ". You won!";
        scorecard.textContent = "Your score is " + ++score + " out of 5. The computer's score is " + computerScore + " out of 5.";
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='rock'){
        result.textContent = "The computer chose " + computerChoice + ". You lost!";
        scorecard.textContent = "Your score is " + score + " out of 5. The computer's score is " + ++computerScore + " out of 5.";
    }
    else if (computerChoice==='rock' && playerChoice.toLowerCase()==='scissors'){
        result.textContent = "The computer chose " + computerChoice + ". You lost!";
        scorecard.textContent = "Your score is " + score + " out of 5. The computer's score is " + ++computerScore + " out of 5.";
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='rock'){
        result.textContent = "The computer chose " + computerChoice + ". You won!";
        scorecard.textContent="Your score is " + ++score + " out of 5. The computer's score is " + computerScore + " out of 5.";
    }
    else if (computerChoice==='paper' && playerChoice.toLowerCase()==='scissors'){
        result.textContent = "The computer chose " + computerChoice + ". You won!";
        scorecard.textContent= "Your score is " + ++score + " out of 5. The computer's score is " + computerScore + " out of 5.";
    }
    else if (computerChoice==='scissors' && playerChoice.toLowerCase()==='paper'){
        result.textContent = "The computer chose " + computerChoice + ". You lost!";
        scorecard.textContent = "Your score is " + score + " out of 5. The computer's score is " + ++computerScore + " out of 5.";
    }
    else {
        result.textContent = "Your response was invalid";
    };
    finalScore();
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
    if (computerScore===5 && score===0) {
        scoreFinal.textContent= "Your score is 0 out of 5! Ouch...a definite loss.";
    }
    else if (computerScore===5 && score===1) {
        scoreFinal.textContent= "Your score is 1 out of 5! Well...at least you got something.";
    }
    else if (computerScore===5 && score===2) {
        scoreFinal.textContent= "Your score is 2 out of 5! I guess you're not a total loser?";
    }
    else if (computerScore===5 && score===3) {
        scoreFinal.textContent= "Your score is 3 out of 5! So close!";
    }
    else if (computerScore===5 && score===4) {
        scoreFinal.textContent= "Your score is 4 out of 5! Good show!";
    }
    else if (score===5) {
        scoreFinal.textContent= "Your score is 5 out of 5! You're the champion!";
    }
}

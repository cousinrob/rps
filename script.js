function getComputerChoice() {
        let rps = ['Rock','Paper','Scissors'] ;
        const choice = Math.floor(Math.random() * rps.length);
        return("The computer chose " + rps[choice]);
    }

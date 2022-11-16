let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "Rock";
    }else if(choice == 1){
        return "Paper";
    }else if(choice = 2){
        return "Scissors";
    }
}

console.log(getComputerChoice());


//Play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a tie, Rock clobbers Rock";
        }else if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }else if(computerSelection == "scissors"){
            return "You Won! Rock beats Scissors";
        }
    }

}

//Game function
function game() {
    for(let i = 0; i < 5; i++){
        
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
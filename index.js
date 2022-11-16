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

    //tie condition
    if(playerSelection == computerSelection){
        return "It's a tie!"
    }
    //Win condition
    if(playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        return "You won! " + playerSelection + " beats " + computerSelection; 
            }

    //Lose Condition
    if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors"){
        return "You lost! " + computerSelection + " beats " + playerSelection;
    }

}

//Game function
function game() {
    for(let i = 0; i < 5; i++){

    }
}


const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
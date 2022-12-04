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

//player and computers score
let pNum = 0;
let cNum = 0;

//Play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(pNum == 5 || cNum == 5){
        pNum = 0;
        cNum = 0;
    }
    //tie condition
    if(playerSelection == computerSelection){
        pNum++;
        cNum++;
        return "It's a tie!"
    }
    //Win condition
    if(playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        pNum++;
        return "You won! " + playerSelection + " beats " + computerSelection;
            }

    //Lose Condition
    if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors"){
        cNum++;
        return "You lost! " + computerSelection + " beats " + playerSelection;
    }

}




const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const result = document.querySelector('#results');
const btnScissors = document.querySelector('#scissors');
const computerSelection = getComputerChoice();
const pScore = document.querySelector('#Pscore');
const cScore = document.querySelector('#Cscore');

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = playRound(button.value, computerSelection);
        console.log(button.value);
        pScore.textContent = "Player : " + pNum;
        cScore.textContent = "Computer Score: " + cNum;
    });
});

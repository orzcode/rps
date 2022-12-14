//Initializing variables
let totalgames = 0;
let yourscore = 0;
let computerscore = 0;
let gamecount = 0;
let playerSelection;
////

//Click events - launches the game function
const rock = document.querySelector('#rock');
rock.addEventListener("click", () => playerSelection = "Rock")
rock.addEventListener("click", game);

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => playerSelection = "Paper")
paper.addEventListener("click", game);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => playerSelection = "Scissors")
scissors.addEventListener("click", game);
////


//<!--  Here is the full game function --!>//
function game(){

//Randomly assigns a computer choice
function getComputerChoice(){
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
        return "Rock";
        case 1:
        return "Scissors";
        case 2:
        return "Paper";
    }
    return;
}
const computerSelection = getComputerChoice();
////

//Runs the round based on the two 'inputs'
function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock"){
        switch (computerSelection){
            case "Scissors":
            return "You win!";
            case "Paper":
            return "You lose!";
            case "Rock":
            return "Draw!";
        }
    } else if (playerSelection == "Scissors"){
        switch (computerSelection){
            case "Scissors":
            return "Draw!";
            case "Paper":
            return "You win!";
            case "Rock":
            return "You lose!";
    }} else if (playerSelection == "Paper"){
        switch (computerSelection){
            case "Scissors":
            return "You lose!";
            case "Paper":
            return "Draw!";
            case "Rock":
            return "You win!";
        }
    }
}
let result = playRound(playerSelection, computerSelection);
////

//totalgames counter - and respective score incrementer
totalgames = totalgames + 1;
if (result === "You win!") {
    yourscore = yourscore + 1;
}   else if (result === "You lose!") {
    computerscore = computerscore + 1;
}
////

//Live results display via DOM
const youChose = document.querySelector('#youChose');
youChose.textContent = playerSelection;

const aiChose = document.querySelector('#aiChose');
aiChose.textContent = computerSelection;

const resultDOM = document.querySelector('#resultDOM');
resultDOM.textContent = result;

const totalRounds = document.querySelector('#totalRounds');
totalRounds.textContent = totalgames;

const yourscoreDOM = document.querySelector('#yourScore');
yourscoreDOM.textContent = yourscore;

const aiScore = document.querySelector('#aiScore');
aiScore.textContent = computerscore;
////

//Final match result reveal
const matchReveal = document.querySelector('#matchReveal');
const matchRevealDiv = document.querySelector('#matchRevealDiv');
////

//Calculting final outcome - only once 5 totalgames reached - then resets totalgames and respective scores
if (totalgames == 5) {
    if (yourscore > computerscore){
    matchReveal.textContent = "win!";    
}   else if (yourscore < computerscore){
    matchReveal.textContent = "lose!";
}   else if (yourscore == computerscore){
    matchReveal.textContent = "drew!";
}
    matchRevealDiv.style.visibility = 'visible'; 
    totalgames = 0;
    yourscore = 0;
    computerscore = 0;
} else if (totalgames == 1){
    matchRevealDiv.style.visibility = 'hidden'; 
};
////
}
////


//Initializing variables
let totalgames = 0;
let yourscore = 0;
let computerscore = 0;
let gamecount = 0;
let playerSelection;
////

//DOM Manipulation
const rock = document.querySelector('#rock');
rock.addEventListener("click", () => playerSelection = "ROCK")
rock.addEventListener("click", game);

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => playerSelection = "PAPER")
paper.addEventListener("click", game);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => playerSelection = "SCISSORS")
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
    if (playerSelection == "ROCK"){
        switch (computerSelection){
            case "Scissors":
            return "You win!";
            case "Paper":
            return "You lose!";
            case "Rock":
            return "Draw!";
        }
    } else if (playerSelection == "SCISSORS"){
        switch (computerSelection){
            case "Scissors":
            return "Draw!";
            case "Paper":
            return "You win!";
            case "Rock":
            return "You lose!";
    }} else if (playerSelection == "PAPER"){
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

//Logging section - DOM these, but maybe keep them too for debugging
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection);
console.log("The result of this match was: " + result);
console.log("Total games so far: " + totalgames);
console.log("Your score is: " + yourscore);
console.log("Computer score is: " + computerscore);
////

//Calculting final outcome - only once 5 totalgames reached - then resets totalgames and respective scores
if (totalgames == 5) {
    if (yourscore > computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you win!");
}   else if (yourscore < computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you lose!");
}   else if (yourscore == computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you draw!");
}
    totalgames = 0;
    yourscore = 0;
    computerscore = 0;
};
////
}
////


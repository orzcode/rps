//Your game is going to play against the computer, so begin with a function
//called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//We’ll use this function in the game to make the computer’s play. 
//Tip: use the console to make sure this is returning the expected output before moving to the next step!
//

// UN-COMMENT this when ready (and comment one further down)
//let playerSelection = prompt("Choose a symbol!", "Rock, paper, or scissors");

var totalgames = 0;
var yourscore = 0;
var computerscore = 0;
var gamecount = 0;

//function game(){
//    for (var gamecount = 0; gamecount < 5; gamecount++) {
        //insert loop here;
//} 

//in theory, i think this should come last, AFTER the core loop
//because it calculates the final score
if (gamecount == 5) {
    if (yourscore > computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you win!");
}   else if (yourscore < computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you lose!");
}   else if (yourscore == computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you draw!");
}}
//

//the below will be part of the loop (these are core game functions)
function getComputerChoice(){
    switch (Math.floor(Math.random() * 3))
    {
        case 0:
        return "Rock";
        break;
        case 1:
        return "Scissors";
        break;
        case 2:
        return "Paper";
        break;
    }
    return;
}
const computerSelection = getComputerChoice();
//The above returns a random answer each time it is run. It is not stored in a variable.
console.log(computerSelection);
//this console log is for testing. below follows the rest of the code
//const playerSelection = "ROck";
//COMMENT THIS WHEN READY
let playerSelection = prompt("Choose a symbol!", "Rock, paper, or scissors");

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == "ROCK"){
        switch (computerSelection){
            case "Scissors":
            return "You win!";
            break;
            case "Paper":
            return "You lose!";
            break;
            case "Rock":
            return "Draw!";
            break;
        }
    } else if (playerSelection == "SCISSORS"){
        switch (computerSelection){
            case "Scissors":
            return "Draw!";
            break;
            case "Paper":
            return "You win!";
            break;
            case "Rock":
            return "You lose!";
            break;
    }} else if (playerSelection == "PAPER"){
        switch (computerSelection){
            case "Scissors":
            return "You lose!";
            break;
            case "Paper":
            return "Draw!";
            break;
            case "Rock":
            return "You win!";
            break;
        }
    }
}
let result = playRound(playerSelection, computerSelection);
totalgames = totalgames + 1;
if (result = "\"You win!\"") {
    yourscore = ++yourscore;
}   else if (result = "\"You lose!\"") {
    computerscore = ++computerscore;
}

    


///////////////
console.log("The result of this match was: " + result);
console.log("Total games so far: " + totalgames);
console.log("Your score is: " + yourscore);
console.log("Computer score is: " + computerscore);
//The above is of course more testing
////////////



//



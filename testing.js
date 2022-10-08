
//

var totalgames = 0;
var yourscore = 0;
var computerscore = 0;
var gamecount = 0;
var result;

//function game(){
  //  for (var gamecount = 0; gamecount < 5; gamecount++) {
        //the below will be part of the loop (these are core game functions)
//
function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)){
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
//
let playerSelection = "ROCK";
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == "ROCK"){
        switch (computerSelection){
            case "Scissors":
            result = "You win!";
            return result;
            break;
            case "Paper":
            result = "You lose!";
            return result;
            break;
            case "Rock":
            result = "Draw!";
            return result;
            break;
        }
    } else if (playerSelection == "SCISSORS"){
        switch (computerSelection){
            case "Scissors":
                result = "Draw!";
                return result;
            break;
            case "Paper":
                result = "You win!";
                return result;
            break;
            case "Rock":
                result = "You lose!";
                return result;
            break;
    }} else if (playerSelection == "PAPER"){
        switch (computerSelection){
            case "Scissors":
                result = "You lose!";
                return result;
            break;
            case "Paper":
                result = "Draw!";
                return result;
            break;
            case "Rock":
                result = "You win!";
                return result;
            break;
        } return result;
    } return result;
    
}
//result = playRound(playerSelection, computerSelection);
//
totalgames = totalgames + 1;
if (result = "\"You win!\"") {
    yourscore = ++yourscore;
}   else if (result = "\"You lose!\"") {
    computerscore = ++computerscore;
}
//
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection);
console.log("The result of this match was: " + result);
console.log("Total games so far: " + totalgames);
console.log("Your score is: " + yourscore);
console.log("Computer score is: " + computerscore);
//

//calculting final outcome - after core loop
if (gamecount == 5) {
    if (yourscore > computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you win!");
}   else if (yourscore < computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you lose!");
}   else if (yourscore == computerscore){
    console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you draw!");
}}
//
//}
//game();

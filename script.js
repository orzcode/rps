var totalgames = 0;
var yourscore = 0;
var computerscore = 0;
var gamecount = 0;

function game(){
 //   for (var gamecount = 0; gamecount < 5; gamecount++) {
        //the below will be part of the loop (these are core game functions)
//
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
//
//let playerSelection = prompt("Choose a symbol!", "Rock, paper, or scissors");
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
//
// totalgames = totalgames + 1;
// if (result === "You win!") {
//     yourscore = yourscore + 1;
// }   else if (result === "You lose!") {
//     computerscore = computerscore + 1;
// }
//
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection);
console.log("The result of this match was: " + result);
console.log("Total games so far: " + totalgames);
console.log("Your score is: " + yourscore);
console.log("Computer score is: " + computerscore);
alert("Round complete! Click for next round");
//Note: would like to make console display these stats before next round, instead of all at once at game end
//
}
//calculting final outcome - after core loop
// if (gamecount == 5) {
//     if (yourscore > computerscore){
//     console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you win!");
// }   else if (yourscore < computerscore){
//     console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you lose!");
// }   else if (yourscore == computerscore){
//     console.log("Match complete! Your score was " + yourscore + " compared to the computer's " + computerscore + " which means you draw!");
// }}
//
// }

game();

//
const rock = document.querySelector('#rock');

rock.addEventListener("click", playRound());

const scissors = document.querySelector('#scissors');

scissors.addEventListener("click", playRound());

const paper = document.querySelector('#paper');

paper.addEventListener("click", playRound());
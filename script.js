var totalgames = 0;
var yourscore = 0;
var computerscore = 0;
var gamecount = 0;
let playerSelection

const rock = document.querySelector('#rock');
rock.addEventListener("click", () => playerSelection = "ROCK")
rock.addEventListener("click", game);

const paper = document.querySelector('#paper');
paper.addEventListener("click", () => playerSelection = "PAPER")
paper.addEventListener("click", game);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () => playerSelection = "SCISSORS")
scissors.addEventListener("click", game);





function game(){
 //   for (var gamecount = 0; gamecount < 5; gamecount++) {
//
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

//
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
//console.log("Total games so far: " + totalgames);
//console.log("Your score is: " + yourscore);
//console.log("Computer score is: " + computerscore);
alert("Round complete! Click for next round");
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

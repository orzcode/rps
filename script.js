//Your game is going to play against the computer, so begin with a function
//called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//We’ll use this function in the game to make the computer’s play. 
//Tip: use the console to make sure this is returning the expected output before moving to the next step!
//

// UN-COMMENT this when ready
//let playerSelection = prompt("Choose a symbol!", "Rock, paper, or scissors");

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
const playerSelection = "ROck";
//COMMENT THIS WHEN READY

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
const result = playRound(playerSelection, computerSelection);
console.log(result);
//The above is of course more testing
//



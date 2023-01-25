
var rpc = ["rock","paper",
"scissors"]

game();

function getComputerChoice(rpc){
    var choice = rpc[Math.floor(Math.random() * rpc.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    var playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    if (playerSelection = "rock" && computerSelection == "paper"){
        return("You Lose! Paper beats rock!");
    } else if (playerSelection = "paper" && computerSelection == "paper"){
        return("Tie!");
    } else if (playerSelection = "scissors" && computerSelection == "paper"){
        return("You win! Scissors beat paper!");
    } else if (playerSelection = "rock" && computerSelection == "rock"){
        return("Tie!");
    } else if (playerSelection = "paper" && computerSelection == "rock"){
        return("You win! Paper beats rock!");
    } else if (playerSelection = "scissors" && computerSelection == "rock"){
        return("You lose! Rock beats scissors!");
    } else if (playerSelection = "rock" && computerSelection == "scissors"){
        return("You win! Rock beats scissors!");
    } else if (playerSelection = "paper" && computerSelection == "scissors"){
        return("You lose! Scissors beat paper!");
    } else if (playerSelection = "scissors" && computerSelection == "scissors"){
        return("Tie!");
    } else {
        return("Invalid. Please enter: Rock, Paper, or Scissors");
    }
}

function game(){
    for (var i = 0; i < 5; i++){
        const computerSelection = getComputerChoice(rpc);
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        console.log(playRound(playerSelection, computerSelection))
    }
}
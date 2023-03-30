
var rpc = ["rock","paper",
"scissors"]

const buttons = document.querySelectorAll('button');


const container = document.getElementById('box');
const res = document.getElementById('res');
const pscorebox = document.getElementById('pscore');
const cscorebox = document.getElementById('cscore');
const pchoice = document.getElementById('pchoice');
const cchoice = document.getElementById('cchoice');

game();

function getComputerChoice(rpc){
    var choice = rpc[Math.floor(Math.random() * rpc.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    pchoice.textContent = playerSelection;
    cchoice.textContent = computerSelection;
    if (playerSelection == "paper" && computerSelection == "paper"){
        
        return("Tie!")
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return ("You win! Paper beats rock!")
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("You lose! Scissors beat paper!")
    }else if (playerSelection == "rock" && computerSelection == "rock"){
        return ("Tie!")
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You lose! Paper beats rock!")
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return ("You win! Rock beats scissors!")
    }else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return ("Tie!")
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("You win! Scissors beat paper!")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return ("You lose! Rock beats scissors!")
    } else{
        return("invalid")
    }
}

function game(){
    var pscore = 0;
    var cscore = 0;
    pscorebox.textContent = pscore;
    cscorebox.textContent = cscore;
    var computerSelection = getComputerChoice(rpc);
    buttons.forEach((button) => {
        button.addEventListener('click' , () => {
            result = playRound(button.id , getComputerChoice(rpc));
            res.textContent = result;
            if (result.includes("You win!")){
                pscore = pscore + 1; 
                pscorebox.textContent = pscore;
                console.log(pscore);
            }
            if (result.includes("You lose!")){
                cscore = cscore + 1; 
                cscorebox.textContent = cscore;
                console.log(cscore);
            }
            if(pscore == 5){
                alert("You Win!");
                pscore = 0;
                cscore = 0;
                pscorebox.textContent = pscore;
                cscorebox.textContent = cscore;
            }
            if(cscore == 5){
                alert("You Lose!")
                pscore = 0;
                cscore = 0;
                pscorebox.textContent = pscore;
                cscorebox.textContent = cscore;
            }
        })
    })
} 





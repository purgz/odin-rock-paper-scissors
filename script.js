let computerOptions = ["Rock","Paper","Scissors"];


function computerPlay(){
    return computerOptions[Math.floor(Math.random() * computerOptions.length)]
}

function playRound(playerSelection, computerSelection){
    //convert input to lower case
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   
    if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "rock")){
            return `You win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection == computerSelection){
        return `Draw both players chose ${playerSelection}`
        
    } else {
        return `You lose ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice (rock,paper,scissors");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection,computerSelection))

    }
}


game()
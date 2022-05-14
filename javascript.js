const choices =['rock', 'paper', 'scissors'];

function game(){
    //play the game
    //play 5 rounds
    //console based
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //gets result of computerChoice function
    //which is R P or S
}

function playerChoice () {
    //get input from the player
    let input = prompt('Type Rock, Paper, or Scissors');
}

function computerChoice() {
    //get random input from the computer
    return choices[Math.floor(Math.random()*choices.length)]
    //choice.length means 3, due to 3 choice 0,1,2, could input 3 as choices 
    //dont change
}


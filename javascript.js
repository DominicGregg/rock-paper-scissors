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

    while(input == null){
        input = prompt('Type Rock, Paper or Scissors ')
    }

    input = input.toLowerCase();
    //this makes the string all lower case
    let check = validateInput(input)
    if(check == true){
        console.log(input);
    }
   // console.log(input);
}

function computerChoice() {
    //get random input from the computer
    return choices[Math.floor(Math.random() * choices.length)]
    //choice.length means 3, due to 3 choice 0,1,2, could input 3 as choices 
    //dont change
}


//below function validates the choice, makes sure 
//input is R P or S
//if not R P or S then it will not log the response
function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

//this begins the game
game();

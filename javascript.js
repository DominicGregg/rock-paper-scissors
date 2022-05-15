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
    console.log(computerSelection);
    //gets result of computerChoice function
    //which is R P or S
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
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
    while (check == false){
        input = prompt('Type rock, paper or scissors correctly. Spelling is important, capitalization does not matter');
        input = input.toLowerCase();
        check = validateInput(input);
        //will make input lower case and check if it is true.
    }
    //need to return input to console
    return input;
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
function validateInput(choice) {
        return choices.includes(choice);
// will only select a choice if it is R P or S (choices)
//then returns that choice to the console
}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return 'tie';
    } else if(choiceP === 'rock' && choiceC == 'scissors'){
        return 'player wins';
    } else if(choiceP === 'scissors' && choiceC == 'paper'){
        return 'player wins';
    } else if(choiceP === 'paper' && choiceC == 'rock'){
        return 'player wins';
    } else if(choiceP === 'rock' && choiceC == 'paper'){
        return 'computer wins';
    } else if(choiceP === 'scissors' && choiceC == 'rock'){
        return 'computer wins'
    } else if(choiceP === 'paper' && choiceC == 'scissors'){
        return 'computer wins'
    }
}


//this begins the game
game();
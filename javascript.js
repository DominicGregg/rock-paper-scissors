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
    while (check == false){
        input = prompt('Type rock, paper or scissors correctly. Spelling is important, capitalization does not matter');
        input = input.toLowerCase();
        check = validateInput(input);
        //will make input lower case and check if it is true.
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
    if(choices.includes(choice));
        return choices.includes(choice);
    
// will only select a choice if it is R P or S (choices)
//then returns that choice to the console
}




//this begins the game
game();
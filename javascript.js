//variable for R P and S
const a = 'rock';
const b = 'paper';
const c = 'scissors';

//randomly select an RPS variable 
const myArray = [a, b, c];

//function to randomly select R P or S form the myArray
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playerSelection() {
    
}
//error check to see if the computer function works
const computerSelection = computerPlay();
console.log(computerSelection);
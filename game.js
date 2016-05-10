var prompt = require('prompt-sync')();


var bankRoll = 100;

var playerBet = prompt("Place a bet between 5 and 10 dollars");

if (playerBet > 10 || playerBet < 5) {
    console.log("Wrong answer. Place a bet between 5 and 10");
    var playerBet = prompt("Place a bet between 5 and 10 dollars");
 } else {
    console.log("you placed a bet of $" + playerBet); 
}
    
var playerGuess = prompt("Now, guess a number between 1 and 10");

if (playerGuess > 10 || playerGuess < 1) {
    console.log("Error, guess a number between 1 and 10");
    var playerGuess = prompt("Guess a number between 1 and 10");
} else { 
    console.log("your guess is " + playerGuess); 
}

var computerGuess = (Math.floor((Math.random() * 2))+ 1);

console.log("the computer guessed " + computerGuess);

var game = function(choice1, choice2)  { 
  if (choice1 == choice2) {
     bankRoll += parseInt(playerBet);
     return ("you win $ " + playerBet + " and now have $" + bankRoll);
  } else {
     bankRoll -= playerBet;
     return ("you lose $ " + playerBet + " and now have $" + bankRoll);
  }

};

console.log(game(playerGuess,computerGuess));

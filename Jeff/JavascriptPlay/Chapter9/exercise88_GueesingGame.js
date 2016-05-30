//create secret number
var secretNumber = 17;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


//check if guess is corret

if(guess === secretNumber) {
    alert ("You got it right");
}


//check if higher

else if (guess > secretNumber) {
    alert("Your guess is to high, guess again!");
}
//otherwise, check if lower
else {
    alert("your guess is to low, guess again!");
}
/* Look up Number function in JS*/






function computerPlay() {
    const computerOptions = ['Rock','Paper','Scissors']
    var computerChoice = computerOptions[Math.floor((Math.random() * 3))];    
    return computerChoice.toLowerCase();
}
//console.log(computerPlay())

function playerPlay() {
    let sign = prompt("'Rock','Paper' or 'Scissors'?");

    if (sign.toLowerCase() == "rock") {
        var choice = "rock";
      } else if (sign.toLocaleLowerCase() == "paper") {
        var choice = "paper";
      } else if (sign.toLocaleLowerCase() == "scissors") {
        var choice = "scissors";
      } else {
        console.log("you missinputted/misspelled. default choice is rock")
        var choice = "rock";
      }
    
    return choice;
}

//console.log(playerPlay())


function game(){


    let playerscore = 0;
    let computerscore = 0;
    let roundnumber = 0;

    

    function playRound(playerSelection, computerSelection) {
    
        if (playerSelection == computerSelection) {
                var result = "tie";
                console.log("tie!");
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")
                ) {
                var result = "player";
                playerscore = playerscore + 1;
                console.log("player wins round!");
            } else {
                var result = "computer";
                computerscore = computerscore + 1;
                console.log("computer wins round!");
            }
        return result
        
    }

    for (var i = 1; i<= 5; i++) {
        playRound(playerPlay(), computerPlay());
    }

    if (playerscore>computerscore){
        return "playerwins!";
    } else if (playerscore<computerscore) {
        return "computerwins!";
    } else {
        return "tie!";
    }
    
}

console.log(game())



// you can write js here
console.log('exo-3');
 /*
   let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors'
    if (rock){
        console.log(rock)
    }else if (paper){
        console.log(paper)
    }else if (scissors){
        console.log(scissors)
    }else {
        console.log ('error')
    }
};

function getComputerChoice(){
   Math.floor(Math.random() * 2)
   return rock, paper, scissors; 
}


const winner = (getUserChoise,getComputerChoice) => {
    const result = document.querySelector('.result');
    player = player.toLowerCase();
    getUserChoise = getComputerChoice.toLowerCase();
    if(getUserChoise === getComputerChoice){
        result.textContent = 'Tie'
    }
    else if(getUserChoise == 'rock'){
        if(getComputerChoice == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(getUserChoise == 'scissors'){
        if(getComputerChoice == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(getUserChoise == 'paper'){
        if(getComputerChoice == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        
        }

    }
    }
}*/





console.log('exo-3');
var userInput = prompt('Rock, paper, scissors').toLowerCase();
var listInputs = ['rock','paper','scissors'];
var myChoise = getUserChoice(userInput);
var pcChoise = getComputerChoice();

function getUserChoice(userInput){

	switch(userInput){
		case 'rock':
			return userInput;
			break;
		case 'paper':
			return userInput;
			break;
		case 'scissors':
			return userInput;
			break;
		default :
			userInput = 'Choisisez entre "rock","paper" et "scissors".';
			return userInput;
			break;
	}

}

function getComputerChoice(){
	var pcChoise = listInputs[Math.floor(Math.random() * 2)];
	return pcChoise;
}

function determineWinner(myChoise, pcChoise){
	
	if (myChoise === pcChoise) {
		return 'Tied';
	} else if (myChoise === 'paper' && pcChoise === 'rock') {
		return 'Won';
	} else if (myChoise === 'rock' && pcChoise === 'scissors') {
		return 'Won';
	} else if (myChoise === 'scissors' && pcChoise === 'paper') {
		return 'Won';
	} else {
		return 'Lost';
	}
}


function playGame(){
	console.log(determineWinner(myChoise, pcChoise));
}

console.log(myChoise);
console.log(pcChoise);
playGame();
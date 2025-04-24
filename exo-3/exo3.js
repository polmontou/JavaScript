// you can write js here
console.log('exo-3');
const possibleChoices =['rock','paper','scissors'];
let playerInput = prompt("Your choice (rock, paper, scissors) :");


function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();
    if (possibleChoices.includes(playerInput) || playerInput === 'bomb') {
        return playerInput;
    } else {
        console.log('Erreur, choississez entre \'rock\', \'paper\' et \'scissors\'.');
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3);
    return possibleChoices[randomChoice];
}

function findWinner(playerChoice,computerChoice) {
    if (playerChoice === 'bomb'){
        return('Won!');
    } else if (playerChoice === computerChoice) {
        return('Tied!');
    } else {
        if (playerChoice === 'rock' ) {
            if (computerChoice === 'paper') {
                return('Lost!');
            }
            if (computerChoice === 'scissors') {
                return('Won!');
            }
        }
        if (playerChoice === 'paper' ) {
            if (computerChoice === 'scissors') {
                return('Lost!');
            }
            if (computerChoice === 'rock') {
                return('Won!');
            }
        }
        if (playerChoice === 'scissors' ) {
            if (computerChoice === 'rock') {
                return('Lost!');
            }
            if (computerChoice === 'paper') {
                return('Won!');
            }
        }
    }
}

function playGame(playerInput) {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    
    console.log("Votre choix est : "+uChoice+"\nL'ordi a choisi : "+computerChoice); 

    console.log(findWinner(uChoice, computerChoice));
}

playGame(playerInput);
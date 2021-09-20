let counter = [0, 0, 0];
let round = 0;

const computerPlay = () => {
    let computer = Math.floor(Math.random() * 3 + 1);
    return computer === 1 ? 'Paper' : computer === 2 ? 'Scissor' : 'Rock'
}

const singleRound = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        return 'Draw'
    } else {
        if (playerSelection === 'Rock') {
            result = computerSelection === 'Scissor' ? 'Win' : 'Loose';
        } else if (playerSelection === 'Paper') {
            result = computerSelection === 'Rock' ?  'Win' : 'Loose';
        } else if (playerSelection === 'Scissor') {
            result = computerSelection === 'Paper' ?  'Win' : 'Loose';
        }
    }
    return result
}

function globalScoresUpdate(currentRound, counter) {
    round++;
    pScore.textContent = `Round ${round}`
    if (currentRound === 'Win') counter[0]++;
    if (currentRound === 'Loose') counter[1]++;
    if (currentRound === 'Draw') counter[2]++;
}

const resultLogger = text => {
   pResult.textContent = text;
}

const resetter = () => {
    counter = [0,0,0];
    round = 0
}

const endGame = () => {
    if (!(round === 5)) return;
    endGameResult = counter[0] > counter[1] ? 'Win' : 'Lost'
    if (confirm(`You ${endGameResult}! 
        Press Ok if want to start again`)) {
    resetter()    
    }    
}

function roundCaller(e) {
    let player = e.currentTarget.dataset.hand;
    let computerRound = computerPlay();
    let currentRound = singleRound(player, computerRound);
    globalScoresUpdate(currentRound, counter);
    let notDraw = `You Played: ${player}.\nComputer Played: ${computerRound}.\nResult: You ${currentRound}`
    let pLog = currentRound === 'Draw' ? `Both Played: ${player}.\nIt's a Draw` : notDraw;
    resultLogger(pLog);
    endGame();
}


const pResult = document.querySelector('#result-text');
const pScore = document.querySelector('#score')
const playerChoice = document.querySelectorAll('.hand');
playerChoice.forEach( choice => choice.addEventListener('click', roundCaller))


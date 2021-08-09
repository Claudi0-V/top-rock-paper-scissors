const computerPlay = () => {
    let computer = Math.floor(Math.random() * 3 + 1);
    return computer === 1 ? 'Paper' : computer === 2 ? 'Scissor' : 'Rock'
}


const singleRound = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        return `Both Played: ${playerSelection}.\nIt's a Draw`
    } else {
        if (playerSelection === 'Rock') {
            if (computerSelection === 'Scissor') {
                result = 'Win'
            } else {
                result = 'Loose'
            }
        } else if (playerSelection === 'Paper') {
            if (computerSelection === 'Rock') {
                result = 'Win'
            } else {
                result = 'Loose'
            }
        } else if (playerSelection === 'Scissor') {
            if (computerSelection === 'Paper') {
                result = 'Win'
            } else {
                result = 'Loose'
            }
        }

        return `You Played: ${playerSelection}.\nComputer Played: ${computerSelection}.\nResult: You ${result}`
    }
}

let computerSelection = computerPlay();


/*
const game = (func, arg1, arg2) => {
    let counter = [0, 0, 0];
    let round = 1
    for (let i = 0; i < 5; i++) {
        let current = func(arg1(), arg2);
        console.log(`round ${round++}: ${current}`);
        if (current === "It's a Draw") {
            counter[0] += 1;
        } else if (current === "You Win") {
            counter[1] += 1;
        } else {
            counter[2] += 1;
        }
    }
    return `End of game: ${counter[0]} Draws, ${counter[1]} Wins and ${counter[2]} Losts`
}
*/

function roundCaller(e) {
    player = e.currentTarget.dataset.hand;
    console.log(singleRound(player, computerSelection))

    
}
const playerChoice = document.querySelectorAll('.hand');
playerChoice.forEach( choice => choice.addEventListener('click', roundCaller))


//singleRound(player, computerSelection)
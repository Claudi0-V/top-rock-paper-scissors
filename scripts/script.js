const computerPlay = () => {
	let computer = 	Math.floor(Math.random() * 3 + 1);
	switch (computer) {
		case 1: 
			return 'Paper'
		case 2: 
			return 'Scissor'
		case 3:
			return 'Rock'
	}
}



const singleRound = (playerSelection, computerSelection) => {
	let result;
	if (playerSelection === computerSelection()) {
		return "It's a Draw"
	} else {
		if (playerSelection === 'Rock') {
			if (computerSelection() === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		} else if (playerSelection === 'Paper') {
			if (computerSelection() === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		}else if (playerSelection === 'Rock') {
			if (computerSelection() === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		}

	return `You ${result}`
	}
}

player = 'Paper';
computerSelection = computerPlay;

const game = (func, arg1, arg2) => {	
	let counter = [0,0,0];
	let round = 1
	for (let i = 0; i < 5; i++) {
		let current = func(arg1, arg2);
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

console.log(game(singleRound, player, computerSelection))
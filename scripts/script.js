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
	if (playerSelection === computerSelection) {
		return "It's a Draw"
	} else {
		if (playerSelection === 'Rock') {
			if (computerSelection === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		} else if (playerSelection === 'Paper') {
			if (computerSelection === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		}else if (playerSelection === 'Rock') {
			if (computerSelection === 'Scissor') {
				result = 'Win'
			} else {
				result = 'Loose'
			}
		}

	return `You ${result}`		
	}
}

player = 'Rock';
computerSelection = computerPlay();


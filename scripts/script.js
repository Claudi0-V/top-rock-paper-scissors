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
	
}
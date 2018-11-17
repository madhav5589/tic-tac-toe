export class Player {
	name: string;
	score: number = 0;

	updateScore(total: number) {
		this.score += total;
		return this.score;
	}
}

export class PlayerDetails {
	index: number;
	playerName: string;
}

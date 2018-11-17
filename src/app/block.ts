export class Block {
	free: boolean = true;

	value: string = ''; // cross | circle
	symbol: string = ''; // cross | circle


	setValue(value) {
		this.value = value;
		if ( this.value === 'tick' ) {
			this.symbol = 'X';
		} else {
			this.symbol = 'O';
		}
	}
}

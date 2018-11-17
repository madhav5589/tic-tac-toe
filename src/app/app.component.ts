import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Player, PlayerDetails } from './player';
import { Block } from './block';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService]
})
export class AppComponent implements OnInit {
	lock = false;
	public  player1: Player;
	public player2: Player;
  public playerName: string;
  public showPlayAgainButton: boolean;
  public showResetButton: boolean;

	constructor (
		public gs: GameService,
		public snackBar: MatSnackBar,
		public dialog: MatDialog
		) {
      // openDialog to capture player's names
      // have to initialize in constructor because of this know bug: https://github.com/angular/material2/issues/5268
      for (let i = 2; i >= 1; i--) {
        this.openDialog('Player '+ i, i);
      }
      this.showPlayAgainButton = false;
      this.showResetButton = true;
    }
	ngOnInit() {
		this.gs.players[0].name = 'Player 1';
    this.gs.players[1].name = 'Player 2';
  }

	newGame() {
    location.reload();
	}

	resetGame() {
    // instead of reload the page, reset the board and score of each players
    this.gs.freeBlocksRemaining = 9;
		this.gs.initBlocks();
		this.lock = false;
    this.gs.turn = 0;
    this.showPlayAgainButton = false;

	}

	playerClick(i) {
		if( this.gs.blocks[i].free === false || this.lock === true ) { // If Block is already fill, don't Do anything
			return;
		}

		this.gs.freeBlocksRemaining -= 1; // Reduce no. of free blocks after each selection

    if ( this.gs.turn === 0 ) { // Player1 Turn
			this.gs.blocks[i].setValue('tick');

		} else { // Player2 Turn
			this.gs.blocks[i].setValue('cross');
		}

    this.gs.blocks[i].free = false;
    // const complete = this.gs.blockSetComplete();
    if (this.checkWinner()) {
      this.lock = true;
			this.gs.players[this.gs.turn].score += 1;
			this.snackBar.open('Winner:', ' ' + this.gs.players[this.gs.turn].name, {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
			});

      this.showPlayAgainButton = true;
			return;
    } else {

    		if( this.gs.freeBlocksRemaining <= 0 ) {
    			this.gs.draw += 1;
    			this.lock = true;
    			this.snackBar.open('Game:', 'Draw', {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
    			});

          this.showPlayAgainButton = true;
    			return;
    		} else {
          this.changeTurn();
        }
  }
}

  checkWinner() {
    return this.gs.blockSetComplete();
  }

  playAgain() {
    this.resetGame();
  }

	openDialog(name: string, playerIndex: number): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
		   width: '300px',
		   data: { index: playerIndex, playerName: name },
		   disableClose: true,

		});

		dialogRef.afterClosed().subscribe(result => {
			if (result !== undefined) {
				if (result.index === 1) {
					this.gs.players[0].name = result.playerName;
				} else {
					this.gs.players[1].name = result.playerName;
				}
			}
		});
	}


	changeTurn() {
		var player = this.gs.changeTurn();
	}
}

@Component({
	selector: 'dialog-overview-example-dialog',
	templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {

	constructor(
	  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
	  @Inject(MAT_DIALOG_DATA) public data: PlayerDetails
	  ) {}
  }

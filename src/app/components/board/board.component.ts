import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Player } from '../../models/player';
import { GameService } from './game.service';
import { PlayerNameDialogComponent } from '../player-name-dialog/player-name-dialog.component';

@Component({
    selector: 'game-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.scss' ],
    providers: [ GameService ]
})
export class BoardComponent implements OnInit {
    public  player1: Player;
    public player2: Player;
    public playerName: string;
    public showPlayAgainButton: boolean;
    public showResetButton: boolean;
    private snackbarConfig: any;
    private isGameOver: boolean;

    constructor (
        public gs: GameService,
        public snackBar: MatSnackBar,
        public dialog: MatDialog
        ) {
            // openDialog to capture player's names
            // have to initialize in constructor because of this know bug: https://github.com/angular/material2/issues/5268
            for (let i = 2; i >= 1; i--) { // we can also use gameService.players.length
                this.openDialog('Player ' + i, i);
            }
            this.showPlayAgainButton = false;
            this.showResetButton = true;

            // set config for snackbar
            this.snackbarConfig = {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
            };
        }
    ngOnInit() {
        this.gs.initBoard();
        this.gs.initPlayers();
    }

    newGame() {
        location.reload();
    }

    resetGame() {
        // instead of reload the page, reset the board and score of each players
        this.gs.availableCells = 9;
        this.gs.initBoard();
        this.isGameOver = false;
        this.gs.currentPlayer = 0;
        this.showPlayAgainButton = false;
    }

    playerClick(i) {
        // If cell is already filled or game is over, don't do anything
        if ( this.gs.board[i].available === false || this.isGameOver === true ) {
            return;
        }

        this.gs.updateBlock(i);
        this.gs.availableCells -= 1; // reduce no. of available cells after each selection

        this.gs.board[i].available = false;
        if (this.checkWinner()) {
            this.isGameOver = true;
            this.gs.updateScore();
            this.snackBar.open('Winner:', ' ' + this.gs.players[this.gs.currentPlayer].name, this.snackbarConfig );
            this.showPlayAgainButton = true;
            return;
        } else {
            if ( this.gs.availableCells <= 0 ) {
                // this.gs.draw += 1; // we can keep track of draw count as well
                this.isGameOver = true;
                this.snackBar.open('Game:', 'Draw', this.snackbarConfig );

                this.showPlayAgainButton = true;
                return;
            } else {
                this.changeTurn();
            }
        }
    }

    checkWinner() {
        return this.gs.isAnyWinner();
    }

    playAgain() {
        this.resetGame();
    }

    openDialog(name: string, playerIndex: number): void {
        const dialogRef = this.dialog.open(PlayerNameDialogComponent, {
                width: '300px',
                data: { index: playerIndex, playerName: name },
                disableClose: true
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

    // switch player
    changeTurn() {
        const player = this.gs.changeTurn();
    }
}

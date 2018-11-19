import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { Block } from '../../models/block';

@Injectable()
export class GameService {
    players = [];
    currentPlayer = 0; // By Default First Player turn is First
    // draw = 0; // we can keep track of draw count

    board: Block[];
    availableCells = 9;

    constructor() { }

    initBoard() {
        this.board = [];

        for (let i = 0; i < 9; i++) {
            const block: Block = {
                // initialize all blocks with empty and mark them as available
                available: true,
                symbol: ''
            };
            this.board.push(block);
        }
    }

    initPlayers() {
        // Player1
        const player1 = new Player();
        player1.name = 'Player 1';
        player1.score = 0;

        // Player2
        const player2 = new Player();
        player2.name = 'Player 2';
        player2.score = 0;

        this.players.push(player1);
        this.players.push(player2);
    }

    updateBlock(index: number) {
        if (this.currentPlayer === 0) {
            this.board[index].symbol = 'X';
        } else {
            this.board[index].symbol = 'O';
        }
    }

    updateScore() {
        this.players[this.currentPlayer].score += 1;
    }

    changeTurn() {
        this.currentPlayer = this.currentPlayer === 1 ? 0 : 1;
        return this.currentPlayer;
    }

    isAnyWinner() {
        const block1 = this.board[0];
        const block2 = this.board[1];
        const block3 = this.board[2];
        const block4 = this.board[3];
        const block5 = this.board[4];
        const block6 = this.board[5];
        const block7 = this.board[6];
        const block8 = this.board[7];
        const block9 = this.board[8];

        if (
            (block1.available === false && block2.available === false && block3.available === false &&
                 (block1.symbol === block2.symbol) && (block1.symbol === block3.symbol)) ||
            (block1.available === false && block4.available === false && block7.available === false &&
                 (block1.symbol === block4.symbol) && (block1.symbol === block7.symbol)) ||
            (block1.available === false && block5.available === false && block9.available === false &&
                 (block1.symbol === block5.symbol) && (block1.symbol === block9.symbol)) ||
            (block2.available === false && block5.available === false && block8.available === false &&
                 (block2.symbol === block5.symbol) && (block2.symbol === block8.symbol)) ||
            (block3.available === false && block6.available === false && block9.available === false &&
                 (block3.symbol === block6.symbol) && (block3.symbol === block9.symbol)) ||
            (block3.available === false && block5.available === false && block7.available === false &&
                 (block3.symbol === block5.symbol) && (block3.symbol === block7.symbol)) ||
            (block4.available === false && block5.available === false && block6.available === false &&
                 (block4.symbol === block5.symbol) && (block4.symbol === block6.symbol)) ||
            (block7.available === false && block8.available === false && block9.available === false &&
                 (block7.symbol === block8.symbol) && (block7.symbol === block9.symbol))) {
            return true;
        } else {
            return false;
        }
    }
}

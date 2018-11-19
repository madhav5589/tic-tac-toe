import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlayerDetails } from '../../models/player';

@Component({
    selector: 'player-name-dialog',
    templateUrl: 'player-name-dialog.component.html',
    })
    export class PlayerNameDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<PlayerNameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PlayerDetails
        ) {}
    }

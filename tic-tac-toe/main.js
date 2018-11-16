(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\t<div class=\"row\">\n    <div><h1 style=\"text-align: center\">TIC-TAC-TOE</h1></div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"game-area\">\n        <div class=\"well well-sm\" style=\"height: 50px; font-weight: bold;\">\n            <span style=\"float:left\">\n              <a href=\"#\" (click)=\"openDialog(gs.players[0].name, 1)\">{{ gs.players[0].name }} </a>\n              <br>\n              Wins: {{ gs.players[0].score }}\n            </span>\n            <span style=\"float: right;\">\n              <a href=\"#\" (click)=\"openDialog(gs.players[1].name, 2)\">{{gs.players[1].name}}</a>\n              <br>\n              Wins: {{ gs.players[1].score }}\n            </span>\n        </div>\n\t\t\t\t\t<mat-grid-list class=\"board-grid\" style=\"border: 1px solid\" cols=\"3\">\n\t\t\t\t\t\t<mat-grid-tile class=\"cellClass\" *ngFor=\"let block of gs.blocks; let i = index;\" (click)=\"playerClick(i)\">\n                {{ block.symbol }}\n            </mat-grid-tile>\n          </mat-grid-list>\n          <div style=\"margin-top: 10px; align-content: center; margin-left: 140px;\">\n            <button mat-flat-button (click)=\"playAgain()\" style=\"margin-right:10px;\" [hidden]=\"!showPlayAgainButton\" color=\"primary\">Play Again</button>\n            <button mat-flat-button (click)=\"resetGame()\" style=\"margin-right:10px;\" [hidden]=\"showPlayAgainButton\" color=\"accent\">Reset</button>\n            <button mat-flat-button (click)=\"newGame()\" color=\"primary\">New Game</button>\n          </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cellClass {\n  font-size: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJbnRlbFxccHJvamVjdHNcXHRpYy10YWMtdG9lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBOEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbENsYXNzIHtcclxuICBmb250LXNpemUgICA6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(gs, snackBar, dialog) {
        this.gs = gs;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.lock = false;
        // openDialog to capture player's names
        // have to initialize in constructor because of this know bug: https://github.com/angular/material2/issues/5268
        for (var i = 2; i >= 1; i--) {
            this.openDialog('Player ' + i, i);
        }
        this.showPlayAgainButton = false;
        this.showResetButton = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.gs.players[0].name = 'Player 1';
        this.gs.players[1].name = 'Player 2';
    };
    AppComponent.prototype.newGame = function () {
        location.reload();
    };
    AppComponent.prototype.resetGame = function () {
        // instead of reload the page, reset the board and score of each players
        this.gs.freeBlocksRemaining = 9;
        this.gs.initBlocks();
        this.lock = false;
        this.gs.turn = 0;
        this.showPlayAgainButton = false;
    };
    AppComponent.prototype.playerClick = function (i) {
        if (this.gs.blocks[i].free === false || this.lock === true) { // If Block is already fill, don't Do anything
            return;
        }
        this.gs.freeBlocksRemaining -= 1; // Reduce no. of free blocks after each selection
        if (this.gs.turn === 0) { // Player1 Turn
            this.gs.blocks[i].setValue('tick');
        }
        else { // Player2 Turn
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
        }
        else {
            if (this.gs.freeBlocksRemaining <= 0) {
                this.gs.draw += 1;
                this.lock = true;
                this.snackBar.open('Game:', 'Draw', {
                    duration: 6000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top'
                });
                this.showPlayAgainButton = true;
                return;
            }
            else {
                this.changeTurn();
            }
        }
    };
    AppComponent.prototype.checkWinner = function () {
        return this.gs.blockSetComplete();
    };
    AppComponent.prototype.playAgain = function () {
        this.resetGame();
    };
    AppComponent.prototype.openDialog = function (name, playerIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '300px',
            data: { index: playerIndex, playerName: name },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                if (result.index === 1) {
                    _this.gs.players[0].name = result.playerName;
                }
                else {
                    _this.gs.players[1].name = result.playerName;
                }
            }
        });
    };
    AppComponent.prototype.changeTurn = function () {
        var player = this.gs.changeTurn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block.ts":
/*!**************************!*\
  !*** ./src/app/block.ts ***!
  \**************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
var Block = /** @class */ (function () {
    function Block() {
        this.free = true;
        this.value = ''; // cross | tick
        this.symbol = ''; // cross | tick
    }
    Block.prototype.setValue = function (value) {
        this.value = value;
        if (this.value === 'tick') {
            this.symbol = 'X';
        }
        else {
            this.symbol = 'O';
        }
    };
    return Block;
}());



/***/ }),

/***/ "./src/app/dialog-overview-example-dialog.html":
/*!*****************************************************!*\
  !*** ./src/app/dialog-overview-example-dialog.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <p>What's your name?</p>\r\n    <mat-form-field>\r\n        <input matInput name=\"playerName\" [(ngModel)]=\"data.playerName\" placeholder=\"Enter player name\" cdkFocusInitial required>\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <!-- <button mat-raised-button (click)=\"onNoClick()\">Cancel</button> -->\r\n  <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"this.data.playerName === ''\" [mat-dialog-close]=\"data\">Submit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/app/player.ts");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./src/app/block.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = /** @class */ (function () {
    function GameService() {
        this.players = [];
        this.turn = 0; // By Default First Player turn is First
        this.draw = 0;
        this.blocks = [];
        this.freeBlocksRemaining = 9;
        this.initBlocks();
        this.initPlayers();
    }
    GameService.prototype.initBlocks = function () {
        this.blocks = [];
        for (var i = 1; i <= 9; ++i) {
            var block = new _block__WEBPACK_IMPORTED_MODULE_2__["Block"]();
            block.free = true;
            block.value = "";
            block.symbol = "";
            this.blocks.push(block);
        }
    };
    GameService.prototype.initPlayers = function () {
        // Player1
        var player1 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        // Player2
        var player2 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
        this.players.push(player1);
        this.players.push(player2);
    };
    GameService.prototype.changeTurn = function () {
        if (this.turn == 1) {
            this.turn = 0;
        }
        else {
            this.turn = 1;
        }
        return this.turn;
    };
    GameService.prototype.blockSetComplete = function () {
        var block1 = this.blocks[0];
        var block2 = this.blocks[1];
        var block3 = this.blocks[2];
        var block4 = this.blocks[3];
        var block5 = this.blocks[4];
        var block6 = this.blocks[5];
        var block7 = this.blocks[6];
        var block8 = this.blocks[7];
        var block9 = this.blocks[8];
        if ((block1.free == false && block2.free == false && block3.free == false && (block1.value == block2.value) && (block1.value == block3.value)) ||
            (block1.free == false && block4.free == false && block7.free == false && (block1.value == block4.value) && (block1.value == block7.value)) ||
            (block1.free == false && block5.free == false && block9.free == false && (block1.value == block5.value) && (block1.value == block9.value)) ||
            (block2.free == false && block5.free == false && block8.free == false && (block2.value == block5.value) && (block2.value == block8.value)) ||
            (block3.free == false && block6.free == false && block9.free == false && (block3.value == block6.value) && (block3.value == block9.value)) ||
            (block3.free == false && block5.free == false && block7.free == false && (block3.value == block5.value) && (block3.value == block7.value)) ||
            (block4.free == false && block5.free == false && block6.free == false && (block4.value == block5.value) && (block4.value == block6.value)) ||
            (block7.free == false && block8.free == false && block9.free == false && (block7.value == block8.value) && (block7.value == block9.value))) {
            return true;
        }
        return false;
    };
    /*
        Check if any Block Set is completing
    */
    GameService.prototype.GetCompletingSet = function () {
        var block1 = this.blocks[0];
        var block2 = this.blocks[1];
        var block3 = this.blocks[2];
        var block4 = this.blocks[3];
        var block5 = this.blocks[4];
        var block6 = this.blocks[5];
        var block7 = this.blocks[6];
        var block8 = this.blocks[7];
        var block9 = this.blocks[8];
        // Block#1
        if (block1.free == false && block2.free == true && block3.free == false && (block1.value == 'cross' && block1.value == block3.value)) {
            return 2;
        }
        else if (block1.free == false && block2.free == false && block3.free == true && (block1.value == 'cross' && block1.value == block2.value)) {
            return 3;
        }
        else if (block1.free == false && block4.free == true && block7.free == false && (block1.value == 'cross' && block1.value == block7.value)) {
            return 4;
        }
        else if (block1.free == false && block4.free == false && block7.free == true && (block1.value == 'cross' && block1.value == block4.value)) {
            return 7;
        }
        else if (block1.free == false && block5.free == true && block9.free == false && (block1.value == 'cross' && block1.value == block9.value)) {
            return 5;
        }
        else if (block1.free == false && block5.free == false && block9.free == true && (block1.value == 'cross' && block1.value == block5.value)) {
            return 9;
            // Block#2
        }
        else if (block2.free == false && block3.free == false && block1.free == true && (block2.value == 'cross' && block2.value == block3.value)) {
            return 1;
        }
        else if (block2.free == false && block8.free == false && block5.free == true && (block2.value == 'cross' && block2.value == block8.value)) {
            return 5;
        }
        else if (block2.free == false && block8.free == true && block5.free == false && (block2.value == 'cross' && block2.value == block5.value)) {
            return 8;
            // Block#3
        }
        else if (block3.free == false && block6.free == true && block9.free == false && (block3.value == 'cross' && block3.value == block9.value)) {
            return 6;
        }
        else if (block3.free == false && block9.free == true && block6.free == false && (block3.value == 'cross' && block3.value == block6.value)) {
            return 9;
        }
        else if (block3.free == false && block5.free == true && block7.free == false && (block3.value == 'cross' && block3.value == block7.value)) {
            return 5;
        }
        else if (block3.free == false && block7.free == true && block5.free == false && (block3.value == 'cross' && block3.value == block5.value)) {
            return 7;
            // Block#4
        }
        else if (block4.free == false && block5.free == true && block6.free == false && (block4.value == 'cross' && block4.value == block6.value)) {
            return 5;
        }
        else if (block4.free == false && block6.free == true && block5.free == false && (block4.value == 'cross' && block4.value == block5.value)) {
            return 6;
            // Block#5
        }
        else if (block5.free == false && block4.free == true && block6.free == false && (block5.value == 'cross' && block5.value == block6.value)) {
            return 4;
            // Block#7
        }
        else if (block7.free == false && block8.free == true && block9.free == false && (block7.value == 'cross' && block7.value == block9.value)) {
            return 8;
        }
        else if (block7.free == false && block9.free == true && block8.free == false && (block7.value == 'cross' && block7.value == block8.value)) {
            return 9;
            // Block#8
        }
        else if (block8.free == false && block7.free == true && block9.free == false && (block8.value == 'cross' && block8.value == block9.value)) {
            return 7;
        }
        else { // If none is applicable
            return 0;
        }
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
        this.score = 0;
    }
    Player.prototype.updateScore = function (total) {
        this.score += total;
        return this.score;
    };
    return Player;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Intel\projects\tic-tac-toe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
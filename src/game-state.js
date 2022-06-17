import { Player } from '../src/player.js';
import { GameBoard } from './game-board.js';

export const GameState = () => {

    let gameBoard;
    let gameWon = false;
    const playerYellow = Player('yellow');
    const playerRed = Player('red');

    let currentPlayer = playerYellow;

    const placeAChecker = (column) => {
        gameBoard.placeCheckerInColumn(column, currentPlayer.getPlayerColor());
        _switchPlayer();
    };

    const _switchPlayer = () => {
        currentPlayer === playerYellow ? currentPlayer = playerRed: currentPlayer = playerYellow;
    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    const reportFourInARow = (fourInARow) => {

        if (fourInARow) {
            gameWon = true;
        }
        
    };

    const initialize = (GameBoard) => {
        gameBoard = GameBoard;
    };

    return {
        getCurrentPlayer,
        placeAChecker,
        reportFourInARow,
        initialize,
    };

};
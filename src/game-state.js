import { Player } from '../src/player.js';
import { GameBoard } from './game-board.js';

export const GameState = () => {

    let gameBoard;
    let gameWon = false;
    const playerYellow = Player('yellow');
    const playerRed = Player('red');
    let lastMove;

    let currentPlayer = playerYellow;

    const setLastMove = (row, column) => {
        lastMove = [row, column];
    };

    const placeAChecker = (column) => {
        gameBoard.placeCheckerAndRecordLast(column, currentPlayer.getPlayerColor());
        _updateWinStatus(gameBoard.checkForFourInARow(lastMove[0], lastMove[1], currentPlayer.getPlayerColor()));
        _togglePlayer();
    };

    const _updateWinStatus = (fourInARow) => {

        if (fourInARow) {
            gameWon = true;
            console.log('Winner:', currentPlayer.getPlayerColor());
        };

    };

    const _togglePlayer = () => {

        if (currentPlayer === playerYellow) {
            currentPlayer = playerRed;
        } else {
            currentPlayer = playerYellow;
        };
        console.log('toggled to:',currentPlayer.getPlayerColor());

    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    const initialize = (GameBoard) => {
        gameBoard = GameBoard;
    };

    const getWinStatus = () => {
        return gameWon;
    };

    const setCurrentPlayer = (playerColor) => {

        if (playerColor === 'yellow') {
            currentPlayer = playerYellow;
        } else if (playerColor === 'red'){
            currentPlayer = playerRed;
        };
    };

    return {
        setLastMove,
        getWinStatus,
        getCurrentPlayer,
        setCurrentPlayer,
        placeAChecker,
        initialize,
    };

};
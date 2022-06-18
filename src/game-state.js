import { Player } from '../src/player.js';
import { GameBoard } from './game-board.js';

export const GameState = () => {

    let gameBoard;
    let gameWon = false;
    const playerYellow = Player('yellow');
    const playerRed = Player('red');
    let lastMove;

    let gameStatusBoard = document.createElement('div');
    gameStatusBoard.classList.add('status-board');
    let gameStatusText = document.createElement('div');
    let currentPlayerDisplay = document.createElement('div');
    currentPlayerDisplay.id = 'player-display';
    gameStatusBoard.appendChild(gameStatusText);
    gameStatusBoard.appendChild(currentPlayerDisplay);

    let currentPlayer = playerYellow;
    gameStatusText.textContent = `Current Player:`;
    currentPlayerDisplay.textContent = `${currentPlayer.getPlayerColor()}`;

    const addStatusBoardToDOM = () => {
        document.body.appendChild(gameStatusBoard);
    };

    const setLastMove = (row, column) => {
        lastMove = [row, column];
    };

    const placeAChecker = (column) => {
        gameBoard.placeCheckerAndRecordLast(column, currentPlayer.getPlayerColor());
        if (gameBoard.checkForFourInARow(lastMove[0], lastMove[1], currentPlayer.getPlayerColor())){
            gameWon = true;
        };

        if (gameWon) {
            gameStatusText.textContent = `${currentPlayer.getPlayerColor()} Wins!`;
            gameStatusText.style.color = currentPlayer.getPlayerColor();
            currentPlayerDisplay.textContent = '';
        } else {
            _togglePlayer();
            currentPlayerDisplay.textContent = `${currentPlayer.getPlayerColor()}`;
        };
    };

    // const _updateWinStatus = (fourInARow) => {

    //     if (fourInARow) {
            
    //     };

    // };

    const _togglePlayer = () => {

        if (currentPlayer === playerYellow) {
            currentPlayer = playerRed;
        } else {
            currentPlayer = playerYellow;
        };

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
        } else if (playerColor === 'red') {
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
        addStatusBoardToDOM,
    };

};
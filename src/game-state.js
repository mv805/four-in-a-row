import { Player } from '../src/player.js';

export const GameState = () => {

    let selectionBar;
    let gameBoard;
    let gameWon = false;
    let lastMove;
    const playerYellow = Player('yellow');
    const playerRed = Player('red');

    let gameStatusBoard = document.createElement('div');
    gameStatusBoard.classList.add('status-board');
    let gameStatusText = document.createElement('div');
    let currentPlayerDisplay = document.createElement('div');
    currentPlayerDisplay.id = 'player-display';
    gameStatusBoard.appendChild(gameStatusText);
    gameStatusBoard.appendChild(currentPlayerDisplay);

    let currentPlayer = playerYellow;
    gameStatusText.textContent = `Current Player:`;
    currentPlayerDisplay.textContent = `${ currentPlayer.getPlayerColor() }`;

    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restart-button');

    const _restartGame = () => {
        window.location.reload();
    };

    const addStatusBoardToDOM = () => {
        document.body.appendChild(gameStatusBoard);
        restartButton.addEventListener('click', _restartGame);
    };

    const addRestartButtonToDOM = () => {
        document.body.appendChild(restartButton);  
    };

    const setLastMove = (row, column) => {
        lastMove = [row, column];
    };

    const placeAChecker = (column) => {
        gameBoard.placeCheckerAndRecordLast(column, currentPlayer.getPlayerColor());
        _checkWinStatus();

        if (gameWon) {
            _shutDownGame();
        } else {
            _togglePlayer();
            currentPlayerDisplay.textContent = `${ currentPlayer.getPlayerColor() }`;
        }

    };

    const _checkWinStatus = () => {

        if (gameBoard.checkForFourInARow(lastMove[0], lastMove[1], currentPlayer.getPlayerColor())) {
            gameWon = true;
            console.log('win status:', gameWon);
            gameStatusText.textContent = `${ currentPlayer.getPlayerColor() } Wins!`;
            gameStatusText.style.color = currentPlayer.getPlayerColor();
            gameStatusBoard.style.borderColor = currentPlayer.getPlayerColor();
            currentPlayerDisplay.textContent = '';
        }

    };

    const _shutDownGame = () => {
        console.log('shutdown game', selectionBar);
        selectionBar.setSelectionBarState(false);
    };

    const _togglePlayer = () => {

        if (currentPlayer === playerYellow) {
            currentPlayer = playerRed;
        } else {
            currentPlayer = playerYellow;
        }

    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    const initialize = (GameBoard, SelectionBar) => {
        gameBoard = GameBoard;
        selectionBar = SelectionBar;
    };

    const getWinStatus = () => {
        return gameWon;
    };

    const setCurrentPlayer = (playerColor) => {

        if (playerColor === 'yellow') {
            currentPlayer = playerYellow;
        } else if (playerColor === 'red') {
            currentPlayer = playerRed;
        }
    };

    return {
        setLastMove,
        getWinStatus,
        getCurrentPlayer,
        setCurrentPlayer,
        placeAChecker,
        initialize,
        addStatusBoardToDOM,
        addRestartButtonToDOM,
    };

};
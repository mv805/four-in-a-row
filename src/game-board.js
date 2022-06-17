// GameBoard:
// add checker to game board
// remove a checker
// check for 4 in a row
// clear GameBoard
import _ from 'lodash';
import { Checker } from "./checker";
import { GameState } from "./game-state";

export const GameBoard = () => {

    let gameState;
    const gameBoardDisplay = document.createElement('div');
    gameBoardDisplay.innerHTML = `
    <div class="game-board-slots">
        <div class="grid-slots slot">
            <div data-row="0" data-col="0"></div>
            <div data-row="0" data-col="1"></div>
            <div data-row="0" data-col="2"></div>
            <div data-row="0" data-col="3"></div>
            <div data-row="0" data-col="4"></div>
            <div data-row="0" data-col="5"></div>
            <div data-row="0" data-col="6"></div>
            <div data-row="1" data-col="0"></div>
            <div data-row="1" data-col="1"></div>
            <div data-row="1" data-col="2"></div>
            <div data-row="1" data-col="3"></div>
            <div data-row="1" data-col="4"></div>
            <div data-row="1" data-col="5"></div>
            <div data-row="1" data-col="6"></div>
            <div data-row="2" data-col="0"></div>
            <div data-row="2" data-col="1"></div>
            <div data-row="2" data-col="2"></div>
            <div data-row="2" data-col="3"></div>
            <div data-row="2" data-col="4"></div>
            <div data-row="2" data-col="5"></div>
            <div data-row="2" data-col="6"></div>
            <div data-row="3" data-col="0"></div>
            <div data-row="3" data-col="1"></div>
            <div data-row="3" data-col="2"></div>
            <div data-row="3" data-col="3"></div>
            <div data-row="3" data-col="4"></div>
            <div data-row="3" data-col="5"></div>
            <div data-row="3" data-col="6"></div>
            <div data-row="4" data-col="0"></div>
            <div data-row="4" data-col="1"></div>
            <div data-row="4" data-col="2"></div>
            <div data-row="4" data-col="3"></div>
            <div data-row="4" data-col="4"></div>
            <div data-row="4" data-col="5"></div>
            <div data-row="4" data-col="6"></div>
            <div data-row="5" data-col="0"></div>
            <div data-row="5" data-col="1"></div>
            <div data-row="5" data-col="2"></div>
            <div data-row="5" data-col="3"></div>
            <div data-row="5" data-col="4"></div>
            <div data-row="5" data-col="5"></div>
            <div data-row="5" data-col="6"></div>
        </div>
    </div>
    `;

    const gameBoardArray = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ];

    const addToDOM= () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(gameBoardDisplay);
    };

    const placeCheckerInColumn = (columnOfDrop) => {

        for (let row = gameBoardArray.length - 1; row >= 0; row--) {
            if (gameBoardArray[row][columnOfDrop] === '') {
                gameBoardArray[row][columnOfDrop] = Checker(gameState.getCurrentPlayer().getPlayerColor());
                let gridBoxToUpdate = document.body.querySelector(`[data-row="${row}"][data-col="${columnOfDrop}"]`);
                gridBoxToUpdate.appendChild(gameBoardArray[row][columnOfDrop].getElement());
                _checkForFourInARow(row, columnOfDrop);
                return;
            }
        }
        
    };

    const checkIfColumnIsFull = (columnToCheck) => {
        return (gameBoardArray[0][columnToCheck] ? true : false);
    };

    const getGameBoardArray = () => {
        return _.cloneDeep(gameBoardArray);
    };

    const _checkForFourInARow = (row, column) => {
        gameState.fourInARow(true);
    };

    const initialize = (GameState) => {
        gameState = GameState;
    };

    return {
        addToDOM,
        placeCheckerInColumn,
        checkIfColumnIsFull,
        getGameBoardArray,
        initialize,
    };

};
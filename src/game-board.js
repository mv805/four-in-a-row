// GameBoard:
// add checker to game board
// remove a checker
// check for 4 in a row
// clear GameBoard
import _ from 'lodash';
import { Checker } from "./checker";
import { GameState } from "./game-state";

export const GameBoard = (initialBoardArray) => {

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

    let gameBoardArray = initialBoardArray;

    const addToDOM = () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(gameBoardDisplay);
        _initialDisplay();
    };

    const placeCheckerInColumn = (columnOfDrop, colorOfChecker) => {

        for (let row = gameBoardArray.length - 1; row >= 0; row--) {
            if (gameBoardArray[row][columnOfDrop] === '') {
                gameBoardArray[row][columnOfDrop] = Checker(colorOfChecker);
                let gridBoxToUpdate = document.body.querySelector(`[data-row="${row}"][data-col="${columnOfDrop}"]`);
                gridBoxToUpdate.appendChild(gameBoardArray[row][columnOfDrop].getElement());
                _checkForFourInARow(row, columnOfDrop);
                return;
            }
        }

    };

    const _directCheckerPlacement = (row, col, checker) => {
        //for placing a checker straight into cell. For initialization only.
        //the placeCheckerInColumn function simulates dropping a checker from the top and falling into place and should be used for game placement

        let gridBoxToUpdate = document.body.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        gridBoxToUpdate.appendChild(checker.getElement());
    };

    const checkIfColumnIsFull = (columnToCheck) => {
        return (gameBoardArray[0][columnToCheck] ? true : false);
    };

    const getGameBoardArray = () => {
        return _.cloneDeep(gameBoardArray);
    };

    const _checkForFourInARow = (row, column) => {
        //gameState.reportFourInARow(true);
    };

    const _initialDisplay = () => {
        for (let row = 0; row < gameBoardArray.length; row++) {
            for (let col = 0; col < gameBoardArray[row].length; col++) {
                if (gameBoardArray[row][col] !== '') {
                    _directCheckerPlacement(row, col, gameBoardArray[row][col]);
                }
            }

        }
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
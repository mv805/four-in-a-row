// GameBoard:
// add checker to game board
// remove a checker
// check for 4 in a row
// clear GameBoard

import { Checker } from "./checker";

export const GameBoard = (() => {

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
            <div data-row="0" data-col="0"></div>
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

    const initializeAndAddGameBoardToDOM = () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(gameBoardDisplay);
    };

    const _addCheckerToBoard = (row, column, color) => {

        gameBoardArray[row][column] = Checker(color);
        _updateBoardDisplay(row, column);

    };

    const _updateBoardDisplay = (row, column) => {

        let gridBoxToUpdate = document.body.querySelector(`[data-row="${row}"][data-col="${column}"]`);
        gridBoxToUpdate.appendChild(gameBoardArray[row][column].getElement());

    };

    
    return {
        initializeAndAddGameBoardToDOM,
        
    };

})();
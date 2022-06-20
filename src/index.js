/* all the grid squares are referred to as 'boxes' 
* all the game pieces/pucks are referred to as 'checkers'
*/

import './style.css';
import { SelectionBar } from '../src/selection-bar';
import { GameBoard } from './game-board';
import { Checker } from './checker';
import { GameState } from './game-state';

const runGame = (() => {

    const header = document.createElement('h1');
    header.innerHTML = '<span>FOUR</span> IN A <span>ROW!</span>';
    document.body.appendChild(header);

    let initialBoard = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
    ];

    let gameBoard = GameBoard(initialBoard);
    let gameState = GameState();
    let selectionBar = SelectionBar();

    gameBoard.initialize(gameState);
    gameState.initialize(gameBoard, selectionBar);
    selectionBar.initialize(gameBoard, gameState);

    gameState.addStatusBoardToDOM();
    selectionBar.addToDOM();
    gameBoard.addToDOM();
    gameState.addRestartButtonToDOM();
    addFooter();
    
})();

function addFooter() {
    let footer = document.createElement('footer');
    footer.innerHTML = `
    <span>V. 1.0.0</span>
    `;
    document.body.appendChild(footer);  
};



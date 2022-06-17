/* all the grid squares are referred to as 'boxes' 
* all the game pieces/pucks are referred to as 'checkers'
*/

import './style.css';
import { SelectionBar } from '../src/selection-bar';
import { GameBoard } from './game-board';
import { Checker } from './checker';
import { GameState } from './game-state';

const header = document.createElement('h1');
header.textContent = 'FOUR IN A ROW!';
document.body.appendChild(header);

let initialBoard =  [
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
gameState.initialize(gameBoard);
selectionBar.initialize(gameBoard, gameState);


selectionBar.addToDOM();
gameBoard.addToDOM();




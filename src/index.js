/* all the grid squares are referred to as 'boxes' 
* all the game pieces/pucks are referred to as 'checkers'
*/

import './style.css';
import { SelectionBar } from '../src/selection-bar';
import { GameBoard } from './game-board';
import { Checker } from './checker';

const header = document.createElement('h1');
header.textContent = 'FOUR IN A ROW!';
document.body.appendChild(header);

SelectionBar.initializeAndAddSelectionBarToDOM();
GameBoard.initializeAndAddGameBoardToDOM();




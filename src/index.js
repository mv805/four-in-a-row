/* all the grid squares are referred to as 'boxes' 
* all the game pieces/pucks are referred to as 'checkers'
*/

import './style.css';
import * as display from './display.js';
import { SelectionBar } from '../src/selection-bar.js';

const header = document.createElement('h1');
header.textContent = 'FOUR IN A ROW!';
document.body.appendChild(header);

SelectionBar.initializeAndAddSelectionBarToDOM();

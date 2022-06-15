// import redChecker from '../assets/red-checker.png';
// import yellowChecker from '../assets/yellow-checker.png';

// export function initialDisplaySetup() {

//     let title = document.createElement('h1');
//     title.textContent = 'Four in a Row!';

//     document.body.appendChild(title);
//     document.body.appendChild(createSelectionBar());
//     document.body.appendChild(createGameBoard());
// }

// function createSelectionBar() {

//     const gameBoardSelectorBar = document.createElement('div');

//     gameBoardSelectorBar.innerHTML = `
//     <div class="game-board-selector">
//         <div class="selection-bar slot">
//             <div data-col-select="0"></div>
//             <div data-col-select="1"></div>
//             <div data-col-select="2"></div>
//             <div data-col-select="3"></div>
//             <div data-col-select="4"></div>
//             <div data-col-select="5"></div>
//             <div data-col-select="6"></div>
//         </div>
//     </div>
//     `;

//     return gameBoardSelectorBar;
// }

// function createGameBoard() {

//     const gameBoard = document.createElement('div');

//     gameBoard.innerHTML = `
//     <div class="game-board-slots">
//         <div class="grid-slots slot">
//             <div data-row="0" data-col="0"></div>
//             <div data-row="0" data-col="1"></div>
//             <div data-row="0" data-col="2"></div>
//             <div data-row="0" data-col="3"></div>
//             <div data-row="0" data-col="4"></div>
//             <div data-row="0" data-col="5"></div>
//             <div data-row="0" data-col="6"></div>
//             <div data-row="0" data-col="0"></div>
//             <div data-row="1" data-col="1"></div>
//             <div data-row="1" data-col="2"></div>
//             <div data-row="1" data-col="3"></div>
//             <div data-row="1" data-col="4"></div>
//             <div data-row="1" data-col="5"></div>
//             <div data-row="1" data-col="6"></div>
//             <div data-row="2" data-col="0"></div>
//             <div data-row="2" data-col="1"></div>
//             <div data-row="2" data-col="2"></div>
//             <div data-row="2" data-col="3"></div>
//             <div data-row="2" data-col="4"></div>
//             <div data-row="2" data-col="5"></div>
//             <div data-row="2" data-col="6"></div>
//             <div data-row="3" data-col="0"></div>
//             <div data-row="3" data-col="1"></div>
//             <div data-row="3" data-col="2"></div>
//             <div data-row="3" data-col="3"></div>
//             <div data-row="3" data-col="4"></div>
//             <div data-row="3" data-col="5"></div>
//             <div data-row="3" data-col="6"></div>
//             <div data-row="4" data-col="0"></div>
//             <div data-row="4" data-col="1"></div>
//             <div data-row="4" data-col="2"></div>
//             <div data-row="4" data-col="3"></div>
//             <div data-row="4" data-col="4"></div>
//             <div data-row="4" data-col="5"></div>
//             <div data-row="4" data-col="6"></div>
//             <div data-row="5" data-col="0"></div>
//             <div data-row="5" data-col="1"></div>
//             <div data-row="5" data-col="2"></div>
//             <div data-row="5" data-col="3"></div>
//             <div data-row="5" data-col="4"></div>
//             <div data-row="5" data-col="5"></div>
//             <div data-row="5" data-col="6"></div>
//         </div>
//     </div>
//     `;

//     return gameBoard;
// }

// let currentPlayer = 'red';
// let checker = document.createElement('img');
// checker.src = `/assets/${currentPlayer}-checker.png`;

// let testDiv = document.querySelector('div[data-col="1"]');

// export function displayImageOnHover(targetElement, imageElement){

//     targetElement.addEventListener('mouseenter', e => {
//         targetElement.appendChild(imageElement);
//     });

//     targetElement.addEventListener('mouseleave', e => {
//         targetElement.removeChild(imageElement);
//     });
// }

// displayImageOnHover(testDiv, checker);
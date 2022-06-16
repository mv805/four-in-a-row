import { Player } from '../src/player.js';
import { GameBoard } from './game-board.js';

export const GameState = (() => {

    const playerYellow = Player('yellow');
    const playerRed = Player('red');

    let currentPlayer = playerYellow;

    const placeAChecker = (column) => {
        GameBoard.placeCheckerInColumn(column);
        _switchPlayer();
    };

    const _switchPlayer = () => {
        currentPlayer === playerYellow ? currentPlayer = playerRed: currentPlayer = playerYellow;
    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    return {
        getCurrentPlayer,
        placeAChecker,
    };

})();
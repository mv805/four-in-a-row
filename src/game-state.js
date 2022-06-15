import { Player } from '../src/player.js';

export const GameState = (() => {

    const playerYellow = Player('yellow');
    const playerRed = Player('red');

    let currentPlayer = playerRed;

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    return {
        getCurrentPlayer,
    };

})();
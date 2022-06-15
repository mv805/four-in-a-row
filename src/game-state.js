import { Player } from '../src/player.js';

export const GameState = (() => {

    const playerYellow = Player('yellow');
    const playerRed = Player('red');

    let currentPlayer = playerYellow;

    let chosenColumnForMove;

    const setChosenColumnForMove = (column) => {
        chosenColumnForMove = column;
        console.log('Game state recorded '+ chosenColumnForMove + ' as current move');
    };

    const getCurrentPlayer = () => {
        return currentPlayer;
    };

    return {
        getCurrentPlayer,
        setChosenColumnForMove,
    };

})();
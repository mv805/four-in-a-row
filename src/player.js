import { Checker } from '../src/checker.js';

export const Player = (colorOfChecker) => {

    let playerChecker = Checker(colorOfChecker);

    const getCheckerElement = () => {
        return playerChecker.getElement();
    };

    const getPlayerColor = () => {
        return colorOfChecker;
    };

    return {
        getCheckerElement,
        getPlayerColor,
    };
};
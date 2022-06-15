import { Checker } from '../src/checker.js';

export const Player = (colorOfChecker) => {

    let playerChecker = Checker(colorOfChecker);
    let lastMove = undefined;

    const getCheckerElement = () => {
        return playerChecker.getElement();
    }

    return {
        getCheckerElement,
    };
};
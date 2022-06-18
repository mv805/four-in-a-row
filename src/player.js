import { Checker } from '../src/checker.js';

export const Player = (colorOfChecker) => {

    const getCheckerElement = () => {
        return Checker(colorOfChecker).getElement();
    };

    const getPlayerColor = () => {
        return colorOfChecker;
    };

    return {
        getCheckerElement,
        getPlayerColor,
    };
};
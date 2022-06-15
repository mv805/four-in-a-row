import { Checker } from '../src/checker.js';

export const Player = (colorOfChecker) => {

    let playerChecker = Checker(colorOfChecker);
    let lastMove = undefined;

    // const getLastMove = () => {
    //     return lastMove;
    // };

    const getCheckerElement = () => {
        return playerChecker.getElement();
    }

    // const setLastMove = (row, column) => {
    //     lastMove = [row, column];
    // };

    return {
        //getLastMove,
        //setLastMove,
        getCheckerElement,
    };
};
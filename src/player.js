import { Checker } from '../src/checker.js';

export const Player = (colorOfChecker) => {

    let gamePiece = Checker(colorOfChecker);
    let lastMove = undefined;

    const getLastMove = () => {
        return lastMove;
    };

    const getColor = () => {
        return gamePiece.getColor();
    };

    const setLastMove = (row, column) => {
        lastMove = [row, column];
    };

    return { getLastMove, getColor, setLastMove };
};
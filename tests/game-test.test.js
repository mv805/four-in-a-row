import { Checker } from '../src/checker';
import { GameBoard } from '../src/game-board';
import { GameState } from '../src/game-state';
import * as Utilities from '../src/util';
import _ from 'lodash';
//ctrl + k  ctrl+shift+s save without formatting

describe('Checker object behavior', () => {

    let checker = Checker('yellow');
    let testElement = checker.getElement();

    it('should get checker color', () => {
        expect(checker.getColor()).toBe('yellow');
    });

    it('should return an img element', () => {
        expect(testElement.outerHTML).toBe('<img class=\"checker\" src=\"\">');
    });

});

describe('GameState object behavior', () => {

    describe('Detecting a win condition', () => {

        let testGameBoard;
        let testGameState;

        const Y = Checker('yellow');
        const R = Checker('red');

        function boardSetup(board) {

            testGameBoard = GameBoard(board);
            testGameState = GameState();
            testGameBoard.initialize(testGameState);
            testGameState.initialize(testGameBoard);
            testGameBoard.addToDOM();

        };

        describe('Vertical win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                    [Y , '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                    [R , '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', '', R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(6);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', '', R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(6);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('Horizontal win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', Y , Y , Y , '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', Y , Y , Y , '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', R , R , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', R , R , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [Y , Y , Y , '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [Y , Y , Y , '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , R , R , '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , R , R , '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , Y , Y , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(1);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , Y , Y , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(5);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('Top right diagonal win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', Y , '', '', ''],
                    ['', '', Y , R , '', '', ''],
                    ['', Y , R , Y , '', '', ''],
                    ['', Y , R , R , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', Y , '', '', ''],
                    ['', '', Y , R , '', '', ''],
                    ['', Y , R , Y , '', '', ''],
                    ['', Y , R , R , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', R , '', '', ''],
                    ['', '', R , R , Y , '', ''],
                    ['', R , Y , Y , Y , '', ''],
                    ['', Y , R , Y , R , Y , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', R , '', '', ''],
                    ['', '', R , R , Y , '', ''],
                    ['', R , Y , Y , Y , '', ''],
                    ['', Y , R , Y , R , Y , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', R , Y ],
                    ['', '', '', '', R , Y , R ],
                    ['', '', '', '', Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', '', R ],
                    ['', '', '', '', '', R , Y ],
                    ['', '', '', '', R , Y , R ],
                    ['', '', '', '', Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', Y , Y ],
                    ['', '', '', '', '', Y , R ],
                    ['', '', '', '', R , R , Y ],
                    ['', '', R , '', R , Y , R ],
                    ['', R , R , Y , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(4);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', Y , Y ],
                    ['', '', '', '', Y , Y , R ],
                    ['', '', '', '', R , R , Y ],
                    [R , '', R , Y , R , Y , R ],
                    [R , R , R , Y , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', Y , Y ],
                    ['', '', '', '', Y , Y , R ],
                    ['', '', '', '', R , R , Y ],
                    [R , Y , R , Y , R , Y , R ],
                    [R , R , R , Y , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('Bottom right diagonal win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , R , Y , '', ''],
                    ['', R , R , Y , R , Y , ''],
                    [R , Y , R , Y , R , R , Y ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , R , Y , '', ''],
                    ['', R , R , Y , R , Y , ''],
                    [R , Y , R , Y , R , R , Y ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });
            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , Y , R , '', ''],
                    ['', R , R , Y , Y , R , ''],
                    [R , Y , Y , R , R , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , Y , R , '', ''],
                    ['', R , R , Y , Y , R , ''],
                    [R , Y , Y , R , R , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , Y , '', '', '', '', ''],
                    [Y , Y , Y , '', '', '', ''],
                    [R , Y , R , Y , '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    [R , Y , '', '', '', '', ''],
                    [Y , Y , Y , '', '', '', ''],
                    [R , Y , R , Y , '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', Y , '', '', '', '', ''],
                    [R , R , Y , '', '', '', ''],
                    [Y , Y , R , R , '', '', ''],
                    [R , Y , R , R , Y , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', Y , '', '', '', '', ''],
                    [R , R , Y , '', '', '', ''],
                    [Y , Y , R , R , '', '', ''],
                    [R , Y , R , R , Y , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(0);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , Y , R , '', ''],
                    ['', R , R , Y , Y , R , ''],
                    [R , Y , Y , R , R , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(2);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', R , Y , '', ''],
                    [R , '', '', Y , Y , Y , ''],
                    [R , '', R , R , R , Y , Y ],
                ];

                boardSetup(board);
                expect(testGameState.getWinStatus()).toBe(false);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('Bottom left diagonal win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , R , '', '', ''],
                    ['', Y , R , Y , '', '', ''],
                    [Y , Y , R , R , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', Y , R , '', '', ''],
                    ['', Y , R , Y , '', '', ''],
                    [Y , Y , R , R , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', R , R , Y , '', ''],
                    ['', R , Y , Y , Y , '', ''],
                    [R , Y , R , Y , R , Y , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', R , R , Y , '', ''],
                    ['', R , Y , Y , Y , '', ''],
                    [R , Y , R , Y , R , Y , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', R , Y ],
                    ['', '', '', '', R , Y , R ],
                    ['', Y , Y , R , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(6);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', R , Y ],
                    ['', '', '', '', R , Y , R ],
                    ['', Y , Y , R , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(6);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', Y ],
                    ['', '', '', '', '', Y , Y ],
                    ['', '', '', '', '', Y , R ],
                    ['', '', '', R , R , R , Y ],
                    ['', '', R , Y , R , Y , R ],
                    ['', R , R , Y , Y , Y , R ],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(4);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('Top left diagonal win', () => {

            it('Should flag a game win by yellow', () => {

                let board = [
                    [Y , '', '', '', '', '', ''],
                    [R , Y , '', '', '', '', ''],
                    [R , R , Y , '', '', '', ''],
                    [Y , R , Y , '', '', '', ''],
                    [R , Y , R , Y , '', '', ''],
                    [R , Y , R , Y , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    [Y , '', '', '', '', '', ''],
                    [R , Y , '', '', '', '', ''],
                    [R , R , Y , '', '', '', ''],
                    [Y , R , Y , '', '', '', ''],
                    [R , Y , R , Y , '', '', ''],
                    [R , Y , R , Y , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should flag a game win by red', () => {

                let board = [
                    [R , '', '', '', '', '', ''],
                    [Y , R , '', '', '', '', ''],
                    [R , Y , R , '', '', '', ''],
                    [Y , R , Y , '', '', '', ''],
                    [R , Y , R , R , '', '', ''],
                    [Y , R , Y , Y , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    [R , '', '', '', '', '', ''],
                    [Y , R , '', '', '', '', ''],
                    [R , Y , R , '', '', '', ''],
                    [Y , R , Y , '', '', '', ''],
                    [R , Y , R , R , '', '', ''],
                    [Y , R , Y , Y , R , '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

        describe('no wins (misc.)', () => {
            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by red', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', ''],
                    ['', '', '', Y , R , '', ''],
                    ['', '', Y , Y , R, '' , ''],
                    ['', '', Y , R , Y , R , ''],
                    [R , Y , R , Y , Y , R , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('red');
                testGameState.placeAChecker(3);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            it('Should not flag a game win by yellow', () => {

                let board = [
                    ['', '', '', '', '', '', ''],
                    ['', '', '', R , '', '', ''],
                    ['', '', '', Y , R , '', ''],
                    ['', '', Y , Y , R, '' , ''],
                    ['', '', Y , R , Y , R , ''],
                    [R , Y , R , Y , Y , R , ''],
                ];

                boardSetup(board);
                testGameState.setCurrentPlayer('yellow');
                testGameState.placeAChecker(4);
                expect(testGameState.getWinStatus()).not.toBe(true);
            });

            afterEach(() => {

                testGameBoard = undefined;
                testGameState = undefined;
                Utilities.removeAllChildNodes(document.body);

            });
        });

    });
});

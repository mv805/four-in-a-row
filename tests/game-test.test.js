import { Checker } from '../src/checker';
import { GameBoard } from '../src/game-board';
import { GameState } from '../src/game-state';
import * as Utilities from '../src/util';

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

describe('GameBoard object behavior', () => {
    describe('Detecting four in a row', () => {

        let testGameBoard;
        let testGameState;
        let reportingSpy;

        const Y = Checker('yellow');
        const R = Checker('red');

        const testBoards = {

            'case-1': [
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                [Y, '', '', '', '', '', ''],
                [Y, R, '', '', '', '', ''],
                [Y, R, R, '', '', '', ''],
            ],

            'case-2': [
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
            ],
            
        };

        const testColumnsToDrop = {
            'case-1': 0,
            'case-2': 0,
        }

        it('Case 1: should report true. Four Yellow in a row', () => {

            boardSetup(1);
            testGameBoard.placeCheckerInColumn(testColumnsToDrop['case-1'], 'yellow');
            expect(reportingSpy).toHaveBeenCalledWith(true);

        });

        it('Case 2: should report false. First drop with yellow', () => {

            boardSetup(2);
            testGameBoard.placeCheckerInColumn(testColumnsToDrop['case-2'], 'yellow');
            expect(reportingSpy).toHaveBeenCalledWith(false);

        });

        function boardSetup(caseNumber) {

            testGameBoard = GameBoard(testBoards[`case-${caseNumber}`]);
            testGameState = GameState();
            testGameBoard.initialize(testGameState);
            testGameState.initialize(testGameBoard);
            testGameBoard.addToDOM();
            reportingSpy = jest.spyOn(testGameState, 'reportFourInARow');
        }

        afterEach(() => {
            testGameBoard = undefined;
            testGameState = undefined;
            Utilities.removeAllChildNodes(document.body);
            reportingSpy.mockRestore();
        });
    });
});

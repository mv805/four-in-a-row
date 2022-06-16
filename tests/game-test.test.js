import { Checker } from '../src/checker.js';

describe('Checker object behavior', () => {

    let checker = Checker('yellow');
    let testElement = checker.getElement();

    test('Get checker color', () => {
        expect(checker.getColor()).toBe('yellow');
    });

    test('Returned element is generated', () => {
        expect(testElement.outerHTML).toBe('<img class=\"checker\" src=\"\">');
    });

});

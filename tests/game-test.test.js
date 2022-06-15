import { Player } from '../src/player.js';

describe('Player object behavior', () => {

    let player = Player('yellow');

    test('Set and get a player move', () => {
        player.setLastMove(0, 1);
        expect(player.getLastMove()).toEqual([0, 1]);
    });

});

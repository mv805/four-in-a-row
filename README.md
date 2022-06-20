# Four In a Row - Javascript Game

## Overview

### The Project

To build a playable game with pure Javascript. 

I replicated the classic Connect Four game where players alternate placing pieces until a winner is able to connect four in a row.

### Screenshot

![](../Screenshot.PNG?raw=true "Four In a Row, Example Game")

### Links

- Live Site URL: [https://mv805.github.io/four-in-a-row/](https://mv805.github.io/four-in-a-row/)

## My process

### Built with

- Webpack
- CSS
- Flexbox
- CSS Grid
- Javascript
- Factory Design Pattern
- Object Oriented Programming
- [Jest](https://jestjs.io/) - Testing framework
- Test Driven Development Workflow
- Chrome: Debug Tools

### What I learned

This project gave me a great opportunity to develop my application development and Javascript fundamentals. I utilized the factory design pattern to build separate communicating objects to control the logic and flow of the game in a natural way. 

I built the project utilizing Webpack to further my understanding of this great tool and to take advantage of easy output and multiple module usage. 

The greatest learning opportunity I had was to understand the true power of TDD with Jest. The hardest part of the game design was coming up with a win detection algorithm that could work reliably for all the extensive amount of possible cases. I was able to generate multiple simple test cases to ensure I captured all edge cases and was confident in the functionality without any manual testing whatsoever. In conjuction with the Chrome debug tools, I was able to quickly hunt down any problems and solve them in the algorithm quickly and efficiently. Doing manual testing would not even be a feasible alternative.

Example test case:

```
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
            
```
### Continued development

I did not consider Mobile optimization in this application, choosing to focus on TDD and game design first. In the future I would like to redo the UI and layout to make it mobile friendly.

## Author

- Github - [Matt Villa](https://github.com/mv805)

## Acknowledgments

I have been following the cirriculum from the amazing website, The Odin Project. After learning about testing frameworks and further solidifying my Javascript skills, I decided to create this game in lieu of the 'Battleship' game project due to personal preference for the Connect Four clone.

[The Odin Project](https://theodinproject.com)

### CURRENT RELEASES

1.0.0: 
- Initial release
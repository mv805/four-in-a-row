
import { GameState } from '../src/game-state.js';
import * as Utilities from '../src/util.js';
import { GameBoard } from './game-board.js';

export const SelectionBar = () => {

    let gameState;
    let gameBoard;
    let selectionBoxes = undefined;
    let currentColumnSelection;

    const gameBoardSelectorBar = document.createElement('div');
    gameBoardSelectorBar.innerHTML = `
    <div class="game-board-selector">
        <div class="selection-bar-active slot">
            <div data-col-select="0"></div>
            <div data-col-select="1"></div>
            <div data-col-select="2"></div>
            <div data-col-select="3"></div>
            <div data-col-select="4"></div>
            <div data-col-select="5"></div>
            <div data-col-select="6"></div>
        </div>
    </div>
    `;

    const submitMoveButton = document.createElement('button');
    submitMoveButton.textContent = 'Submit Move';
    submitMoveButton.id = 'submit-move';
    submitMoveButton.classList.add('submit-move-inactive');

    const _submitMove = () => {

        if (gameBoard.checkIfColumnIsFull(currentColumnSelection)) {
            return;
        }

        gameState.placeAChecker(currentColumnSelection);

        if (!gameState.getWinStatus()) {
            setSelectionBarState(true);
        }

    };

    const _setSubmitButtonEvent = (active) => {

        if (active) {
            submitMoveButton.addEventListener('click', _submitMove);
            submitMoveButton.classList.remove('submit-move-inactive');
            submitMoveButton.classList.add('submit-move-active');
        } else {
            submitMoveButton.removeEventListener('click', _submitMove);
            submitMoveButton.classList.add('submit-move-inactive');
            submitMoveButton.classList.remove('submit-move-active');
        }

    };

    const _addCheckerImageToBox = (e) => {
        e.target.appendChild(gameState.getCurrentPlayer().getCheckerElement());
    };

    const _removeCheckerImageFromBox = (e) => {
        Utilities.removeAllChildNodes(e.target);
    };

    const _setCheckerImageOnHoverEvent = (activate, targetElement) => {

        if (activate) {
            targetElement.addEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.addEventListener('mouseleave', _removeCheckerImageFromBox);
        } else if (!activate) {
            targetElement.removeEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.removeEventListener('mouseleave', _removeCheckerImageFromBox);
        };

    };

    const _selectBox = (e) => {

        let selectedBox = e.target.parentNode;
        let lastSelectedBox = document.querySelector(`[data-col-select="${ currentColumnSelection }"]`);

        if (!currentColumnSelection) {
            makeSelectedCurrentSelection(selectedBox);
            return;
        } else if (currentColumnSelection === selectedBox.getAttribute('data-col-select')) {
            makeSelectedCurrentSelection(selectedBox);
            return;
        } else {
            unsetLastSelection(lastSelectedBox);
            makeSelectedCurrentSelection(selectedBox);
        }

        function unsetLastSelection(lastSelection) {
            Utilities.removeAllChildNodes(lastSelection);
            _setCheckerImageOnHoverEvent(true, lastSelection);
            lastSelection.addEventListener('click', _selectBox);
        }

        function makeSelectedCurrentSelection(selectedBox) {
            currentColumnSelection = selectedBox.getAttribute('data-col-select');
            _setCheckerImageOnHoverEvent(false, selectedBox);
            selectedBox.removeEventListener('click', _selectBox);
            _setSubmitButtonEvent(true);
        }
    };

    const setSelectionBarState = (active) => {

        console.log('setting bar state', active);
        //turn off or turn on all the normal selection events for the selection boxes
        selectionBoxes.forEach(element => {
            _setCheckerImageOnHoverEvent(active, element);
        });

        _setSubmitButtonEvent(false);

        selectionBoxes.forEach(element => {
            if (active) {
                element.addEventListener('click', _selectBox);
            } else if (!active) {
                element.removeEventListener('click', _selectBox);
                // element.classList.remove('selection-bar-active');
                // element.classList.add('selection-bar-inactive');
            };
            Utilities.removeAllChildNodes(element);

        });

        if (!active) {
            let selectionBarContainer = document.body.querySelector('.selection-bar-active');
            selectionBarContainer.classList.remove('selection-bar-active');
            selectionBarContainer.classList.add('selection-bar-inactive');
        }
    };

    const addToDOM = () => {
        document.body.appendChild(submitMoveButton);
        document.body.appendChild(gameBoardSelectorBar);
        selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
        setSelectionBarState(true);
    };

    const initialize = (GameBoard, GameState) => {
        gameBoard = GameBoard;
        gameState = GameState;
    };

    return {
        setSelectionBarState,
        addToDOM,
        initialize,
    };

};
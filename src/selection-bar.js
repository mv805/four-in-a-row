
import { GameState } from '../src/game-state.js';
import * as Utilities from '../src/util.js'
import { GameBoard } from './game-board.js';

export const SelectionBar = (() => {
    //this is an example of IIFE (Immediately Invoked Function Expression)
    let selectionBoxes = undefined;
    let currentColumnSelection;

    const gameBoardSelectorBar = document.createElement('div');
    gameBoardSelectorBar.innerHTML = `
    <div class="game-board-selector">
        <div class="selection-bar slot">
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

        if (GameBoard.checkIfColumnIsFull(currentColumnSelection)) {
            return;
        }
        GameState.placeAChecker(currentColumnSelection);
        setSelectionBarState(true);

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

        e.target.appendChild(GameState.getCurrentPlayer().getCheckerElement());

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

        if (currentColumnSelection !== e.target.parentNode.getAttribute('data-col-select') &&
            currentColumnSelection) {
            let lastSelectionNode = document.querySelector(`[data-col-select="${currentColumnSelection}"]`);
            Utilities.removeAllChildNodes(lastSelectionNode);
            _setCheckerImageOnHoverEvent(true, lastSelectionNode);
        }

        currentColumnSelection = e.target.parentNode.getAttribute('data-col-select');
        let selectedNode = document.querySelector(`[data-col-select="${currentColumnSelection}"]`);
        _setCheckerImageOnHoverEvent(false, selectedNode);
        Utilities.removeAllChildNodes(selectedNode);
        selectedNode.appendChild(GameState.getCurrentPlayer().getCheckerElement());
        _setSubmitButtonEvent(true);


    };

    const setSelectionBarState = (active) => {
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
            };
            Utilities.removeAllChildNodes(element);
        });

    };

    const initializeAndAddSelectionBarToDOM = () => {

        //initialization only performed a single time for the first page load
        document.body.appendChild(submitMoveButton);
        document.body.appendChild(gameBoardSelectorBar);
        selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
        setSelectionBarState(true);

    };

    return {

        initializeAndAddSelectionBarToDOM,
        setSelectionBarState,

    };

})();
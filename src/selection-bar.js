//this is an IIFE (Immediately Invoked Function Expression)
import { GameState } from '../src/game-state.js';
import * as Utilities from '../src/util.js'
// SelectionBar:
// take selection from current player
// submit a move
// control bar and button active mode
// submit button 

export const SelectionBar = (() => {

    let selectionBoxes = undefined;
    let currentSelection;
    let lastSelection;

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

    const _addCheckerImageToBox = (e) => {
        e.target.appendChild(GameState.getCurrentPlayer().getCheckerElement());
    };

    const _removeCheckerImageFromBox = (e) => {
        Utilities.removeAllChildNodes(e.target);
    };

    const _toggleCheckerImageOnHoverEvent = (activate, targetElement) => {

        if (activate) {
            targetElement.addEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.addEventListener('mouseleave', _removeCheckerImageFromBox);
        } else if (!activate) {
            targetElement.removeEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.removeEventListener('mouseleave', _removeCheckerImageFromBox);
        };

    };

    const _toggleAllCheckerImageOnHoverEvents = (activate) => {

        selectionBoxes.forEach(element => {
            _toggleCheckerImageOnHoverEvent(activate, element);
        });

    };

    const _defineSelectionBoxes = () => {

        selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
        //console.log(selectionBoxes);

    };

    const _selectBox = (e) => {

        if (currentSelection === e.target.parentNode['data-col-select']) {
            return;
        } else {
            currentSelection = e.target.parentNode['data-col-select'];
            console.log('Current selection is: ' + currentSelection);
        }

        //_deselectBox(currentSelection);
        //_toggleCheckerImageOnHoverEvent(false, e.target.parentNode);
        //console.log(GameState.getCurrentPlayer().getCheckerElement());
        //console.log(document.querySelector('div[data-col-select="0"]'));

        // Utilities.toggleImageInElement(document.querySelector('div[data-col-select="0"]'), GameState.getCurrentPlayer().getCheckerElement(), true);
        // currentSelection = e.target.parentNode;
        //let div = document.createElement('div');
    };

    const _deselectBox = (boxDataKeyToDeselect) => {
        if (!boxDataKeyToDeselect) {
            return;
        }
        Utilities.removeAllChildNodes(document.querySelector(`div[data-col-select="${boxDataKeyToDeselect} "]`));
        _toggleCheckerImageOnHoverEvent(true, document.querySelector(`div[data-col-select="${boxDataKeyToDeselect} "]`));
    };

    const _toggleClickAndSelectBoxEvent = (activate, targetElement) => {

        if (activate) {
            targetElement.addEventListener('click', _selectBox);
        } else if (!activate) {
            targetElement.removeEventListener('click', _selectBox);
        };

    };

    const _toggleAllClickAndSelectBoxEvents = (activate) => {

        selectionBoxes.forEach(element => {
            _toggleClickAndSelectBoxEvent(activate, element);
        });

    };

    const deactivateSelectionBar = () => {

        _toggleAllCheckerImageOnHoverEvents(false);
        //toggle the click and keep function off
        selectionBoxes.forEach(element => {
            Utilities.removeAllChildNodes(element);
        });

    };

    const initializeSelectionBar = () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(gameBoardSelectorBar);
        _defineSelectionBoxes();
        _toggleAllCheckerImageOnHoverEvents(true);
        //_toggleAllClickAndSelectBoxEvents(true);
    };

    return {
        initializeSelectionBar,
        deactivateSelectionBar
    };

})();
import { GameState } from '../src/game-state.js';
import * as Utilities from '../src/util.js'
// SelectionBar:
// [ok] take selection from current player, highlight and select
// submit a move button
// control bar and button activate/deactivate mode

export const SelectionBar = (() => {
//this is an example of IIFE (Immediately Invoked Function Expression)
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

    const submitMoveButton = document.createElement('button');
    submitMoveButton.textContent = 'Submit Move';
    submitMoveButton.id = 'submit-move';

    const _addCheckerImageToBox = (e) => {//p
        e.target.appendChild(GameState.getCurrentPlayer().getCheckerElement());
    };

    const _removeCheckerImageFromBox = (e) => {//p
        Utilities.removeAllChildNodes(e.target);
    };

    const _toggleCheckerImageOnHoverEvent = (activate, targetElement) => {//p

        if (activate) {
            targetElement.addEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.addEventListener('mouseleave', _removeCheckerImageFromBox);
        } else if (!activate) {
            targetElement.removeEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.removeEventListener('mouseleave', _removeCheckerImageFromBox);
        };

    };

    const _toggleAllCheckerImageOnHoverEvents = (activate, array) => {//p

        array.forEach(element => {
            _toggleCheckerImageOnHoverEvent(activate, element);
        });

    };

    const _defineSelectionBoxes = () => {

        selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
        //console.log(selectionBoxes);

    };

    const _selectBox = (e) => {

        if (currentSelection === e.target.parentNode.getAttribute('data-col-select')) {

            console.log('Same box selected');
            return;

        } else if (!currentSelection) {

            _addImageAndSetSelection();
            console.log('First initialization selection now: '+ currentSelection);
            return;

        } else {

            console.log('Last selection is: ' + currentSelection + ' which will be deselected');
            _deselectBox(currentSelection);
            _addImageAndSetSelection();
            console.log('Selection is: ' + currentSelection);
        }

        function _addImageAndSetSelection() {

            currentSelection = e.target.parentNode.getAttribute('data-col-select');
            let selectedNode = document.querySelector(`div[data-col-select="${currentSelection}"]`);
            _toggleCheckerImageOnHoverEvent(false, selectedNode);
            Utilities.removeAllChildNodes(selectedNode);
            selectedNode.appendChild(GameState.getCurrentPlayer().getCheckerElement());
        }

    };

    const _deselectBox = (boxDataKeyToDeselect) => {
        if (!boxDataKeyToDeselect) {
            console.log('selection not yet defined');
            return;
        }
        Utilities.removeAllChildNodes(document.querySelector(`div[data-col-select="${boxDataKeyToDeselect}"]`));
        _toggleCheckerImageOnHoverEvent(true, document.querySelector(`div[data-col-select="${boxDataKeyToDeselect}"]`));
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

        _toggleAllCheckerImageOnHoverEvents(false, selectionBoxes);
        //toggle the click and keep function off
        selectionBoxes.forEach(element => {
            Utilities.removeAllChildNodes(element);
        });

    };

    const initializeAndAddSelectionBarToDOM = () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(submitMoveButton);
        document.body.appendChild(gameBoardSelectorBar);
        _defineSelectionBoxes();
        _toggleAllCheckerImageOnHoverEvents(true, selectionBoxes);
        _toggleAllClickAndSelectBoxEvents(true);
    };

    return {
        initializeAndAddSelectionBarToDOM,
        deactivateSelectionBar
    };

})();
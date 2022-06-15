import { GameState } from '../src/game-state.js';
import * as Utilities from '../src/util.js'
// SelectionBar:
// [ok] take selection from current player, highlight and select
// submit a move button
// control bar and button activate/deactivate mode

export const SelectionBar = (() => {
    //this is an example of IIFE (Immediately Invoked Function Expression)
    let selectionBoxes = undefined;
    let currentColumnSelection;
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
    submitMoveButton.classList.add('submit-move-inactive');

    const _submitMove = () => {
        _clearImagesFromSelectionBoxes();
        console.log('Move submitted to gamestate: column ' + currentColumnSelection);
        GameState.setChosenColumnForMove(currentColumnSelection);
        _setSubmitButtonEvent(false);//_setSubmitButtonState(false);
    };

    // const _setSubmitButtonState = (active) => {
    //     _setSubmitButtonEvent(active);
    // };

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

    const _addCheckerImageToBox = (e) => {//p
        e.target.appendChild(GameState.getCurrentPlayer().getCheckerElement());
    };

    const _removeCheckerImageFromBox = (e) => {//p
        Utilities.removeAllChildNodes(e.target);
    };

    const _setCheckerImageOnHoverEvent = (activate, targetElement) => {//p

        if (activate) {
            targetElement.addEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.addEventListener('mouseleave', _removeCheckerImageFromBox);
        } else if (!activate) {
            targetElement.removeEventListener('mouseenter', _addCheckerImageToBox);
            targetElement.removeEventListener('mouseleave', _removeCheckerImageFromBox);
        };

    };

    // const _setAllCheckerImageOnHoverEvents = (activate, array) => {//p

    //     array.forEach(element => {
    //         _setCheckerImageOnHoverEvent(activate, element);
    //     });

    // };

    // const _defineSelectionBoxes = () => {

    //     selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
    //     //console.log(selectionBoxes);

    // };

    const _selectBox = (e) => {

        if (currentColumnSelection === e.target.parentNode.getAttribute('data-col-select')) {

            //console.log('Same box selected');
            return;

        } else if (!currentColumnSelection) {

            _addImageAndSetSelection();
            //console.log('First initialization selection now: ' + currentColumnSelection);
            return;

        } else {

            //console.log('Last selection is: ' + currentColumnSelection + ' which will be deselected');
            //_deselectBox(currentColumnSelection);
            if (!currentColumnSelection) {
                //console.log('selection not yet defined');
                return;
            }
            Utilities.removeAllChildNodes(document.querySelector(`div[data-col-select="${currentColumnSelection}"]`));
            _setCheckerImageOnHoverEvent(true, document.querySelector(`div[data-col-select="${currentColumnSelection}"]`));
            _addImageAndSetSelection();
            //console.log('Selection is: ' + currentColumnSelection);

        }

        function _addImageAndSetSelection() {

            currentColumnSelection = e.target.parentNode.getAttribute('data-col-select');
            let selectedNode = document.querySelector(`div[data-col-select="${currentColumnSelection}"]`);
            _setCheckerImageOnHoverEvent(false, selectedNode);
            Utilities.removeAllChildNodes(selectedNode);
            selectedNode.appendChild(GameState.getCurrentPlayer().getCheckerElement());
            _setSubmitButtonEvent(true);//_setSubmitButtonState(true);
        }

    };

    // const _deselectBox = (boxDataKeyToDeselect) => {
    //     if (!boxDataKeyToDeselect) {
    //         console.log('selection not yet defined');
    //         return;
    //     }
    //     Utilities.removeAllChildNodes(document.querySelector(`div[data-col-select="${boxDataKeyToDeselect}"]`));
    //     _setCheckerImageOnHoverEvent(true, document.querySelector(`div[data-col-select="${boxDataKeyToDeselect}"]`));
    // };

    // const _setClickAndSelectBoxEvent = (activate, targetElement) => {

    //     if (activate) {
    //         targetElement.addEventListener('click', _selectBox);
    //     } else if (!activate) {
    //         targetElement.removeEventListener('click', _selectBox);
    //     };

    // };

    const _setAllClickAndSelectBoxEvents = (activate) => {

        selectionBoxes.forEach(element => {
            //_setClickAndSelectBoxEvent(activate, element);
            if (activate) {
                element.addEventListener('click', _selectBox);
            } else if (!activate) {
                element.removeEventListener('click', _selectBox);
            };
        });

    };

    const setSelectionBarState = (active) => {

        //_setAllCheckerImageOnHoverEvents(active, selectionBoxes);
        selectionBoxes.forEach(element => {
            _setCheckerImageOnHoverEvent(active, element);
        });
        _setSubmitButtonEvent(false);//_setSubmitButtonState(false);
        _setAllClickAndSelectBoxEvents(active);
        _clearImagesFromSelectionBoxes();

    };

    const _clearImagesFromSelectionBoxes = () => {
        selectionBoxes.forEach(element => {
            Utilities.removeAllChildNodes(element);
        });
    };

    const initializeAndAddSelectionBarToDOM = () => {
        //initialization only performed a single time for the first page load
        document.body.appendChild(submitMoveButton);
        document.body.appendChild(gameBoardSelectorBar);
        selectionBoxes = [...document.querySelectorAll('[data-col-select]')];
        //_defineSelectionBoxes();
        setSelectionBarState(true);
    };

    return {
        initializeAndAddSelectionBarToDOM,
        setSelectionBarState,
    };

})();
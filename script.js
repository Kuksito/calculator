const selectionBtns = document.querySelectorAll('[data-selection]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const currentResultContainer = document.querySelector('#current-result');
const pastResultContainer = document.querySelector('#past-result');

selectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selectionBtnName = btn.dataset.selection;
        displayClickedBtn(selectionBtnName);
    })
});

function displayClickedBtn(clickedBtn){
    currentResultContainer.textContent += clickedBtn;
}
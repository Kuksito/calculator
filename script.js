const selectionBtns = document.querySelectorAll('[data-selection]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const currentResultContainer = document.querySelector('#current-result');
const pastResultContainer = document.querySelector('#past-result');

let userRequest = [];

clearBtn.addEventListener('click', () => {
    currentResultContainer.textContent = '';
});

undoBtn.addEventListener('click', () => {
    userRequest.splice(-1,1);
    currentResultContainer.textContent = userRequest.join('');
    console.log(userRequest)
});

selectionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selectionBtnName = btn.dataset.selection;
        displayClickedBtn(selectionBtnName);
    })
});

function displayClickedBtn(clickedBtn){
    currentResultContainer.append(userRequest);
    userRequest.push(clickedBtn);
    currentResultContainer.textContent = userRequest.join('');

    console.log(userRequest)
    // console.log(userRequest.join(''));
    // console.log(Array.isArray(userRequest))
};
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('[data-equal]');
const plusBtn = document.querySelector('[data-plus]')
const currentResultContainer = document.querySelector('#current-result');
const firstNumContainer = document.querySelector('#first-num');
const secondNumContainer = document.querySelector('#second-num');
const operatorContainer = document.querySelector('#operator-container');
const result = document.querySelector('#result');
const pastResultContainer = document.querySelector('#past-result');

let firstNum = 0;
let secondNum = 0;
let operator = '';
let operationResult = 0;

clearBtn.addEventListener('click', () => {
    firstNumContainer.textContent = '';
    secondNumContainer.textContent = ''
    operatorContainer.textContent = '';
    currentResultContainer.textContent = '';
    firstNum = 0;
    secondNum = 0;
    operator = '';
});

undoBtn.addEventListener('click', () => {
    firstNum.splice(-1,1);
    currentResultContainer.textContent = firstNum.join('');
    console.log(firstNum)
});

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const numberBtnName = btn.dataset.number;
        if(operator === ''){
            firstNum = parseInt(numberBtnName);
            currentResultContainer.textContent += firstNum;
            console.log(firstNum)
            // operate(firstNum)
        } else {
            secondNum = parseInt(numberBtnName);
            currentResultContainer.textContent += secondNum;
            console.log(secondNum)
            // operate(secondNum);
        }
        // displayClickedBtn(numberBtnName);
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = btn.dataset.operator;
        if(operator !== "="){
            currentResultContainer.textContent += operator;
            console.log(operator);
        } else {
            return operate(firstNum, secondNum);
        };
    })
})

function add(num1, num2){
    return num1 + num2;
}

function operate(firstNum, secondNum, operator){
    let firstNumToNum = parseInt(firstNum);
    let secondNumToNum = parseInt(secondNum);
    if(operator === '+'){
        operationResult = add(firstNumToNum, secondNumToNum);
        console.log(operationResult);
        currentResultContainer.textContent = operationResult;
        console.log(operationResult);
        
    }
}

console.log(operate);




// equalBtn.addEventListener('click', operate);
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('#btn-equal');
const plusBtn = document.querySelector('[data-plus]')
const currentResultContainer = document.querySelector('#current-result');
const firstNumContainer = document.querySelector('#first-num');
const secondNumContainer = document.querySelector('#second-num');
const operatorContainer = document.querySelector('#operator-container');
const result = document.querySelector('#result');
const pastResultContainer = document.querySelector('#past-result');

let firstNum = '';
let secondNum = '';
let operator = '';
let operationResult = 0;

clearBtn.addEventListener('click', () => {
    currentResultContainer.textContent = '';
    firstNum = '';
    secondNum = '';
    operationResult = 0;
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
            if(operationResult === 0){
                firstNum += numberBtnName;
                console.log(firstNum);
                
            } else {
                firstNum = operationResult;
            }
            firstNumContainer.textContent = '';
            firstNumContainer.append(firstNum);
            currentResultContainer.append(firstNumContainer)
            console.log(firstNumContainer)
        } else {
            secondNum += numberBtnName;
            secondNumContainer.textContent = ''
            secondNumContainer.append(secondNum);
            currentResultContainer.append(secondNumContainer)
            console.log(secondNum)
        console.log(secondNumContainer);
        }
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = btn.dataset.operator;
        if(operator !== "="){
            currentResultContainer.textContent += operator;

            if(operationResult !== 0){
                firstNum = operationResult;
            }

            secondNum = '';

            console.log(operator);
        };
    })
});

            
equalBtn.addEventListener('click', () => {
    operate(firstNum, secondNum, operator);
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(firstNum, secondNum, operator){
    let firstNumToNum = parseInt(firstNum);
    let secondNumToNum = parseInt(secondNum);
    if(operator == ' + '){
        operationResult = add(firstNumToNum, secondNumToNum);
        currentResultContainer.textContent = operationResult;        
    };
    if(operator == ' - '){
        operationResult = subtract(firstNumToNum, secondNumToNum);
        currentResultContainer.textContent = operationResult;
    };
    if(operator == ' x '){
        operationResult = multiply(firstNumToNum, secondNumToNum);
        currentResultContainer.textContent = operationResult;
    };
    if(operator == ' ÷ '){
        operationResult = divide(firstNumToNum, secondNumToNum);
        currentResultContainer.textContent = operationResult;
    }
console.log(operationResult);

}




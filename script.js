const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('#btn-equal');
const currentResultContainer = document.querySelector('#current-result');

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
    if(secondNum === '' && operator === ''){
        firstNum = firstNum.slice(0, firstNum.length - 1);
        currentResultContainer.textContent = firstNum;
    } else if(secondNum === '' && operator !== ''){
        operator = operator.slice(0, -1);
        currentResultContainer.textContent = firstNum;
    }
    else {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        currentResultContainer.textContent = secondNum;
    };
});

numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const numberBtnName = btn.dataset.number;
        currentResultContainer.textContent = '';
        if(operator === ''){
            operationResult = 0;
            firstNum += numberBtnName;
            currentResultContainer.textContent = '';
            currentResultContainer.append(firstNum);
        } else {
            secondNum += numberBtnName;
            currentResultContainer.append(firstNum, operator, secondNum);
        };
    });
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator = btn.textContent;
        if(operator){
            currentResultContainer.textContent += operator;
            if(operationResult !==0){
            firstNum = operationResult;
            currentResultContainer.textContent = '';
            currentResultContainer.append(firstNum);           
            };
            secondNum = '';
        };
        if(operator == 'x²'){
            currentResultContainer.textContent = firstNum + '²';
        };
        if(operator == '%'){
            if(secondNum !== ''){
                currentResultContainer.textContent = secondNum + '%';
            } else {
                currentResultContainer.textContent = firstNum + '%';
            };
        };        
    });
});

            
equalBtn.addEventListener('click', () => {    
    if(operator == 'x²'){
        getPower(firstNum);
    } else{ 
        operate(firstNum, secondNum, operator);
    }
    removeContent();
});

function removeContent(){
    currentResultContainer.textContent = '';
    currentResultContainer.append(operationResult);
    firstNum = '';
    secondNum = '';
    operator = '';
    operationResult.toString();
};

function add(num1, num2){
    let result = num1 + num2;
    return result.toString();
};

function subtract(num1, num2){
    let result = num1 - num2;
    return result.toString();
};

function multiply(num1, num2){
    let result = num1 * num2;
    return result.toString();
};

function divide(num1, num2){
    let result;
    if(num2 == 0){
        return currentResultContainer.textContent = 'error';
    } else { 
        result = num1 / num2;
        if(Number.isInteger(result)){
            return result.toString();
        } else {
            return +result.toFixed(10).toString();
        };
    };
};

function pow(num){
    let result = Math.pow(num, 2);
    return result.toString();
};

function getPercentage(num1, num2){
    let result;
    if(num2 == ''){
    result = (num1 / 100);
    };
    if (currentResultContainer.textContent == num1 + '%') {
        result = (num1 / 100) + num2;
    };
    if (currentResultContainer.textContent == num2 + '%') {
        result = num1 + ((num1 / 100) * num2);
    };
    return result.toString();
};

function operate(firstNum, secondNum, operator){
    let firstNumToNum = Number(firstNum);
    let secondNumToNum = Number(secondNum);
    switch(operator){
        case '+':
        return operationResult = add(firstNumToNum, secondNumToNum);
    
        case '-':
        return operationResult = subtract(firstNumToNum, secondNumToNum);

        case 'x':
        return operationResult = multiply(firstNumToNum, secondNumToNum);
    
        case '÷':
        return operationResult = divide(firstNumToNum, secondNumToNum);
    
        case '%':
        return operationResult = getPercentage(firstNumToNum, secondNumToNum, operator);
    };
};

function getPower(firstNum){
        secondNum = '';
        operationResult = 0;
        operationResult = pow(Number(firstNum));
        currentResultContainer.textContent = operationResult;
};

document.addEventListener('keydown', (e) => {
    const pressedKey = e.key;
    if(!isNaN(pressedKey) && pressedKey !== ''){
        const numberBtnName = document.querySelector(`[data-number='${pressedKey}']`);
        if(numberBtnName){
            numberBtnName.click();
        };
    };

    if(['+', '-', '*', '/'].includes(pressedKey)){
        const operatorBtn = document.querySelector(`[data-operator='${pressedKey}']`);
        if(operatorBtn){
            operatorBtn.click();
        };
    };

    if(pressedKey === 'Enter' || pressedKey === '='){
        equalBtn.click();
    }

    if(pressedKey === '.'){
        const pointValue = document.querySelector(`[data-number='${pressedKey}']`);
        if(pointValue){
            pointValue.click();
        };
    };

    if(pressedKey === 'Escape'){
        clearBtn.click();
    };

    if(pressedKey === 'Backspace'){
        undoBtn.click();
    };
});

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

let clickedOperator;


clearBtn.addEventListener('click', () => {
    currentResultContainer.textContent = '';
    result.textContent = '';
    firstNum = '';
    secondNum = '';
    operationResult = 0;
    operator = '';
});

undoBtn.addEventListener('click', () => {
    if(secondNum === '' && operator === ''){
        firstNum = firstNum.slice(0, firstNum.length - 1)
        firstNumContainer.textContent = firstNum;
        currentResultContainer.textContent = firstNum;
        console.log(firstNumContainer);
        console.log(firstNum);
    } else if(secondNum === '' && operator !== ''){
        operator = operator.slice(0, -1);
        currentResultContainer.textContent = firstNum;
    }
    else {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        secondNumContainer.textContent = secondNum;
        currentResultContainer.append(secondNumContainer)
        // currentResultContainer.textContent = secondNum;
        console.log(secondNumContainer);
        console.log(secondNum);
    }
  
//    currentResultContainer.textContent = currentResultContainer.textContent.slice(0, -1);
//    console.log(currentResultContainer);
//    console.log(firstNum);
//    console.log(firstNumContainer);
//    console.log(secondNum);
//    console.log(secondNumContainer);
   
});

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const numberBtnName = btn.dataset.number;
        result.textContent = '';
        if(operator === ''){
            operationResult = 0;
            firstNum += numberBtnName;
            firstNumContainer.textContent = '';
            firstNumContainer.append(firstNum);
            currentResultContainer.append(firstNumContainer)
console.log(firstNumContainer)
console.log(typeof firstNum);    
        } else {
            secondNum += numberBtnName;
            secondNumContainer.textContent = ''
            secondNumContainer.append(secondNum);
            currentResultContainer.append(secondNumContainer)
console.log(firstNumContainer);

console.log(secondNumContainer);
console.log(typeof secondNum);
        };
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = btn.dataset.operator;
        if(operator !== "="){
            currentResultContainer.textContent += operator;

            if(operationResult !==0){
            firstNum = operationResult;
            firstNumContainer.textContent = '';
            firstNumContainer.append(firstNum);
console.log(firstNumContainer)
console.log(typeof firstNum);
            
            }
            secondNum = '';

 console.log(typeof operator);
        };
        if(operator == 'x²'){
            currentResultContainer.textContent = firstNum + '²'
        };
        console.log(firstNumContainer);
        
    })
});

            
equalBtn.addEventListener('click', () => {    
    if(operator == 'x²'){
        getPower(firstNum);
console.log(operationResult);
    } else{ 
        operate(firstNum, secondNum, operator);
    }
    removeContent();
});

function removeContent(){
    currentResultContainer.textContent = '';
    result.textContent = '';
    result.append(operationResult);
    currentResultContainer.append(result);
    firstNum = '';
    secondNum = '';
    operator = '';
    console.log(typeof operationResult);
    
}

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

function pow(num){
    return Math.pow(num, 2);
}

function operate(firstNum, secondNum, operator){
    let firstNumToNum = parseInt(firstNum);
    let secondNumToNum = parseInt(secondNum);
    if(operator == '+'){
        operationResult = add(firstNumToNum, secondNumToNum);
    };
    if(operator == '-'){
        operationResult = subtract(firstNumToNum, secondNumToNum);
    };
    if(operator == 'x'){
        operationResult = multiply(firstNumToNum, secondNumToNum);
    };
    if(operator == '÷'){
        operationResult = divide(firstNumToNum, secondNumToNum);
    };
   
console.log(result);
console.log(operationResult);
}

function getPower(firstNum){
        secondNum = '';
        currentResultContainer.textContent = '';
        operationResult = 0;
        operationResult = pow(parseInt(firstNum));
        currentResultContainer.textContent = operationResult;
        firstNum = '';
        firstNumContainer.textContent = '';
        result.append(operationResult);
    console.log(result);

}


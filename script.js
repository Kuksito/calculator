const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const undoBtn = document.querySelector('[data-undo]');
const clearBtn = document.querySelector('[data-clear]');
const equalBtn = document.querySelector('#btn-equal');
const pointBtn = document.querySelector('[data-point]');
const currentResultContainer = document.querySelector('#current-result');
const firstNumContainer = document.querySelector('#first-num');
const secondNumContainer = document.querySelector('#second-num');
const result = document.querySelector('#result');

let firstNum = '';
let secondNum = '';
let operator = '';
let operationResult = 0;
let pointValue = '';

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
        console.log(secondNumContainer);
        console.log(secondNum);
    }
});

// pointBtn.addEventListener('click', (e) => {
//     pointValue = e.target.textContent;
//     if(secondNum === ''){
//         firstNumContainer.textContent += pointValue;
//         currentResultContainer.append(firstNumContainer)
//         console.log(firstNumContainer);
        
//     }
// });

numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
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
console.log(firstNumContainer.textContent);

console.log(secondNumContainer);
console.log(typeof secondNum);
        };
    })
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator = btn.dataset.operator;
        if(operator !== "=" && operator !== '%'){
            // operator = '';
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
            currentResultContainer.textContent = firstNum + '²';
        };
        if(operator == '%'){
            if(secondNum !== ''){
                secondNumContainer.textContent = secondNum + '%';
            } else {
                firstNumContainer.textContent = firstNum + '%';
            }
        }
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
    operationResult.toString();
// operationResult.toFixed(10);
//     console.log(typeof operationResult);
    
}

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
    let result = num1 / num2;
    return result.toFixed(10).toString();
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
    if(firstNumContainer.textContent == num1 + '%'){
        result = (num1 / 100) + num2;
        console.log(result);
    };
    if (secondNumContainer.textContent == num2 + '%') {
        result = num1 + ((num1 / 100) * num2);
    } 
    return result.toString();
}

function operate(firstNum, secondNum, operator){
    let firstNumToNum = Number(firstNum);
    let secondNumToNum = Number(secondNum);
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
    if(operator == '%'){
        operationResult = getPercentage(firstNumToNum, secondNumToNum, operator);
    };

console.log(result);
console.log(typeof operationResult);
};

function getPower(firstNum){
        secondNum = '';
        currentResultContainer.textContent = '';
        operationResult = 0;
        operationResult = pow(Number(firstNum));
        currentResultContainer.textContent = operationResult;
        firstNum = '';
        firstNumContainer.textContent = '';
        result.append(operationResult);
    console.log(result);

};


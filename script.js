function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "You're a Nerd";
    }
    return num1 / num2;
}

let numberOne = '';
let operator;
let numberTwo = '';

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':

            return divide(num1, num2);
    }
}

let numBtns = document.querySelectorAll('.num-btn');
let operatorBtns = document.querySelectorAll('.operator-btn');
let display = document.querySelector('.display');
let equalsBtn = document.querySelector('.equals-btn');
let clearBtn = document.querySelector('.clear-btn');

numBtns.forEach(updateDisplay);
operatorBtns.forEach(updateDisplay);

function updateDisplay(element) {
    element.addEventListener("click", (e) => {
        display.textContent += e.target.textContent;
        if (e.target.className === 'num-btn' && operator === undefined) {
            numberOne += e.target.textContent;
        } else if (e.target.className === 'operator-btn' && operator === undefined) {
            operator = e.target.textContent;
        } else if (e.target.className === 'num-btn' && operator !== undefined) {
            numberTwo += e.target.textContent;
        }
    })
}

clearBtn.addEventListener("click", () => {
    display.textContent = '';
    numberOne = '';
    operator = undefined;
    numberTwo = '';
});

equalsBtn.addEventListener("click", () => {
    if (validExpression() === false) {
        display.textContent = 'Error';
    } else {
        sum = operate(Number(numberOne), operator, Number(numberTwo));
        display.textContent = roundNumber(sum);
        numberOne = display.textContent;
        operator = undefined;
        numberTwo = '';
    }
});

function validExpression() {
    if (numberOne === '' || numberTwo === '' || operator === undefined) {
        return false;
    } else {
        return true;
    }
}

function roundNumber(sum) {
    if (sum % 1 != 0) {
        return Math.round(sum * 100) / 100;
    } else {
        return sum;
    }
}
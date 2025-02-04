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
            console.log(`numberOne: ${numberOne}`);
        } else if (e.target.className === 'operator-btn') {
            operator = e.target.textContent;
            console.log(`operator: ${operator}`);
        } else if (e.target.className === 'num-btn' && operator !== undefined) {
            numberTwo += e.target.textContent;
            console.log(`numberTwo: ${numberTwo}`);
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
    display.textContent = operate(Number(numberOne), operator, Number(numberTwo));
});

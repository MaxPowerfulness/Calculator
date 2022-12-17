// Global varibales
const lowerDisp = document.querySelector('.lower');
const upperDisp = document.querySelector('.upper');
const nums = document.querySelectorAll("#num");
const operators = document.querySelectorAll('#operator');
const allClear = document.querySelector('.allClear');
operatorList = []; // stores user input history for operators.

// Event listners
nums.forEach(num => num.addEventListener('click', numToLowDisp)); // To display numbers.
operators.forEach(operator => operator.addEventListener('click', (event) => { // Updates the upper display and clears the lower after operator is clicked.
    numToUpDisp(event);
    clearLower();
}));
allClear.addEventListener('click', clearAll);


// Functions defined
/* Updates the lower display to reflect the button that was pressed by the user. */
function numToLowDisp(event) {
    const className = getClass(event);
    switch (className) {
        case 'zero':
            lowerDisp.insertAdjacentHTML("beforeend", '0');
            break;
        case 'one':
            lowerDisp.insertAdjacentHTML("beforeend", '1');
            break;
        case 'two':
            lowerDisp.insertAdjacentHTML("beforeend", '2');
            break;
        case 'three':
            lowerDisp.insertAdjacentHTML("beforeend", '3');
            break;
        case 'four':
            lowerDisp.insertAdjacentHTML("beforeend", '4');
            break;
        case 'five':
            lowerDisp.insertAdjacentHTML("beforeend", '5');
            break;
        case 'six':
            lowerDisp.insertAdjacentHTML("beforeend", '6');
            break;
        case 'seven':
            lowerDisp.insertAdjacentHTML("beforeend", '7');
            break;
        case 'eight':
            lowerDisp.insertAdjacentHTML("beforeend", '8');
            break;
        case 'nine':
            lowerDisp.insertAdjacentHTML("beforeend", '9');
            break;
    }
};


/*
Saves the number entered by user as a varibale and updates the upper display 
as the entered number.
*/
function numToUpDisp(event) {
    console.log(operatorList);
    operatorList.push(getClass(event));
    if (isNaN(parseInt(upperDisp.innerHTML))) {
        upperDisp.textContent = lowerDisp.innerHTML;
    } else {
        switch (operatorList[operatorList.length - 2]) {
            case 'plus':
                upperDisp.textContent = add(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
                break;
            case 'minus':
                upperDisp.textContent = subtract(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
                break;
            case 'multiply':
                upperDisp.textContent = multiply(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
                break;
            case 'divide':
                upperDisp.textContent = divide(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
                break;
            };
        };
};

/* Clears everything to reset the calculator. */
function clearAll() {
    operatorList = [];
    upperDisp.textContent = "";
    lowerDisp.textContent = "";
}

/* Clears the lower display after an operator is inputed. */
function clearLower() {
    lowerDisp.textContent = "";
};

/* Get class of Clicked Element. */
const getClass = e => {
    return e.target.className;  
};

// Math operation functions
function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(func, x, y){
    return func(x, y);
};
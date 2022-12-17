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

// Global varibales
const lowerDisp = document.querySelector('.lower');
const upperDisp = document.querySelector('.upper');
const nums = document.querySelectorAll("#num");
const operators = document.querySelectorAll('#operator');

// Event listners
nums.forEach(num => num.addEventListener('click', numToLowDisp)); // To display numbers.
operators.forEach(operator => operator.addEventListener('click', (event) => { // Updates the upper display and clears the lower after operator is clicked.
    numToUpDisp(event);
    clearLower();
}));

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
    operatorList.push(getClass(event));
    switch (operatorList[operatorList.length -2]) {
        case 'plus':
            if (isNaN(parseInt(upperDisp.innerHTML))) {
                upperDisp.textContent = lowerDisp.innerHTML;
            } else {
                upperDisp.textContent = add(parseInt(numVar), parseInt(lowerDisp.innerHTML));
            };
            break;
        case 'minus':
            if (isNaN(parseInt(upperDisp.innerHTML))) {
                upperDisp.textContent = lowerDisp.innerHTML;
            } else {
                upperDisp.textContent = subtract(parseInt(numVar), parseInt(lowerDisp.innerHTML));
            };
            break;
        case 'multiply':
            if (isNaN(parseInt(upperDisp.innerHTML))) {
                upperDisp.textContent = lowerDisp.innerHTML;
            } else {
                upperDisp.textContent = multiply(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
            };
            break;
        case 'divide':
            if (isNaN(parseInt(upperDisp.innerHTML))) {
                upperDisp.textContent = lowerDisp.innerHTML;
            } else {
                upperDisp.textContent = divide(parseInt(upperDisp.innerHTML), parseInt(lowerDisp.innerHTML));
            };
            break;
    }
    
};

operatorList = [];

/* Clears the lower display after an operator is inputed. */
function clearLower() {
    lowerDisp.textContent = "";
};

/* Get class of Clicked Element. */
const getClass = e => {
    return e.target.className;  
};


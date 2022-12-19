// Global varibales
const lowerDisp = document.querySelector('.lower');
const upperDisp = document.querySelector('.upper');
const nums = document.querySelectorAll("#num");
const operators = document.querySelectorAll('#operator');
const allClear = document.querySelector('.allClear');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const back = document.querySelector('.back');
let operatorList = []; // stores user input history for operator selection.

// Event listeners
nums.forEach(num => num.addEventListener('click', numToLowDisp)); // To display numbers.
operators.forEach(operator => operator.addEventListener('click', (event) => { // Updates the upper display and clears the lower after operator is clicked.
    numToUpDisp(event);
    clearLower();
}));
allClear.addEventListener('click', clearAll);
equals.addEventListener('click', function() {
    if (lowerDisp.innerHTML == "" | upperDisp.innerHTML == "") {
        return
    }else {
        operate(operatorList[operatorList.length-1]);
        lowerDisp.textContent="";
    }
});
decimal.addEventListener('click', () => {
    if (lowerDisp.innerHTML.includes('.')) {
        return;
    } else {
        lowerDisp.insertAdjacentHTML('beforeend', '.');
    }
});
back.addEventListener('click', () => {
    lowerDisp.textContent = lowerDisp.innerHTML.slice(0, this.length-1);
});

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
as the entered number. Also saves operator selected into a list. 
*/
function numToUpDisp(event) {
    operatorList.push(getClass(event));
    if (isNaN(parseFloat(upperDisp.innerHTML))) {
        upperDisp.textContent = lowerDisp.innerHTML;
    } else if (isNaN(parseFloat(lowerDisp.innerHTML))) {
        return;
    }
    else {
        operate(operatorList[operatorList.length - 2])
    };
};

/* 
Evalutes an operation between two numbers depending on the given operator. Takes the parameter
for selecting the operator from operatorList as a parameter.
*/
function operate(opListParam) {
    switch (opListParam) {
        case 'plus':
            upperDisp.textContent = add(parseFloat(upperDisp.innerHTML), parseFloat(lowerDisp.innerHTML));
            break;
        case 'minus':
            upperDisp.textContent = subtract(parseFloat(upperDisp.innerHTML), parseFloat(lowerDisp.innerHTML));
            break;
        case 'multiply':
            upperDisp.textContent = multiply(parseFloat(upperDisp.innerHTML), parseFloat(lowerDisp.innerHTML));
            break;
        case 'divide':
            if (lowerDisp.innerHTML == '0') {
                alert('Dont even try');
                break;
            } else{
                upperDisp.textContent = divide(parseFloat(upperDisp.innerHTML), parseFloat(lowerDisp.innerHTML));
                break;
            }
        case 'power':
            upperDisp.textContent = powerOf(parseFloat(upperDisp.innerHTML), parseFloat(lowerDisp.innerHTML));
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

function powerOf(x, y) {
    return x ** y;
}
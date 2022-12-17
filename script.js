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


// Adds numbers to the display when button is clicked
nums = document.querySelectorAll("#num");
console.log('nums:', nums);
nums.forEach(num => num.addEventListener('click', numToLowDisp));

/*
Updates the lower display to reflect the button that was pressed by the user.
*/
function numToLowDisp(event) {
    const className = buttonPressed(event);
    console.log(className);
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

// Get class of Clicked Element
const buttonPressed = e => {
    return e.target.className;  
  }


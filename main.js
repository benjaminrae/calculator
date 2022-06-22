// Variables

let userInputArray = [];
let numberForCurrentOperation;
let operation;

// DOM elements
const outputText = document.getElementById("output-text");
const additionButton = document.getElementById("plus-button");
const subtractionButton = document.getElementById("subtract-button");
const multiplicationButton = document.getElementById("multiply-button");
const divisionButton = document.getElementById("divide-button");

// Functions related to buttons (td HTML elements)
function numberClick(number) {
    removeActiveButton();
    if (operation === "equals") {
        operation = undefined;
    }
    userInputArray.push(number);
    outputText.innerHTML = userInputArray.join("");
}

function decimalClick(point) {
    if (userInputArray.indexOf(".") < 0) {
        if (userInputArray.length === 0) {
            userInputArray.push(`0${point}`);
            outputText.innerHTML = userInputArray.join("");
        } else {
            userInputArray.push(point);
            outputText.innerHTML = userInputArray.join("");
        }
    }
}

function clearButton() {
    removeActiveButton();
    userInputArray = [];
    outputText.innerHTML = "0";
    operation = "clear";
}

function addButton() {
    removeActiveButton();
    additionButton.classList.add("active");
    switch (operation) {
        case "addition":
            equalsButton();
            userInputArray = [];
            operation = "addition";
            break;
        case "equals":
            operation = "addition";
            userInputArray = [];
            break;
        case "clear":
            saveCurrentInput();
            operation = "addition";
            userInputArray = [];
            break;
        case undefined:
            saveCurrentInput();
            operation = "addition";
            userInputArray = [];
            break;
        default:
            equalsButton();
            userInputArray = [];
            operation = "addition";
            break;
    }
}

function subtractButton() {
    removeActiveButton();
    subtractionButton.classList.add("active");
    switch (operation) {
        case "subtraction":
            equalsButton();
            userInputArray = [];
            operation = "subtraction";
            break;
        case "equals":
            operation = "subtraction";
            userInputArray = [];
            break;
        case "clear":
            saveCurrentInput();
            operation = "subtraction";
            userInputArray = [];
            break;
        case undefined:
            saveCurrentInput();
            operation = "subtraction";
            userInputArray = [];
            break;
        default:
            equalsButton();
            userInputArray = [];
            operation = "subtraction";
            break;
    }
}

function multiplyButton() {
    removeActiveButton();
    multiplicationButton.classList.add("active");
    switch (operation) {
        case "multiplication":
            equalsButton();
            userInputArray = [];
            operation = "multiplication";
            break;
        case "equals":
            operation = "multiplication";
            userInputArray = [];
            break;
        case "clear":
            saveCurrentInput();
            operation = "multiplication";
            userInputArray = [];
            break;
        case undefined:
            saveCurrentInput();
            operation = "multiplication";
            userInputArray = [];
            break;
        default:
            equalsButton();
            userInputArray = [];
            operation = "multiplication";
            break;
    }
}

function divideButton() {
    removeActiveButton();
    divisionButton.classList.add("active");
    switch (operation) {
        case "division":
            equalsButton();
            userInputArray = [];
            operation = "division";
            break;
        case "equals":
            operation = "division";
            userInputArray = [];
            break;
        case "clear":
            saveCurrentInput();
            operation = "division";
            userInputArray = [];
            break;
        case undefined:
            saveCurrentInput();
            operation = "division";
            userInputArray = [];
            break;
        default:
            equalsButton();
            userInputArray = [];
            operation = "division";
            break;
    }
}

function backspaceButton() {
    userInputArray.pop();
    outputText.innerHTML = userInputArray.join("");
    if (userInputArray.length === 0) {
        outputText.innerHTML = "0";
    }
}

function equalsButton() {
    let result;
    switch (operation) {
        case "addition":
            result = addition(
                +numberForCurrentOperation,
                +userInputArray.join("")
            );
            outputText.innerHTML = result;
            userInputArray = result.toString().split("");
            userInputArray = stringArrayToNumberArray(userInputArray);
            saveCurrentInput();
            operation = "equals";
            userInputArray = [];
            break;
        case "subtraction":
            result = subtraction(
                +numberForCurrentOperation,
                +userInputArray.join("")
            );
            outputText.innerHTML = result;
            userInputArray = result.toString().split("");
            saveCurrentInput();
            operation = "equals";
            userInputArray = [];
            break;
        case "multiplication":
            result = multiplication(
                +numberForCurrentOperation,
                +userInputArray.join("")
            );
            outputText.innerHTML = result;
            userInputArray = result.toString().split("");
            saveCurrentInput();
            operation = "equals";
            userInputArray = [];
            break;
        case "division":
            result = division(
                +numberForCurrentOperation,
                +userInputArray.join("")
            );
            outputText.innerHTML = result;
            userInputArray = result.toString().split("");
            saveCurrentInput();
            operation = "equals";
            userInputArray = [];
            break;
        default:
            break;
    }
}

function plusMinusButton() {
    if (userInputArray.length < 1) {
        outputText.innerHTML = "-0";
        userInputArray.push("-");
    } else if (userInputArray.length === 1 && userInputArray[0] === "-") {
        outputText.innerHTML = "0";
        userInputArray = [];
    } else if (userInputArray[0] === "-") {
        userInputArray.shift();
        outputText.innerHTML = userInputArray.join("");
    } else {
        userInputArray.unshift("-");
        outputText.innerHTML = userInputArray.join("");
    }
}

function removeActiveButton() {
    additionButton.classList.remove("active");
    subtractionButton.classList.remove("active");
    multiplicationButton.classList.remove("active");
    divisionButton.classList.remove("active");
}

function percentButton() {
    let percent = division(+userInputArray.join(""), 100);
    userInputArray = percent.toString().split("");
    outputText.innerHTML = userInputArray.join("");
}

// Other Functions

function saveCurrentInput() {
    numberForCurrentOperation = +userInputArray.join("");
}

function stringArrayToNumberArray(array) {
    return array.map(Number);
}

// mathematical operations

function addition(number1, number2) {
    return number1 + number2;
}

function subtraction(number1, number2) {
    return number1 - number2;
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

// keyboard functionality

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "1":
            numberClick(1);
            break;
        case "2":
            numberClick(2);
            break;
        case "3":
            numberClick(3);
            break;
        case "4":
            numberClick(4);
            break;
        case "5":
            numberClick(5);
            break;
        case "6":
            numberClick(6);
            break;
        case "7":
            numberClick(7);
            break;
        case "8":
            numberClick(8);
            break;
        case "9":
            numberClick(9);
            break;
        case "0":
            numberClick(0);
            break;
        case "+":
            addButton();
            break;
        case "/":
            divideButton();
            break;
        case "*":
            multiplyButton();
            break;
        case "-":
            subtractButton();
            break;
        case ".":
            decimalClick(".");
            break;
        case "Enter":
            equalsButton();
            break;
        case "Backspace":
            backspaceButton();
            break;
        case "Escape":
            clearButton();
            break;
        case "_":
            plusMinusButton();
        case "%":
            percentButton();
        default:
            break;
    }
});

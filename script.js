let number1 = 4;
let number2 = 2;
let add = function (a, b) {
    return a + b;
}
let substract = function (a, b) {
    return a - b;
}
let multiply = function (a, b) {
    return a * b;
}
let divide = function (a, b) {
    if (a === 0 || b === 0) {
        console.log("ERROR")
    }
    return a / b;
}
function operate(operation) {
    if (operation === add) {
        add(number1, number2);
    }
    if (operation === substract) {
        substract(number1, number2);
    }
    if (operation === multiply) {
        multiply(number1, number2);
    }
    if (operation === divide) {
        divide(number1, number2);
    }
}
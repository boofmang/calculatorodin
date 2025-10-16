const add = function(num1, num2){
    return num1 + num2;
};

const subtract = function(num1, num2){
    return num1 - num2;
}

const divide = function(num1, num2){
    return num1 / num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}


let numberone = ``;
let operator = ``;
let numbertwo = ``;

const operate = function(numberone, operator, numbertwo){
    numberone = Number(numberone);
    numbertwo = Number(numbertwo);

    let result;
    switch(operator){
        case "+": result = add(num1, num2); break;
        case "-": result = subtract(num1, num2); break;
        case "x": result = multiply(num1, num2); break;
        case "/": result = divide(num1, num2); break;
        default: result = 0;
    };



};



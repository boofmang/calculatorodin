/////global////////
let numberone = "";
let operator = "";
let numbertwo = "";
let display = document.getElementById("displaytext");
let currentnumber = "";
const numberbuttons = document.querySelectorAll(".numbers");
const operatorbuttons = document.querySelectorAll(".operators");
const clearall = document.querySelector(".clearall");
const back = document.querySelector(".delete");
const evaluate = document.querySelector(".equals");
const decimal = document.querySelector(".decimal");
let decimalactive = false
let justevaluated = false

/////butttons///////
numberbuttons.forEach(button => {
    const value = button.textContent;
    const newvalue = parseFloat(value);
    button.addEventListener("click", () => {
          if (justevaluated === true) {
        return;
    }
    if (display.textContent.length >= 8) {
        return;
    }
    else {
        updateNumber(newvalue);
    }
   
})
});

clearall.addEventListener("click", () => {
    display.textContent = "";
    currentnumber = "";
    numberone = "";
    numbertwo = "";
    operator = "";
    justevaluated = false;
})

back.addEventListener("click", () => {
    if (justevaluated === true) {
        return;
    }
    else {
    display.textContent = display.textContent.slice(0, -1);}
});

decimal.addEventListener("click", () => {
    if (display.textContent.includes(".") || justevaluated == true) {
        return;}
        else {
            display.textContent += ".";
        }
    });
    


function updateNumber(number) {

    display.textContent += number;
    currentnumber = display.textContent;
}


operatorbuttons.forEach(button => {
    const value = button.textContent;
    button.addEventListener("click", () => {
        operator = value;
        numberone = currentnumber;
        display.textContent = "";
        justevaluated = false;
    })
})

evaluate.addEventListener("click", () => {
    const running = display.textContent;
    numbertwo = running;
    display.textContent = "";
    if(operator === "/" && numbertwo === "0") {
        display.textContent = "NOPE"
        return;
    }
    else{
    const result = operate(numberone, operator, numbertwo);
    // store and display the result as a string; also use it as the next left operand
    currentnumber = Number(result);
       if (typeof currentnumber === 'number' && isFinite(currentnumber)) {
        currentnumber = parseFloat(currentnumber.toPrecision(6));
    }
   
    display.textContent = currentnumber.toPrecision(6);
    numberone = parseFloat(currentnumber);
   
    justevaluated = true
    }
});


////mathetmatical operators////////
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

//////Calculation function/////////
const operate = function(numberone, operator, numbertwo){
    numberone = parseFloat(numberone);
    numbertwo = parseFloat(numbertwo);
    // If either operand isn't a number, return NaN so the caller can handle it
    if (Number.isNaN(numberone) || Number.isNaN(numbertwo)) return NaN;

    let result;
    switch(operator){
        case "+":
            result = add(numberone, numbertwo);
            break;
        case "-":
            result = subtract(numberone, numbertwo);
            break;
        case "*":
        case "x":
            // accept both '*' and 'x' labels for multiply
            result = multiply(numberone, numbertwo);
            break;
        case "/":
            result = divide(numberone, numbertwo);
            break;
        default:
            return NaN;
    }

    // Round to max 6 significant digits for display/consistency
    if (typeof result === 'number' && isFinite(result)) {
        result = parseFloat(result.toPrecision(6));
    }

    return result;
};


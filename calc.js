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

/////butttons///////
numberbuttons.forEach(button => {
    const value = button.textContent;
    const newvalue = parseFloat(value);
    button.addEventListener("click", () => updateNumber(newvalue));   
});

clearall.addEventListener("click", () => {
    display.textContent = "";
    currentnumber = "";
    numberone = "";
    numbertwo = "";
    operator = "";
})

back.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
})

function updateNumber(number) {

    display.textContent += String(number);
    currentnumber = display.textContent;
}


operatorbuttons.forEach(button => {
    const value = button.textContent;
    button.addEventListener("click", () => {
        operator = value;
        numberone = currentnumber;
        display.textContent = "";
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
    currentnumber = String(result);
    numberone = currentnumber;
    display.textContent = currentnumber;
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

    let result;
    switch(operator){
        case "+": result = add(numberone, numbertwo); break;
        case "-": result = subtract(numberone, numbertwo); break;
        case "*": result = multiply(numberone, numbertwo); break;
        case "/": result = divide(numberone, numbertwo); break;
        default: result = 0;
    };

       if (typeof result === "number") {
        result = parseFloat(result.toFixed(6));
};

  return result;

};



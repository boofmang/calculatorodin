
let numberone = "";
let operator = "";
let numbertwo = "";
let display = document.getElementById("displaytext");
let currentnumber = "";
const numberbuttons = document.querySelectorAll(".numbers")


numberbuttons.forEach(button => {
    const value = button.textContent;
    const newvalue = parseFloat(value);
    button.addEventListener("click", () => updateNumber(newvalue));   
});

function updateNumber(number) {
    display.textContent += parseFloat(number);
}

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



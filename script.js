const display = document.querySelector('.para');
const sign = document.querySelector('.sign');
const equal = document.querySelector('.enter');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let first = ""; 
let second = "";
let op = "";

numbers.forEach(element => {
    element.addEventListener('click', () => {
        display.textContent += element.value;
        if (op === "")
        {
            first += element.value;
        }
        else
        {
            second += element.value;
        }
    });    
});


operators.forEach(element => {
    element.addEventListener("click", () => {
        display.textContent += element.value;
        if(first !== "" && second !== "")
        {
            calculate();
        }
        op = element.value;
    });
});

function calculate()
{
    console.log("First:" + first);
    console.log("Operator;" + op);
    console.log("Second:" + second);
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    let result;

    switch(op)
    {
        case "+": 
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }

    display.textContent = result;

    first = result.toString();
    second = "";
    op = "";
}

clear.addEventListener("click", () => {
    display.textContent = "";
    first = "";
    second = "";
    op = "";
});

equal.addEventListener('click', () => {
    if (first !== "" && second !== "")
    {
        calculate();
    }
});

decimal.addEventListener('click', () => {
    display.textContent += decimal.value;
    if(op === "")
    {
        first += decimal.value;
    }
    else 
    {
        second += decimal.value;
    }
});

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if(op === "")
    {
        first = first.slice(0,-1);
    }
    else
    {
        second = second.slice(0,-1);
    }
});

sign.addEventListener('click', () => {
    if(op === "")
    {
        first = (-parseFloat(first)).toString();
        display.textContent = first;
    }
    else
    {
        second = (-parseFloat(second)).toString();
        display.textContent = display.textContent.slice(0, -(second.length - 1));
        display.textContent += `(${second})`;
    }
});
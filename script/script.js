const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
let num1;
let mode;

const equals = function(mode) {
    console.log(mode);
    if (mode === undefined)
        return;
    if (num1 === undefined)
        return;
    switch (mode) {
        case '/':
            display.textContent = Number(num1)/display.textContent;
            break;
        case '*':
            display.textContent = num1*display.textContent;
            break;
        case '+':
            result = Number(num1)+Number(display.textContent)
            console.log(result);
            display.textContent = result;
            break;
        case '-':
            display.textContent = num1-display.textContent;
            break;
    }
}

const operationHandler = function(op) {
    num1 = display.textContent;
    display.textContent = "";
}

const buttonHandler = function(e) {
    if (!isNaN(Number(this.textContent))) {
        display.textContent += this.textContent;
        return;
    }
    switch (this.textContent) {
        case 'AC':
            display.textContent = ""
            break;
        case '+/-':
            if (display.textContent.length == 0)
                break;
            if (display.textContent.includes('-'))
                display.textContent = display.textContent.slice(1, display.textContent.length)
            else display.textContent = '-'+display.textContent;
            break;
        case '%':
            display.textContent = display.textContent/100;
        case '.':
            if (display.textContent.includes('.')) {
                if (display.textContent.indexOf('.') == display.textContent.length-1)
                    {
                        display.textContent = display.textContent.slice(0, display.textContent.length-1);
                    }
            }
            else display.textContent += '.';
        case '=':
            equals(mode);
            break;
        default:
            mode = this.textContent;
            operationHandler(this.textContent); 
            break;
    }
    if (display.textContent.length > 10)
        display.textContent = display.textContent.slice(0, 9);
}

if (display.textContent === undefined) 
        display.textContent = "";

buttons.forEach(button => button.addEventListener('click', buttonHandler))


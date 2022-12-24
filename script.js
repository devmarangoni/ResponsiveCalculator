// DOM

// Desligando e ligando calculadora
const on = document.getElementById('on');
on.addEventListener('click', e => {
    const getState = on.getAttribute('id');
    if(getState === "on") {
        on.setAttribute('id','off');
        const setScreen = document.getElementById('screen-on');
        setScreen.setAttribute('id','screen-off');
        const insert = document.getElementById('insert');
        insert.innerText = 'Calculadora Desligada';
        on.innerText = 'OFF';
    } else if(getState === 'off') {
        on.setAttribute('id', 'on');
        const setScreen = document.getElementById('screen-off');
        setScreen.setAttribute('id', 'screen-on');
        const insert = document.getElementById('insert');
        insert.innerText = ' ';
        on.innerText = 'ON'
    } else {
        throw new Error('Você é incrivel, parabens por achar esse erro, tente F5 ou CTRL+R');
    }
});


// Inserir textos
const inserir = function(text) {
    const calculateOn = document.getElementById('on');
    const getState = calculateOn.getAttribute('id');
    if(getState === 'on') {
        const addTextOnScreen = document.getElementById('insert');
        return addTextOnScreen.innerText = text;
    } else if(getState === 'off') {
        throw new Error('A calculadora está desligada, experimente liga-la');
    } else {
        throw new Error('Erro desconhecido');
    }
}

// Teclado
const keyboard = document.getElementsByTagName('button');
const getKeyboardKey = function (keyboard) {
    for(let key of keyboard) {
        console.log();
    }
}

getKeyboardKey(keyboard);

class Calculation {
    constructor(num1, num2, operator) {
        this.num1 = num1;
        this.num2 = num2;
        this.operator = operator;
    }

    calculate() {
        switch(this.operator) {
            case "+":
                return this.num1 + this.num2;
            break;
            case "-":
                return this.num1 - this.num2;
            break;
            case "/":
                return this.num1 / this.num2;
            break;
            case "*":
                return this.num1 * this.num2;
            break; 
        }
    }

}

const calculation = new Calculation();

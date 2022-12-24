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
        const inScreen = addTextOnScreen.innerText += text;
        return inScreen;
    } else if(getState === 'off') {
        throw new Error('A calculadora está desligada, experimente liga-la');
    } else {
        throw new Error('Erro desconhecido');
    }
}

// Teclado
const num1 = document.getElementById('1');
num1.addEventListener('click', () => {inserir(num1.getAttribute('id'))});
const num2 = document.getElementById('2');
num2.addEventListener('click', () => {inserir(num2.getAttribute('id'))});
const num3 = document.getElementById('3');
num3.addEventListener('click', () => {inserir(num3.getAttribute('id'))});
const num4 = document.getElementById('4');
num4.addEventListener('click', () => {inserir(num4.getAttribute('id'))});
const num5 = document.getElementById('5');
num5.addEventListener('click', () => {inserir(num5.getAttribute('id'))});
const num6 = document.getElementById('6');
num6.addEventListener('click', () => {inserir(num6.getAttribute('id'))});
const num7 = document.getElementById('7');
num7.addEventListener('click', () => {inserir(num7.getAttribute('id'))});
const num8 = document.getElementById('8');
num8.addEventListener('click', () => {inserir(num8.getAttribute('id'))});
const num9 = document.getElementById('9');
num9.addEventListener('click', () => {inserir(num9.getAttribute('id'))});
const num0 = document.getElementById('0');
num0.addEventListener('click', () => {inserir(num0.getAttribute('id'))});




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

class Calculation {
    constructor(num1, operator, num2 = '') {
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

class Screen {
    constructor(screen){
        this.screen = screen;
    }

    offAndOn() {
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
    }

    inserir(text) {
        const getState = document.getElementById("on").getAttribute("id");
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

    apagar() {
        const calculateOn = document.getElementById("on").getAttribute("id");
        if(calculateOn === "on") {
            const removeTextOnScreen = document.getElementById('insert').innerText = '';
            return removeTextOnScreen;
        } else if(calculateOn === "off") {
            throw new Error('A calculadora está desligada, experimente liga-la');
        } else {
            throw new Error('Erro desconhecido');
        }
    }

    apagarUmCaractere() {
        const calculateOn = document.getElementById("on");
        const getState = calculateOn.getAttribute("id");
        if(getState === "on") {
            const removeTextOnScreen = document.getElementById('insert').innerText;
            const newInsert = removeTextOnScreen.substring(0, removeTextOnScreen.length - 1);
            const screen = document.getElementById('insert');
            const inScreen = screen.innerText = newInsert;
            return inScreen;
        } else if(getState === "off") {
            throw new Error('A calculadora está desligada, experimente liga-la');
        } else {
            throw new Error('Erro desconhecido');
        }
    }

    getResult(screen) {
        const screenValue = document.getElementById('insert').innerText;
        const arrFromScreenValue = screenValue.replaceAll('.',' ').split(' ');
        const num1 = Number(arrFromScreenValue[0]);
        const operator = arrFromScreenValue[1];
        const num2 = Number(arrFromScreenValue[2]);
        const calculate = new Calculation(num1, operator, num2);
        const result = String(calculate.calculate());
        screen.apagar();
        screen.inserir(result);
    }
}

const screen = new Screen(document.getElementById('insert'));


// Teclado
const num1 = document.getElementById('1');
num1.addEventListener('click', () => screen.inserir("1"));
const num2 = document.getElementById('2');
num2.addEventListener('click', () => screen.inserir("2"));
const num3 = document.getElementById('3');
num3.addEventListener('click', () => screen.inserir("3"));
const num4 = document.getElementById('4');
num4.addEventListener('click', () => screen.inserir("4"));
const num5 = document.getElementById('5');
num5.addEventListener('click', () => screen.inserir("5"));
const num6 = document.getElementById('6');
num6.addEventListener('click', () => screen.inserir("6"));
const num7 = document.getElementById('7');
num7.addEventListener('click', () => screen.inserir("7"));
const num8 = document.getElementById('8');
num8.addEventListener('click', () => screen.inserir("8"));
const num9 = document.getElementById('9');
num9.addEventListener('click', () => screen.inserir("9"));
const num0 = document.getElementById('0');
num0.addEventListener('click', () => screen.inserir("0"));
const point = document.getElementById('point');
point.addEventListener('click', () => screen.inserir("."))
// operadores
const division = document.getElementById('/');
division.addEventListener('click', () => screen.inserir("./."));
const sum = document.getElementById('+');
sum.addEventListener('click', () => screen.inserir(".+."));
const sub = document.getElementById('-');
sub.addEventListener('click', () => screen.inserir(".-."));
const multi = document.getElementById('*');
multi.addEventListener('click', () => screen.inserir(".*."));
const porcent = document.getElementById('%');
porcent.addEventListener('click', () => screen.inserir(".%."));
const clearAll = document.getElementById('c');
clearAll.addEventListener('click', () => screen.apagar());
const screenStates = document.getElementById('on');
screenStates.addEventListener('click', screen.offAndOn());
const backspace = document.getElementById('ac');
backspace.addEventListener('click', () => screen.apagarUmCaractere());
const showResult = document.getElementById('=');
showResult.addEventListener('click', () => screen.getResult(screen));
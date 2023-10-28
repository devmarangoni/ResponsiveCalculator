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
            case "%":
                return this.num1 / 100;
            break;
        }
    }

}

class Screen {
    constructor(screen, valorComAspas){
        this.screen = screen;
        this.valorComAspas = valorComAspas;
    }

    offAndOn() {
        const on = document.getElementById('on');
        on.addEventListener('click', e => {
            const getState = on.getAttribute('id');
            if(getState === "on") {
                on.setAttribute('id','off');
                const setScreen = document.getElementById('screen-on');
                setScreen.setAttribute('id','screen-off');
                const insert = document.getElementById('insert-on');
                insert.innerText = 'CALCULATOR OFF';
                insert.setAttribute('id','insert-off');
                on.innerText = 'OFF';
            } else if(getState === 'off') {
                on.setAttribute('id', 'on');
                const setScreen = document.getElementById('screen-off');
                setScreen.setAttribute('id', 'screen-on');
                const insert = document.getElementById('insert-off');
                insert.innerText = ' ';
                insert.setAttribute('id','insert-on');
                on.innerText = 'ON'
            } else {
                throw new Error('You are amazing, congratulations for finding this error, try F5 or CTRL+R');
            }
        });
    }

    insert(text) {
        const getState = document.getElementById("on").getAttribute("id");
        if (getState === 'on') {
            const addTextOnScreen = document.getElementById('insert-on');
            this.setValorSemAspas(this.valorComAspas += text);
            const inScreen = addTextOnScreen.innerText += text;
            addTextOnScreen.innerText = this.formatOutput(inScreen);
            return inScreen;
        } else if (getState === 'off') {
            throw new Error('Calculator is off, try turning it on');
        } else {
            throw new Error('Unknown error');
        }
    }

    delete() {
        const calculateOn = document.getElementById("on").getAttribute("id");
        if(calculateOn === "on") {
            const removeTextOnScreen = document.getElementById('insert-on').innerText = '';
            const removeLastOperation = document.getElementById('dev').innerText = '';
            this.valorComAspas = '';
            return removeTextOnScreen, removeLastOperation;
        } else if(calculateOn === "off") {
            throw new Error('Calculator is off, try turning it on');
        } else {
            throw new Error('Unknown error');
        }
    }

    deleteACharactere() {
        const calculateOn = document.getElementById("on");
        const getState = calculateOn.getAttribute("id");
        if(getState === "on") {
            const removeTextOnScreen = document.getElementById('insert-on').innerText;
            const newInsert = removeTextOnScreen.substring(0, removeTextOnScreen.length - 1);
            const screen = document.getElementById('insert-on');
            const inScreen = screen.innerText = newInsert;
            return inScreen;
        } else if(getState === "off") {
            throw new Error('Calculator is off, try turning it on');
        } else {
            throw new Error('Unknown error');
        }
    }

    getResult(screen) {
        const screenValue = document.getElementById('insert-on').innerText;
        const arrFromScreenValue = this.getValorSemAspas().replaceAll("'",' ').split(' ');
        this.setValorSemAspas('');
        const num1 = Number(arrFromScreenValue[0]);
        const operator = arrFromScreenValue[1];
        const num2 = Number(arrFromScreenValue[2]);
        const calculate = new Calculation(num1, operator, num2);
        const result = calculate.calculate();
        const LastOperation = document.getElementById('dev');
        screen.delete();
        LastOperation.innerText = `last operation: ${screenValue}`;
        screen.insert(result);
    }

    formatOutput(text) {
        return text.replace(/'/g, '');
    }

    setValorSemAspas(text){
        this.valorComAspas = text;
    }

    getValorSemAspas(){
        return this.valorComAspas;
    }
}

const screen = new Screen(document.getElementById('insert-on'), '');


// Utilizando com mouse
const num1 = document.getElementById('1');
num1.addEventListener('click', () => screen.insert("1"));
const num2 = document.getElementById('2');
num2.addEventListener('click', () => screen.insert("2"));
const num3 = document.getElementById('3');
num3.addEventListener('click', () => screen.insert("3"));
const num4 = document.getElementById('4');
num4.addEventListener('click', () => screen.insert("4"));
const num5 = document.getElementById('5');
num5.addEventListener('click', () => screen.insert("5"));
const num6 = document.getElementById('6');
num6.addEventListener('click', () => screen.insert("6"));
const num7 = document.getElementById('7');
num7.addEventListener('click', () => screen.insert("7"));
const num8 = document.getElementById('8');
num8.addEventListener('click', () => screen.insert("8"));
const num9 = document.getElementById('9');
num9.addEventListener('click', () => screen.insert("9"));
const num0 = document.getElementById('0');
num0.addEventListener('click', () => screen.insert("0"));
const point = document.getElementById('point');
point.addEventListener('click', () => screen.insert("."))
// operadores
const division = document.getElementById('/');
division.addEventListener('click', () => screen.insert("'/'"));
const sum = document.getElementById('+');
sum.addEventListener('click', () => screen.insert("'+'"));
const subtraction = document.getElementById('-');
subtraction.addEventListener('click', () => screen.insert("'-'"));
const multiplication = document.getElementById('*');
multiplication.addEventListener('click', () => screen.insert("'*'"));
const porcentage = document.getElementById('%');
porcentage.addEventListener('click', () => screen.insert("'%'"));
const clearAll = document.getElementById('c');
clearAll.addEventListener('click', () => screen.delete());
const screenStates = document.getElementById('on');
screenStates.addEventListener('click', screen.offAndOn());
const backspace = document.getElementById('ac');
backspace.addEventListener('click', () => screen.deleteACharactere());
const showResult = document.getElementById('=');
showResult.addEventListener('click', () => screen.getResult(screen));
//Ultilizando com TECLADO
const keyboard = document.getElementById('keyboard');
keyboard.addEventListener("keydown", e => {
    const keypressed = e.key;
    switch(keypressed) {
        case '1':
            screen.insert("1");
        break;
        case '2':
            screen.insert("2");
        break;
        case '3':
            screen.insert("3");
        break;
        case '4':
            screen.insert("4");
        break;
        case '5':
            screen.insert("5");
        break;
        case '6':
            screen.insert("6");
        break;
        case '7':
            screen.insert("7");
        break;
        case '8':
            screen.insert("8");
        break;
        case '9':
            screen.insert("9");
        break;
        case '0':
            screen.insert("0");
        break;
        case '/':
            screen.insert("'/'");
        break;
        case '*':
            screen.insert("'*'");
        break;
        case '-':
            screen.insert("'-'");
        break;
        case '+':
            screen.insert("'+'");
        break;
        case '%':
            screen.insert("'%'");
        break;
        case 'Enter':
            screen.getResult(screen);
        break;
        case 'Backspace':
            screen.deleteACharactere();
        break;
        default:
        break;
    }
});
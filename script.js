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

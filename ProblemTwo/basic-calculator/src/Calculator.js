import React from 'react';

/** 
 * NOTE: The Calculator functions demonstrate the use of `stack operations` to process user input and perform 
 * mathematical operations. The `push()` and `pop()` methods are what enable the use of an array as a stack.
 * 
 * A basic calculator has four main operations:
 *  - Add      (+)  
 *  - Subtract (-)
 *  - Multiply (*)  
 *  - Divide   (/), as well as (%). 
 * 
 * The implementation of operator precedence is demonstrated in the `operatorPressed()` function.
*/

class Calculator extends React.Component {
    // NOTE: Showing the use of `props` and updating the display
    // Included a visual representation of the operation stacking order  
    constructor(props) {
        super(props);
        this.state = {
            stack: ['='],
            display: '0'
        }
    }

    // Event / Data Bindings for each potential user interaction
    numberPressed(val) {
        const state = this.state;
        if (typeof state.stack[state.stack.length - 1] !== 'number') {
            state.display = val;
            state.stack.push(parseInt(state.display, 10));
        } else {
            state.display += val;
            state.stack[state.stack.length - 1] = parseInt(state.display, 10);
        }
        this.setState(state);
    }

    operatorPressed(val) {
        const state = this.state;
        const precedenceMap = { '+': 0, '-': 0, '*': 1, '/': 1 };
        this.ensureNumber(state);
        const precedence = precedenceMap[val];
        let reduce = true;
        while (reduce) {
            let i = state.stack.length - 1;
            let lastPrecedence = 100;

            while (i >= 0) {
                if (typeof state.stack[i] === 'string') {
                    lastPrecedence = precedenceMap[state.stack[i]];
                    break;
                }
                i--;
            }

            if (precedence <= lastPrecedence) {
                reduce = this.reduceLast(state);
            } else {
                reduce = false;
            }
        }

        state.stack.push(val);
        this.setState(state);
    }

    equalPressed() {
        const state = this.state;
        this.ensureNumber(state);
        while (this.reduceLast(state)) { }
        state.stack.pop();
        this.setState(state);
    }

    percentPressed() {
        const state = this.state;
        this.ensureNumber(state);
        while (this.reduceLast(state)) { }
        const result = state.stack.pop() / 100;
        state.display = result.toString(10);
        this.setState(state);
    }

    acPressed() {
        const state = this.state;
        state.stack = ['='];
        state.display = '0';
        this.setState(state);
    }

    cePressed() {
        const state = this.state;
        if (typeof state.stack[state.stack.length - 1] === 'number') { state.stack.pop(); }
        state.display = '0';
        this.setState(state);
    }

    // Check the incoming data type and parse any string values
    ensureNumber(state) {
        if (typeof state.stack[state.stack.length - 1] === 'string') {
            state.stack.push(parseInt(state.display, 10));
        }
    }

    reduceLast(state) {
        if (state.stack.length < 4) { return false; }
        const num2 = state.stack.pop();
        const op = state.stack.pop();
        const num1 = state.stack.pop();
        let result = num1;
        switch (op) {
            case '+': result = num1 + num2;
                break;
            case '-': result = num1 - num2;
                break;
            case '*': result = num1 * num2;
                break;
            case '/': result = num1 / num2;
                break;
            default:
        }
        state.stack.push(result);
        state.display = result.toString(10);
        return true;
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="calculator">
                    <div className="display">{ this.state.display }</div>
                    <div className="calculators">
                        <div className="">
                            <button className="btn-reset" onClick={this.acPressed.bind(this)}>AC</button>
                            <button className="btn-reset" onClick={this.cePressed.bind(this)}>CE</button>
                            <button className="btn-reset" onClick={this.percentPressed.bind(this)}>&#37;</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '/')}>&divide;</button>
                        </div>
                        <div className="">
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '7')}>7</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '8')}>8</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '9')}>9</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '*')}>&times;</button>
                        </div>
                        <div className="">
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '4')}>4</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '5')}>5</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '6')}>6</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '-')}>&ndash;</button>
                        </div>
                        <div className=""> 
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '1')}>1</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '2')}>2</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '3')}>3</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '+')}>&#43;</button>
                        </div>
                        <div className="">
                            <button className="btn-number btn-zero" onClick={this.numberPressed.bind(this, '0')}>0</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '.')}>&middot;</button>
                            <button className="btn-equal" onClick={this.equalPressed.bind(this)}>&#61;</button>
                        </div>
                    </div>
                </div>
                <div className="calculator-stack align-center">
                    <h4>Operation Stack</h4>
                    <table>
                        <tbody>
                            { this.state.stack.map((el, index) => (<tr><td key={index}>{ el }</td></tr>)) }
                        </tbody>

                    </table>

                </div>

            </div>

        );

    }
    
}

export default Calculator;
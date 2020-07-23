import React from 'react';

// TODO: Functions have been scaffolded for each potential operation - Add / Complete logic for each.
class Calculator extends React.Component {
    // TODO: Show the use of `props` by creating a visual representation of the operation stacking order  
    constructor(props) {
        super(props);
        this.state = {
            stack: ['='],
            display: '0'
        }
    }

    // Event / Data Bindings for each potential user interaction
    numberPressed(val) {
        const s = this.state;
        console.log('Number pressed: ' + s);
        // TODO: Logic will go here
        // this.setState(s);
    }

    operatorPressed(val) {
        const s = this.state;
        console.log('Operator pressed: ' + s);
        // TODO: Logic will go here
        // this.setState(s);
    }

    equalPressed() {
        const s = this.state;
        console.log('Equal pressed: ' + s);
        // TODO: Logic will go here
        // this.setState(s);
    }

    percentPressed() {
        const s = this.state;
        console.log('Percent pressed: ' + s);
        // TODO: Logic will go here
        // this.setState(s);
    }

    acPressed() {
        const s = this.state;
        s.stack = ['='];
        s.display = '0';
        this.setState(s);
    }

    signChangePressed() {
        const s = this.state;
        console.log('CE pressed: ' + s);
        // TODO: Logic will go here
        // this.setState(s);
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="calculator">
                    <div className="display">
                        <p>{this.state.display}</p>
                    </div>
                    <div className="calculators">
                        <div className="cell">
                            <button className="btn-reset" onClick={this.acPressed.bind(this)}>AC</button>
                            <button className="btn-reset" onClick={this.cePressed.bind(this)}>CE</button>
                            <button className="btn-reset" onClick={this.percentPressed.bind(this)}>&#37;</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '/')}>&divide;</button>
                        </div>
                        <div className="cell">
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '7')}>7</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '8')}>8</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '9')}>9</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '*')}>&times;</button>
                        </div>
                        <div className="cell">
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '4')}>4</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '5')}>5</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '6')}>6</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '-')}>&ndash;</button>
                        </div>
                        <div className="cell"> 
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '1')}>1</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '2')}>2</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '3')}>3</button>
                            <button className="btn-operator" onClick={this.operatorPressed.bind(this, '+')}>&#43;</button>
                        </div>
                        <div className="cell">
                            <button className="btn-number btn-zero" onClick={this.numberPressed.bind(this, '0')}>0</button>
                            <button className="btn-number" onClick={this.numberPressed.bind(this, '.')}>&middot;</button>
                            <button className="btn-equal" onClick={this.equalPressed.bind(this)}>&#61;</button>
                        </div>
                    </div>
                </div>
                <div className="calculator-stack align-center">
                    // TODO: Display values and operations here - Demonstrating how they `stack' up. 
                    <h4>Operation Stack</h4>

                </div>

            </div>

        );

    }
    
}

export default Calculator;
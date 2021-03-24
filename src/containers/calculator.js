import { Component } from "react";
import Display from "../components/display";
import Button from "../components/button";

class Calculator extends Component {
    initialState = {firstValue:0, secondValue:0, operator:1, symbol:1};
    
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    putValue = (value) => {
        const {firstValue, secondValue, operator} = this.state;
        const lastValue = operator === 1 ? firstValue : secondValue;
        switch (operator) {
            case 1: 
                this.setState({firstValue:(lastValue * 10) + value});
                break;
            case 2: 
                this.setState({secondValue:(lastValue * 10) + value});
                break;
        }
    }

    getValue = () => {
        const {firstValue, secondValue, operator} = this.state;
        switch (operator) {
            case 1: return firstValue;
            case 2: return secondValue === 0 ? firstValue : secondValue;
            case 3: return firstValue + secondValue;
            case 4: return firstValue - secondValue;
            case 5: return firstValue * secondValue;
            case 6: return secondValue === 0 ? "ERRO" : firstValue / secondValue;
            case 7: return firstValue ** 2;
        }   
    }

    pickOperation = (op) => {
        if (op === 5) {
            this.setState({
                operator:3,
                symbol:op
            });
        } else {
            this.setState({
                operator:2,
                symbol:op
            });
        }        
    }

    execOperation = () => {
        const {symbol} = this.state;
        switch (symbol) {
            case 1: 
                this.setState({operator:3});
                break;
            case 2: 
                this.setState({operator:4});
                break;
            case 3: 
                this.setState({operator:5});
                break;
            case 4: 
                this.setState({operator:6});
                break;
            case 5:
                this.setState({operator:7});
                break;
        }    
    }

    clear = () => {
        this.setState(this.initialState);
    }

    render() {
        const {operator} = this.state;
        return (
            <div className={"calculator"}>
                <div>
                    <Display value={this.getValue()}/>
                </div>
                <div className={"buttonsContainer"}>
                    <Button display={"1"} onClick={() => this.putValue(1)} disabled={operator === 3}/>
                    <Button display={"2"} onClick={() => this.putValue(2)} disabled={operator === 3}/>
                    <Button display={"3"} onClick={() => this.putValue(3)} disabled={operator === 3}/>
                    <Button display={"4"} onClick={() => this.putValue(4)} disabled={operator === 3}/>
                    <Button display={"5"} onClick={() => this.putValue(5)} disabled={operator === 3}/>
                    <Button display={"6"} onClick={() => this.putValue(6)} disabled={operator === 3}/>
                    <Button display={"7"} onClick={() => this.putValue(7)} disabled={operator === 3}/>
                    <Button display={"8"} onClick={() => this.putValue(8)} disabled={operator === 3}/>
                    <Button display={"9"} onClick={() => this.putValue(9)} disabled={operator === 3}/>
                    <Button display={"0"} onClick={() => this.putValue(0)} disabled={operator === 3}/>
                    <Button display={"+"} onClick={() => this.pickOperation(1)} disabled={operator !== 1}/>
                    <Button display={"-"} onClick={() => this.pickOperation(2)} disabled={operator !== 1}/>
                    <Button display={"*"} onClick={() => this.pickOperation(3)} disabled={operator !== 1}/>
                    <Button display={"/"} onClick={() => this.pickOperation(4)} disabled={operator !== 1}/>
                    <Button display={"²"} onClick={() => this.pickOperation(5)} disabled={operator !== 1}/>
                    <Button display={"="} onClick={() => this.execOperation()} disabled={operator === 1}/>
                    <Button display={"C"} onClick={() => this.clear()}/>
                </div>                
            </div>
        )
    }
}

export default Calculator;
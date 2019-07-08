import React, { Component } from 'react';
import './App.css';
import InputLine from './components/input_line/InputLine';
import Button from './components/button/Button';
import ClearButton from './components/clear_button/ClearButton';
import { evaluate } from 'mathjs';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "0"
      }
    }

  addToInput = (val) => {
    if (this.state.input === "0") {
      this.setState({ input: val });
    } else {
      if(!this.checkValue(val) && this.state.input.length !== 13) {
        this.setState({ input: this.state.input + val });
      }
    }
  };

  checkValue(val) {
    const opers = ['+', '-', '/'];
    let str = this.state.input;
    let last = str.toString().slice(-1);
    return opers.includes(last) && opers.includes(val) ? true : false;
  };

  handleEqual = () => {
    if (!this.checkValue('-')) {
      this.setState({ input: evaluate(this.state.input) });
    }
  };

  handleDivision = (val) => {
    if (this.state.input !== "0") {
      this.addToInput(val.replace("÷", "/"));
    }
  };

  render() {
    return (
        <div className = "app">
          <div className = "calculator-wrapper">
            <InputLine input = { this.state.input }></InputLine>
            <div className = "row">
              <ClearButton handleClear = { () => this.setState({ input: "0" }) }>clear</ClearButton>
              <Button handleClick = { this.handleDivision }>÷</Button>
            </div>
            <div className = "row">
              <Button handleClick = { this.addToInput }>7</Button>
              <Button handleClick = { this.addToInput }>8</Button>
              <Button handleClick = { this.addToInput }>9</Button>
              <Button handleClick = { this.addToInput }>-</Button>
            </div>
            <div className = "row">
              <Button handleClick = { this.addToInput }>4</Button>
              <Button handleClick = { this.addToInput }>5</Button>
              <Button handleClick = { this.addToInput }>6</Button>
              <Button handleClick = { this.addToInput }>+</Button>
            </div>
            <div className = "row">
              <Button handleClick = { this.addToInput }>1</Button>
              <Button handleClick = { this.addToInput }>2</Button>
              <Button handleClick = { this.addToInput }>3</Button>
              <Button handleClick = { this.handleEqual }>=</Button>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

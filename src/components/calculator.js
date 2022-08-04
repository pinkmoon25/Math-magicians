import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.value;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="num-input">
          {total}
          {operation}
          {next}
        </div>
        <input type="button" value="AC" id="AC" onClick={this.handleClick} />
        <input type="button" value="+/-" id="sign" onClick={this.handleClick} />
        <input type="button" value="%" id="modulo" onClick={this.handleClick} />
        <input type="button" value="÷" id="divide" className="operator" onClick={this.handleClick} />
        <input type="button" value="7" id="seven" onClick={this.handleClick} />
        <input type="button" value="8" id="eight" onClick={this.handleClick} />
        <input type="button" value="9" id="nine" onClick={this.handleClick} />
        <input type="button" value="x" id="X" className="operator" onClick={this.handleClick} />
        <input type="button" value="4" id="four" onClick={this.handleClick} />
        <input type="button" value="5" id="five" onClick={this.handleClick} />
        <input type="button" value="6" id="six" onClick={this.handleClick} />
        <input type="button" value="-" id="minus" className="operator" onClick={this.handleClick} />
        <input type="button" value="1" id="one" onClick={this.handleClick} />
        <input type="button" value="2" id="two" onClick={this.handleClick} />
        <input type="button" value="3" id="three" onClick={this.handleClick} />
        <input type="button" value="+" id="plus" className="operator" onClick={this.handleClick} />
        <input type="button" value="0" id="zero" onClick={this.handleClick} />
        <input type="button" value="." id="dot" onClick={this.handleClick} />
        <input type="button" value="=" id="equal" className="operator" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;

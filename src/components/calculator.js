import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const value = {
    total: null,
    next: null,
    operation: null,
  };

  const [initialValue, updateResult] = useState(value);

  const handleClick = (e) => {
    const buttonName = e.target.value;
    const result = calculate(initialValue, buttonName);
    updateResult(result);
  };

  return (
    <div className="container">
      <div className="num-input">
        {initialValue.total}
        {initialValue.operation}
        {initialValue.next}
      </div>
      <input type="button" value="AC" id="AC" onClick={handleClick} />
      <input type="button" value="+/-" id="sign" onClick={handleClick} />
      <input type="button" value="%" id="modulo" onClick={handleClick} />
      <input type="button" value="÷" id="divide" className="operator" onClick={handleClick} />
      <input type="button" value="7" id="seven" onClick={handleClick} />
      <input type="button" value="8" id="eight" onClick={handleClick} />
      <input type="button" value="9" id="nine" onClick={handleClick} />
      <input type="button" value="x" id="X" className="operator" onClick={handleClick} />
      <input type="button" value="4" id="four" onClick={handleClick} />
      <input type="button" value="5" id="five" onClick={handleClick} />
      <input type="button" value="6" id="six" onClick={handleClick} />
      <input type="button" value="-" id="minus" className="operator" onClick={handleClick} />
      <input type="button" value="1" id="one" onClick={handleClick} />
      <input type="button" value="2" id="two" onClick={handleClick} />
      <input type="button" value="3" id="three" onClick={handleClick} />
      <input type="button" value="+" id="plus" className="operator" onClick={handleClick} />
      <input type="button" value="0" id="zero" onClick={handleClick} />
      <input type="button" value="." id="dot" onClick={handleClick} />
      <input type="button" value="=" id="equal" className="operator" onClick={handleClick} />
    </div>
  );
};

export default Calculator;

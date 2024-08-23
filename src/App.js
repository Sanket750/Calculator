import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('+');

  const calculate = (e) => {
    e.preventDefault();

    if (!num1 || !num2) {
      alert("Please enter correct values");
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  const clearInputs = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperator('+');
  };

  return (
    <div className="App">
      <div className='container'>
        <form onSubmit={calculate}>
          <h1 className='Name'>Sum Calculator</h1>
          <div>
            <label>Number 1</label>
            <input
              required
              type='number'
              placeholder='Enter Number Value'
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div>
            <label>Operator</label>
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
              <option value='+'>+</option>
              <option value='-'>-</option>
              <option value='*'>*</option>
              <option value='/'>/</option>
            </select>
          </div>
          <div>
            <label>Number 2</label>
            <input
              required
              type='number'
              placeholder='Enter Number Value'
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button type='submit'>Submit</button>
            <button type="button" className='btn-clear' onClick={clearInputs}>Clear</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your result is: {result}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

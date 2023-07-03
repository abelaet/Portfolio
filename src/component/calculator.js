import React from 'react';
import './calculator.css';
import './style.css';


function Calculator() {
  function solve(val) {
    var v = document.getElementById('res');
    v.value += val;
  }

  function result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
  }

  function clear() {
    var inp = document.getElementById('res');
    inp.value = '';
  }

  function back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
  }

  return (
    <div className="main">
      <div className="grid">
        <input type="text" className="Display" id="res" />
        <input type="button" value="C" className="btn4" onClick={clear} />
        <input type="button" value="%" className="btn2" onClick={() => solve('%')} />
        <input type="button" value="←" className="btn2" onClick={() => back()} />
        <input type="button" value="/" className="btn2" onClick={() => solve('/')} />

        <input type="button" value="7" className="btn1" onClick={() => solve('7')} />
        <input type="button" value="8" className="btn1" onClick={() => solve('8')} />
        <input type="button" value="9" className="btn1" onClick={() => solve('9')} />
        <input type="button" value="x" className="btn2" onClick={() => solve('*')} />

        <input type="button" value="4" className="btn1" onClick={() => solve('4')} />
        <input type="button" value="5" className="btn1" onClick={() => solve('5')} />
        <input type="button" value="6" className="btn1" onClick={() => solve('6')} />
        <input type="button" value="-" className="btn2" onClick={() => solve('-')} />

        <input type="button" value="1" className="btn1" onClick={() => solve('1')} />
        <input type="button" value="2" className="btn1" onClick={() => solve('2')} />
        <input type="button" value="3" className="btn1" onClick={() => solve('3')} />
        <input type="button" value="+" className="btn2" onClick={() => solve('+')} />

        <input type="button" value="00" className="btn1" onClick={() => solve('00')} />
        <input type="button" value="0" className="btn1" onClick={() => solve('0')} />
        <input type="button" value="." className="btn1" onClick={() => solve('.')} />
        <input type="button" value="=" className="btn3" onClick={result} />
      </div>
    </div>
  );
}

export default Calculator;

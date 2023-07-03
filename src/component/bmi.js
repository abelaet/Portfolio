import React, { useState } from 'react';
import './bmi.css';

function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('')

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    if (bmi < 18.5) {
      setMessage('You are underweight')
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are a healthy weight')
    } else if(bmi>=25 && bmi<29.9){
      setMessage('you are over weight')
    }
     else if (bmi>30){
      setMessage('You are Obese')
     }
      
    
  };

  return (
    <div className="bmi-container">
      <h1>Body Mass Index Calculator</h1>
      <div className="input-container">
        <label htmlFor="height">Height (cm):</label>
        <input className='inputb'
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg):</label>
        <input className='inputb'
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button className="calculate-btn" onClick={calculateBmi}>Calculate</button>
      {bmi && (
        <p 
        className="result">Your Body Mass Index is: {bmi}
         <p className='result'>{message}</p>
        </p>

      )}
    </div>
  );
}

export default BMI;
import React, { useState } from 'react';
 import './agecalculator.css';

function Age() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className="App">
      <h1 className='h1age'>Age Calculator</h1>
      <div>
      <input className='inputage'
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p className='page'>You are {age} years old.</p>}
    </div>
  );
}

export default Age;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './component/calculator'
import Portfolio from './component/portfolio'
import BMI from './component/bmi';
import Age from './component/agecalculator';
import TicTacToe from './component/tictactoe';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
        
    
      <Route path="/" element={<Portfolio />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/age" element={<Age />} />
      <Route path="/tictactoe" element={<TicTacToe />} />


      
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
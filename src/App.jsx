import React, { useState } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import Squares from './Squares';
import './App.css';

export default function App() {
  const [hoverColor, setHoverColor] = useState('');

  const handleMouseEnter = () => {
    setHoverColor('rgba(164, 190, 212, 0.5)');
  };

  const handleMouseLeave = () => {
    setHoverColor('');
  };

  return (
    <div className="app">
      <div 
        className="hover-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Squares 
          speed={0.2} 
          squareSize={50}
          direction='down'
          borderColor='rgba(99, 102, 241, 0.3)'
          hoverFillColor={hoverColor}
        />
      </div>
      <div className="content-wrapper">
        <Header />
        <InputForm />
      </div>
    </div>
  );
}

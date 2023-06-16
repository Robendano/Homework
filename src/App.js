import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const handleSquareClick = (square) => {
    if (square === 1) {
      setColor1(color1 === 'red' ? 'blue' : 'red');
    } else if (square === 2) {
      setColor2(color2 === 'red' ? 'blue' : 'red');
    }
  };

  return (
    <div>
      <div
        className={`square ${color1}`}
        onClick={() => handleSquareClick(1)}
      ></div>
      <div
        className={`square ${color2}`}
        onClick={() => handleSquareClick(2)}
      ></div>
    </div>
  );
};

export default App;

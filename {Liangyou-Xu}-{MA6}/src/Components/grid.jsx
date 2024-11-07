import React, { useState } from 'react';
import Cell from './cell';
import './grid.css';

const Grid = () => {
  const [counter, setCounter] = useState(0);

  const toggleCell = (isOn) => {
    setCounter((prevCount) => prevCount + (isOn ? 1 : -1));
  };

  return (
    <div>
      <h1>Count: {counter}</h1>
      <div className="grid">
        <Cell toggleCell={toggleCell} />
        <Cell toggleCell={toggleCell} />
        <Cell toggleCell={toggleCell} />
        <Cell toggleCell={toggleCell} />
      </div>
    </div>
  );
};

export default Grid;

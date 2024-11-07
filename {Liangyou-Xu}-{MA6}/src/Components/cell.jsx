import React, { useState } from 'react';
import './cell.css';

const Cell = ({ toggleCell }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    toggleCell(!isOn);
  };

  return (
    <div
      onClick={handleClick}
      className={`cell ${isOn ? 'on' : 'off'}`}
    />
  );
};

export default Cell;

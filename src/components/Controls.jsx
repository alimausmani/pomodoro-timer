import React from 'react';
import './Controls.css'; 

const Controls = ({ isActive, toggleTimer, resetTimer, addTime, subtractTime }) => {
  return (
    <div className="controls">
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={addTime}>+5 Min</button>
      <button onClick={subtractTime}>-5 Min</button>
    </div>
  );
};

export default Controls;
import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import './Timer.css'; // Import Timer-specific CSS

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            alert(isBreak ? 'Break is over! Time to work!' : 'Time is up! Take a break!');
            setIsBreak(!isBreak);
            setMinutes(isBreak ? 25 : 5); 
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const addTime = () => {
    setMinutes((prev) => prev + 5);
  };

  const subtractTime = () => {
    setMinutes((prev) => (prev > 5 ? prev - 5 : 0));
  };

  return (
    <div className="timer">
      <h2>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h2>
      <p>{isBreak ? 'Break Time!' : 'Work Time!'}</p>
      <Controls
        isActive={isActive}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        addTime={addTime}
        subtractTime={subtractTime}
      />
    </div>
  );
};

export default Timer;
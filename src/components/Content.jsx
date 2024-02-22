import React, { useState, useEffect } from 'react';
import './Content.css';

const AutomaticCounterApp = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let interval;

    if (isCounting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  const handleClick = () => {
    setIsCounting(!isCounting);
  };

  const handleReset = () => {
    setCount(0);
    setIsCounting(true);
  };

  return (
    <div className='cont'>
      <h1>Automatic Counter</h1><br />
      <p>COUNT: {count}</p><br />
      <button onClick={handleClick}>{isCounting ? 'STOP' : 'START'}</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default AutomaticCounterApp;

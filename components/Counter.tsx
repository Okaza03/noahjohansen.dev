"use client"
import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endVal = end;
    const incrementTime = (duration / endVal) * 1000;

    const incrementCounter = () => {
      start += 1;
      setCount(start);
      if (start < endVal) {
        setTimeout(incrementCounter, incrementTime);
      }
    };

    incrementCounter();
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;

import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
   const increment = () => {
    setCount(count + 1)
   }
    const decrement = () => {
      setCount(count - 1)
    }
  return (
    <div className="Counter">
      <header className="Counter-header">
        <h1>{count}</h1>
        <button onClick={() => {
          increment();
        }}>increment</button>
        <button onClick={() => {
          decrement();
        }}>decrement</button>
      </header>
    </div>
  );
}

export default Counter;
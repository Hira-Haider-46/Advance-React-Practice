import React, { useState } from 'react';
import { counterContext } from '../../context/context';
import "./Counter.css";

export default function Counter({ children }) {

  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <div className="counter-container">
      {children({ count, setCount })} {/*render props concept*/}
      </div>
    </counterContext.Provider>
  );
}
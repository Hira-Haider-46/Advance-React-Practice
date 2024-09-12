import React, { useContext } from 'react';
import { counterContext } from '../../context/context';
import "./CounterButton.css";

export default function CounterButton() {

  const { count, setCount } = useContext(counterContext);

  return (
    <button className='btn2' onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}
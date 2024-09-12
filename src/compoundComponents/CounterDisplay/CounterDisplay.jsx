import React, { useContext } from 'react';
import { counterContext } from '../../context/context';

export default function CounterDisplay() {

  const { count } = useContext(counterContext);

  return <h1>Count: {count}</h1>;
}
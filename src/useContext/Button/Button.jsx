import React, { useContext } from 'react';
import { counterContext } from '../../context/context';
import "./Button.css";

function Button() {

  const {count, setCount} = useContext(counterContext);

  return (
    <button className='btn' onClick={() => {
      setCount(count + 1);
    }}>
      Click me {count}
    </button>
  )
}

export default Button;
import React from 'react';
import { useCounter } from '../useCounter';

export default function CustomHookCounter() {

    const { count, increment } = useCounter(0);

    return (
        <div className='counter-container'>
            <h1>Custom Hook Counter: {count}</h1>
            <button className='btn2' onClick={increment}>Increment</button>
        </div>
    );
}
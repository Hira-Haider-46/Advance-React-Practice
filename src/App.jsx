import React, { useState } from 'react';
import { counterContext } from "./context/context";
import Navbar from './useContext/Navbar';
import Counter from './compoundComponents/Counter';
import CounterButton from './compoundComponents/CounterButton';
import CounterDisplay from './compoundComponents/CounterDisplay';
import CustomHookCounter from './customHook/CustomHookCounter';
import './App.css';

function App() {

  const [count, setCount] = useState(0); // for use context 

  return (
    <>
      {/* use context   */}
      <counterContext.Provider value={{ count, setCount }}>

        <Navbar />
        
        {/* compound components + render props concept */}
        <Counter>
          {({ count, setCount }) => (
            <>
              <CounterDisplay count={count} />
              <CounterButton setCount={setCount} />
            </>
          )}
        </Counter>

        {/* Custom Hook */}

        <CustomHookCounter />

      </counterContext.Provider>
    </>
  );
}

export default App;
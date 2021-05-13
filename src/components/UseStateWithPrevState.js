import React, { useState } from 'react'

const UseStateWithPrevState = () => {
    const [count, setCount] = useState(0);
    const incrementTen = () => {
        setCount((prevCount) => prevCount + 10);
    };
    return (
        <div>
            <h2>Count {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementTen}>Increment 10</button>
        </div>
    )
}

export default UseStateWithPrevState

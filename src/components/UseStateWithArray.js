import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [numbers, setNumbers] = useState([]);
    const addNumber = () => {
        setNumbers([...numbers, {
            id: numbers.length,
            value: Date.now()
        }])
    };
    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            {
                numbers.map(num => (
                    <h3 key={num.id}>{num.value}</h3>
                ))
            }
        </div>
    )
}

export default UseStateWithArray


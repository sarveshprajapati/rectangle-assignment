import React, { useState } from 'react'
import './Rectangle.css';
const CenterRect = () => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <div className="main">
            <div className={isPressed ? 'greenbg' : 'redbg'}></div>
            <button onClick={() => setIsPressed(true)}>Press me</button>
            <p>{isPressed && 'Button Pressed'}</p>
        </div >
    )
}

export default CenterRect

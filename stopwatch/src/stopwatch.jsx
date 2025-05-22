import React, { useState, useEffect, useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {

    }, [isRunning])


    const handleStart = () => {

    }
    const handleReset = () => {

    }
    const handleStop = () => {

    }

    return (
        <div className='stopwatch-container'>
            <p className='displayed-time'>00:00:00</p>
            <div className='controls'>
                <button className='start-button' onClick={handleStart}>Start</button>
                <button className='reset-button' onClick={handleReset}>Reset</button>
                <button className='stop-button' onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}

export default Stopwatch
import React, { useState, useEffect, useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])


    const handleStart = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }
    const handleStop = () => {
        setIsRunning(false);
    }
    const formatTime = (ms) => {
        const centiseconds = Math.floor((ms % 1000) / 10);
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const formattedCentiseconds = String(centiseconds).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}:${formattedCentiseconds}`;
    }

    return (
        <div className='stopwatch-container'>
            <p className='displayed-time'>{formatTime(elapsedTime)}</p>
            <div className='controls'>
                <button className='start-button' onClick={handleStart}>Start</button>
                <button className='reset-button' onClick={handleReset}>Reset</button>
                <button className='stop-button' onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}

export default Stopwatch
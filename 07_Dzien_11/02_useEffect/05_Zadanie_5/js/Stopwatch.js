import React, {useEffect, useState} from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(true);
//puszcza stoper co sekundę, zatrzymuje go jak isRunning się zmieni i puszcza jak znowu się zmieni
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime(prevState => prevState + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        } else {
            setTime(prevState => prevState);
        }
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(prevState => !prevState);
    }

    const handleLaps = () => {
        setLaps(prevState => [...prevState, time])
    }

    const handleReset = () => {
        setLaps([]);
        setTime(0);
    }

    return (
        <div>
            <h1>Time: {time} s</h1>
            <button onClick={handleLaps}>Lap</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Start</button>
            {laps.map(lap => {
                return <ul>{lap}</ul>
            })}
        </div>
    );
};

export default Stopwatch;
import React, {useEffect, useState} from 'react';

const SpeedClickGame = ({time}) => {
    const[stateTime, setTime]=useState(time);
    const[points, setPoints]=useState(0);
    const[disabled, setDisabled]=useState(false);

    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(prevTime => prevTime-50);
        }, 50);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const handleClick = () => {
        setPoints(prevState => prevState+1);
    }

    useEffect(() => {
        setTime(time-(50*points));
    }, [points]);

    useEffect(() => {
        if (stateTime<0){
            setDisabled(true);
        }
    }, [stateTime]);


    return (
        <div>
            <button onClick={handleClick} disabled={disabled}>Click</button>
            <h1>{stateTime}</h1>
            <h2>{points}</h2>
        </div>
    );
};

export default SpeedClickGame;
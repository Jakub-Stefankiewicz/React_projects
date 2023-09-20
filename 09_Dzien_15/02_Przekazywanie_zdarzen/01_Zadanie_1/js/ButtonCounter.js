import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const[counter, setCounter]=useState(0);

    const clickHandler = () => {
        setCounter(prevState => prevState + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick onClick={clickHandler}/>
            <ButtonToClick onClick={clickHandler}/>
        </div>
    );
};

export default ButtonCounter;
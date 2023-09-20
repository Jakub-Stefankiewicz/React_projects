import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(10);
    const addCounter = () => {
        setCounter((prevState) => prevState + 1);
    };

    const removeCounter = () => {
        setCounter((prevState) => prevState - 1);
    };

    const reset= () => {
        setCounter(10);
    }

    return (
        <div>
            <h2>Liczba kliknięć {counter}</h2>
            <button onClick={addCounter}>+</button>
            <button onClick={removeCounter}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
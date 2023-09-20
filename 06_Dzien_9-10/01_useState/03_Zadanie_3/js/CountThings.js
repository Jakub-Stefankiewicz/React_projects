import React, {useState} from 'react';

const CountThings = () => {
    const [balance, setBalance] = useState(10000);
    const [age, setAge] = useState(18);
    const addMoney = () => {
        setBalance(prevState => prevState + 1000);
    }
    const addAge = () => {
        setAge(prevState => prevState + 1);
    }
    return (
        <div>
            <p>💰 so much money: ${balance}</p>
            <p>Age: {age}</p>
            <button onClick={addMoney}>Get rich</button>
            <button onClick={addAge}>Get older</button>
        </div>
    );
};

export default CountThings;
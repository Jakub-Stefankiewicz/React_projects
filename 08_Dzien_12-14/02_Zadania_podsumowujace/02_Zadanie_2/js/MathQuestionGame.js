import React, {useEffect, useState} from 'react';

const MathQuestionGame = () => {
    const items = ["+", "-", "*"];
    const randMath = items[Math.floor(Math.random() * items.length)];
    const randNum1 = Math.floor(Math.random() * (10 - 1) + 1);
    const randNum2 = Math.floor(Math.random() * (10 - 1) + 1);
    const [result, setResult] = useState(0);

    useEffect(() => {
        switch (items) {
            case "+":
                setResult(randNum1 + randNum2);
                break;
            case "-":
                setResult(randNum1 - randNum2);
                break;
            case "*":
                setResult(randNum1 * randNum2);
        }
    }, []);

    return (
        <div>
            <p>{randMath}</p>
            <p>{randNum1}</p>
            <p>{randNum2}</p>
            <p>{result}</p>
            <h1></h1>
            <div>
                <button>3</button>
                <button>6</button>
                <button>8</button>
                <button>7</button>
            </div>
            <h3></h3>
        </div>
    );
};

export default MathQuestionGame;
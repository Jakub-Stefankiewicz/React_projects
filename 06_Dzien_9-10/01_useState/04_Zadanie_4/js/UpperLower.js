import React, {useState} from 'react';

const UpperLower = () => {
    const [text, setText] = useState("Dowolny text");
    const upperText = () => {
        setText(prevState => prevState.toUpperCase())
    }
    const lowerText = () => {
        setText(prevState => prevState.toLowerCase())
    }
    return (
        <>
            <h2>{text}</h2>
            <button onClick={upperText}>Uppercase</button>
            <button onClick={lowerText}>Uppercase</button>
        </>
    );
};

export default UpperLower;
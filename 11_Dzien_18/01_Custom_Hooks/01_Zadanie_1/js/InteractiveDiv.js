import React from 'react';
import useInput from "./hooks/useInput"

const InteractiveDiv = () => {
    const [input, setInput] = useInput(0)
    return (
        <div>
            <input type="number" {...setInput}/>
            <div style={
                {
                    height: "100px",
                    width: `${input}px`,
                    backgroundColor: "red"
                }
            }></div>
        </div>
    );
};

export default InteractiveDiv;
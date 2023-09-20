import React from 'react';

const Buttons = () => {

    const clickHandler = () => {
        const numA = parseInt(prompt("podaj liczbę a"));
        const numB=parseInt(prompt("podaj liczbę b"));
        console.log(numA**numB);
        console.log(Math.pow(numA,numB));
    }

    const getSizeScreen = () => {
        console.log(window.innerWidth, window.innerHeight);
    }

    return (
        <div>
            <button onClick={() => console.log("klikniecie") }>Pierwszy</button>
            <button onClick={clickHandler}>Drugi</button>
            <button onDoubleClick={getSizeScreen}>Trzeci</button>
        </div>
    );
};

export default Buttons;
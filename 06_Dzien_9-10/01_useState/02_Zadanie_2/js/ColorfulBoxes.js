import React, {useState} from 'react';

const ColorfulBoxes = () => {
    const [arr, setState] = useState([]);
    const handleClick = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setState(prevState => {
            const arr=[...prevState];
            arr.push(randomColor);
            return arr;
        })
    }
    return (
        <>
            <button onClick={handleClick}>Dodaj boxa!</button>
            {arr.map(el => {
                return <div key={el} style={{ height: 200, width: 200, backgroundColor: el }}></div>
            })}
        </>
    );
};

export default ColorfulBoxes;
import React, {useState} from 'react';

const ToDoList = () => {
    const [arr, arrUpdate] = useState([]);
    const handleClick = () => {
        arrUpdate(prevState => [...prevState, `Zadanie ${prevState.length + 1}`])
    }
    return (
        <div>
            <button onClick={handleClick}>Dodaj zadanie</button>
            <list>
                {arr.map((el, index) => {
                    return <ul key={index}>{el}</ul>
                })}
            </list>
        </div>
    );
};

export default ToDoList;
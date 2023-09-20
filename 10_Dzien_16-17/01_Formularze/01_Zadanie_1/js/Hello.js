import React, {useState} from 'react';

const Hello = () => {
    const[name, setName]=useState("Ty");


    return (
        <div>
            <form>
                Wpisz swoje imię
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
            <h1>Hello, {name}</h1>
        </div>
    );
};

export default Hello;
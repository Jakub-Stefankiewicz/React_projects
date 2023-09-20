import React, {useState, useEffect} from 'react';
import {fetch} from "whatwg-fetch";

const Pokemon = () => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const data = await response.json();
                console.log(data);
                data.results.forEach(result => {
                    setPoke(prevState => [...prevState,result]);
                })
            } catch (e) {
                console.log(e);
            }
        };
        fetchData()
    }, []);

    return (
        <div>
            <ul className="list">
                {poke.map(pokemon => {
                    return <li key={pokemon.name}>{pokemon.name}</li>
            })}
            </ul>
        </div>
    );
};

export default Pokemon;
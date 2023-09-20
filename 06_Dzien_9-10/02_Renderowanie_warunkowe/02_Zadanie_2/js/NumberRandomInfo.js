import React, {useState} from 'react';

const NumberRandomInfo = () => {
    const [number, newNumber] = useState(0);
    const update = () => newNumber(Math.ceil(Math.random() * 5));
    setInterval(update, 1000);

    return (
        <div>
            {number >= 3 ? <p>{number} większa lub równa 3</p> : <p>{number} mniejsza od 3</p>}
        </div>
    );
};

export default NumberRandomInfo;
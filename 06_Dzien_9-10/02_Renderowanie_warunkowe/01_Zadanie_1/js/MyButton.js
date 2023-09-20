import React, {useState} from 'react';

const MyButton = () => {
    const [condition, updateCondition] = useState(false);
    const handleClick = () => {
        updateCondition(prevState => !prevState);
    }
    return (
        <div>
            <button onClick={handleClick}>{condition ? "TAK" : "NIE"}</button>
        </div>
    );
};

export default MyButton;
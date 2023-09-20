import React from 'react';

const ButtonToClick = ({onClick}) => {
    const addTo = () => {
        if (typeof onClick === "function") {
            onClick();
        }
    }
    return (
        <button onClick={addTo}>Button</button>
    );
};

export default ButtonToClick;
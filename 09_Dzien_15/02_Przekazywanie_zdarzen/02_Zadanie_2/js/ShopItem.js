import React from 'react';

const ShopItem = ({title, onBuy}) => {

    const click = () => {
        if(typeof onBuy==="function"){
            onBuy(title);
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={click}>Kup</button>
        </div>
    );
};

export default ShopItem;
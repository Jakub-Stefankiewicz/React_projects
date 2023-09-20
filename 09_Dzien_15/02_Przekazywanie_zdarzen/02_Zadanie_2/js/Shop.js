import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {
    const [cart, addToCart] = useState([]);

    const clickHandler = (item) => {
        addToCart(prevState => [...prevState, item]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={clickHandler}/>
            <ShopItem title="Dell X5500" onBuy={clickHandler}/>
            <ShopItem title="Asus NT6000" onBuy={clickHandler}/>
            <ul>
                {cart.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default Shop;
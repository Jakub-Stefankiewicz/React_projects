import React from 'react';
import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({item}) => {
    return (
        <section>
            <ShopItemHeader title={item.title} image={item.image}/>
            <ShopItemPricing  price={item.price}/>
            <ShopItemDescription  description={item.description}/>
        </section>
    );
};

export default ShopItem;
import React from 'react';
import ShopItemHeader from "../../02_Zadanie_2/js/ShopItemHeader";

const ShopList = ({shopList}) => {
    return (
        <div className="shoplist">
            {shopList.map( el => {
               return <ShopItemHeader image={el.image} title={el.title} />
            })}
        </div>
    );
};

export default ShopList;
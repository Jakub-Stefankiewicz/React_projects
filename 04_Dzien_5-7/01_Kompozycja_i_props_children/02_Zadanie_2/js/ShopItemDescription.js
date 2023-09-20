import React from 'react';
import ShopItemHeader from "./ShopItemHeader";

const ShopItemDescription = ({description}) => {
    return (
        <div>
            <article> {description} </article>
        </div>
    );
};

export default ShopItemDescription;
import React from 'react';
import ReceiptItem from "./ReceiptItem";



const ReceiptItems = ({items}) => {
    return (
        items.map(el => {
            return (
                <ReceiptItem item={el} />
            )
        })
    );
};

export default ReceiptItems;
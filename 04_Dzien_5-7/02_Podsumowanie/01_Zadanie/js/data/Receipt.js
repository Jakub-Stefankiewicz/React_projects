import React from 'react';
import ReceiptHeader from "./ReceiptHeader";
import ReceiptFooter from "./ReceiptFooter";
import ReceiptItems from "./ReceiptItems";


const Receipt = ({items, sum}) => {
    return (
        <table className="table">
            <ReceiptHeader/>
            <ReceiptItems items={items} />
            <ReceiptFooter sum={sum}/>
        </table>
    );
};

export default Receipt;
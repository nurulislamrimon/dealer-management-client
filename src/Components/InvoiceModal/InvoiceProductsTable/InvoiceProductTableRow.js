import React from 'react';

const InvoiceProductTableRow = ({ orderItem }) => {
    console.log(orderItem);

    return (
        <div className="border-b last:border-none border-gray grid grid-cols-5 py-1">
            <p>#{orderItem?.productId}</p>
            <p>{orderItem?.productName}</p>
            <p>X{orderItem?.quantity}</p>
            <p>৳{orderItem?.price}</p>
            <p>৳{orderItem?.total}</p>
        </div>
    );
};

export default InvoiceProductTableRow;
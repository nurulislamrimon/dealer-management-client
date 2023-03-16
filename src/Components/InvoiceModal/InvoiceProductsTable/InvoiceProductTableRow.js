import React from 'react';

const InvoiceProductTableRow = ({ orderItem }) => {
    return (
        <div className="border-b last:border-none border-gray grid grid-cols-5 text-xs text-black-light py-2">
            <p>#{orderItem?.productId}</p>
            <p className='text-black'>{orderItem?.productName}</p>
            <p>X{orderItem?.quantity}</p>
            <p>৳{orderItem?.price}</p>
            <p>৳{orderItem?.total}</p>
        </div>
    );
};

export default InvoiceProductTableRow;
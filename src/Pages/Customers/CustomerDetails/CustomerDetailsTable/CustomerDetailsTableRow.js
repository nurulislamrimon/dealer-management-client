import React from 'react';

const CustomerDetailsTableRow = ({ order }) => {
    return (
        <tr>
            <td className='py-1'>{order?.orderId}</td>
            <td className='py-1'>{order?.deliveryDate}</td>
            <td className='py-1'>{order?.orderAmount}</td>
            <td className='py-1'>{order?.orderDue}</td>
            <td className={`inline-block w-16 border rounded-md p-0 text-sm  ${order?.paymentStatus?.toLowerCase() === "paid" ? "border-primary text-primary" : order?.paymentStatus.toString().toLowerCase() === "portial" ? "border-info text-info" : "border-warning text-warning"}`}>{order?.paymentStatus?.toUpperCase()}</td>
        </tr>
    );
};

export default CustomerDetailsTableRow;
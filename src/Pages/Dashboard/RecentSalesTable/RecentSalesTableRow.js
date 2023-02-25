import React from 'react';

const RecentSalesTableRow = ({ orderId, customer, deliveryStatus, grandTotal, paidAmount, dueAmount, paymentStatus }) => {
    return (
        <tr className='text-center text-gray-500'>
            <td className='pb-1'>{orderId}</td>
            <td className='pb-1'>{customer}</td>
            <td className="pb-1"><span className={`inline-block w-20 border rounded-md ${deliveryStatus.toLowerCase() === "completed" ? "border-primary text-primary" : deliveryStatus.toString().toLowerCase() === "pending" ? "border-info text-info" : "border-warning text-warning"}`}>{deliveryStatus}</span></td>
            <td className='pb-1'>{grandTotal}</td>
            <td className='pb-1'>{paidAmount}</td>
            <td className='pb-1'>{dueAmount}</td>
            <td className={`inline-block w-16 border rounded-md p-0 ${paymentStatus.toLowerCase() === "paid" ? "border-primary text-primary" : paymentStatus.toString().toLowerCase() === "portial" ? "border-info text-info" : "border-warning text-warning"}`}>{paymentStatus}</td>
        </tr>
    );
};

export default RecentSalesTableRow;
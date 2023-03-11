import React from 'react';

const CustomerDetailsTableRow = ({ setOpenInvoiceModal, order }) => {
    return (
        <label onClick={() => setOpenInvoiceModal(order)} htmlFor='invoice-modal' className='w-full grid grid-cols-5 py-1 cursor-pointer hover:bg-black-light-bg'>
            <div>{order?.orderId}</div>
            <div>{order?.deliveryDate}</div>
            <div>৳ {order?.orderAmount}</div>
            <div>৳ {order?.orderDue}</div>
            <div className={`inline-block w-16 h-fit border rounded-md p-0 text-xs mx-auto my-auto  ${order?.paymentStatus?.toLowerCase() === "paid" ? "border-primary text-primary" : order?.paymentStatus.toString().toLowerCase() === "portial" ? "border-info text-info" : "border-warning text-warning"}`}>{order?.paymentStatus?.toUpperCase()}</div>
        </label>
    );
};

export default CustomerDetailsTableRow;
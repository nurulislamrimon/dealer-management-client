import React, { useEffect, useState } from 'react';
import InvoiceProductTableRow from './InvoiceProductTableRow';

const InvoiceProductTable = ({ invoice }) => {
    const [totalCompanies, setTotalCompanies] = useState([]);

    useEffect(() => {
        invoice?.orderItems?.forEach(orderItem => {
            for (const company of totalCompanies) {
                if (orderItem?.company === company) {
                    return;
                }
            }
            setTotalCompanies([...totalCompanies, orderItem?.company]);
        });
    }, []);

    // for (const company of totalCompanies) {
    //     console.log(company);
    // }
    return (
        <div className='border border-gray rounded-md p-3 w-full text-sm  whitespace-nowrap'>
            <div className='sticky top-0 z-10 bg-white border-b border-gray w-full font-bold grid grid-cols-5'>
                <h3>ID</h3>
                <h3>Product Name</h3>
                <h3>Qty</h3>
                <h3>Price</h3>
                <h3>Total</h3>
            </div>
            <div className='w-full'>
                {totalCompanies.forEach(company => {
                    const orderItems = invoice?.orderItems?.filter(orderItem => orderItem?.company === company);
                    // orderItems?.map(orderItem => <InvoiceProductTableRow key={orderItem?.productId} orderItem={orderItem} />)
                    console.log(orderItems);

                })}

                {/* <p className='text-left ml-5 pt-2 capitalize'>{ }</p>
                {invoice?.orderItems?.map(orderItem => <InvoiceProductTableRow key={orderItem?.id} orderItem={orderItem} />)} */}
            </div>
        </div>
    );
};

export default InvoiceProductTable;
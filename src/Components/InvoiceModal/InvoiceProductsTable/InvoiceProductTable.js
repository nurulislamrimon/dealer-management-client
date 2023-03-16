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
    }, [invoice, totalCompanies]);
    console.log(invoice);

    return (
        <div className='border border-gray rounded-md p-3 pt-0 w-full text-sm whitespace-nowrap relative h-[calc(100vh-350px)] overflow-auto'>
            <div className='sticky top-0 z-10 bg-white border-b border-gray w-full font-bold grid grid-cols-5 py-1'>
                <h3>ID</h3>
                <h3>Product Name</h3>
                <h3>Qty</h3>
                <h3>Price</h3>
                <h3>Total</h3>
            </div>
            <div className='w-full'>
                {totalCompanies?.map(company => {
                    return <>
                        <p className='text-left ml-5 pt-2 capitalize font-bold'>{company}</p>
                        {invoice?.orderItems?.filter(orderItem => orderItem?.company === company).map((orderItem) => <InvoiceProductTableRow key={orderItem?._id} orderItem={orderItem} />
                        )}
                    </>
                })}
            </div>
        </div>
    );
};

export default InvoiceProductTable;
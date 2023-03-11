import React from 'react';
import ModalCloseButton from '../../Utilities/ModalCloseButton';
import InvoiceProductTable from './InvoiceProductsTable/InvoiceProductTable';

const InvoiceModal = ({ order }) => {
    const invoice = {
        invoiceId: 12345,
        date: "12 January, 2023",
        customer: "Madina Store",
        customerId: 134532,
        orderItems: [
            { productId: "PID2938", productName: "Malai Biscute", company: "malai", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Malai Biscute", company: "malai", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Honey Combo", company: "pran", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Honey Combo", company: "pran", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Honey Combo", company: "pran", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Malai Biscute", company: "malai", quantity: 35, price: 40, total: 1400 },
            { productId: "PID2938", productName: "Malai Biscute", company: "toto", quantity: 35, price: 40, total: 1400 },
        ]
    }

    return (
        <div>
            <input type="checkbox" id="invoice-modal" className="modal-toggle" />
            <div className="modal backdrop-blur-sm">
                <div className="modal-box relative min-w-fit bg-white m-5">
                    <ModalCloseButton htmlFor="invoice-modal" />
                    <div className="flex">
                        <div className=''>
                            <p className="text-black-light text-left">{invoice?.date}</p>
                            <h3 className="text-lg font-bold">{invoice?.customer}<span className='text-black-light text-sm'>#{invoice?.customerId}</span></h3>
                        </div>
                    </div>
                    <hr className='border-gray my-3' />
                    <p className='text-black-light text-left'>Order details</p>
                    <InvoiceProductTable invoice={invoice} />
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
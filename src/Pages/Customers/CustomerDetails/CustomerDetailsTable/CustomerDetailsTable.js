import React, { useState } from 'react';
import InvoiceModal from '../../../../Components/InvoiceModal/InvoiceModal';
import CustomerDetailsTableRow from './CustomerDetailsTableRow';

const CustomerDetailsTable = () => {
    const [openInvoiceModal, setOpenInvoiceModal] = useState({});
    return (
        <div className='h-[calc(100vh-250px)] bg-white rounded-lg overflow-auto'>
            <div className="w-full text-center">
                {/* head */}
                <div className='sticky top-0 z-10 bg-white border-b border-gray w-full grid grid-cols-5 font-bold'>
                    <h3 className='py-3'>Order ID</h3>
                    <h3 className='py-3'>Delivery Date</h3>
                    <h3 className='py-3'>Amount</h3>
                    <h3 className='py-3'>Due</h3>
                    <h3 className='py-3'>Payment Status</h3>
                </div>
                <div className='w-full'>
                    {openInvoiceModal && <InvoiceModal order={openInvoiceModal} />}

                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "portial" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "due" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow setOpenInvoiceModal={setOpenInvoiceModal} order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                </div>
            </div>

        </div>
    );
};

export default CustomerDetailsTable;
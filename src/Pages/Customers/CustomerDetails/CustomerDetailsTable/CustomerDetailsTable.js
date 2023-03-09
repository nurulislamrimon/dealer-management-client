import React from 'react';
import CustomerDetailsTableRow from './CustomerDetailsTableRow';

const CustomerDetailsTable = () => {
    return (

        <div className='h-[calc(100vh-250px)] bg-white rounded-lg overflow-auto'>
            <table className="w-full text-center">
                {/* head */}
                <thead className='sticky top-0 z-10 bg-white border-b border-gray'>
                    <tr>
                        <th className='py-3'>Order ID</th>
                        <th className='py-3'>Delivery Date</th>
                        <th className='py-3'>Amount</th>
                        <th className='py-3'>Due</th>
                        <th className='py-3'>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "portial" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "due" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                    <CustomerDetailsTableRow order={{ orderId: "OID1054", deliveryDate: "24 jan,23", orderAmount: 125, orderDue: 25, paymentStatus: "paid" }} />
                </tbody>
            </table>

        </div>
    );
};

export default CustomerDetailsTable;
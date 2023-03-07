import React from 'react';
import DashboardRecentSalesTableRow from './DashboardRecentSalesTableRow';

const DashboardRecentSalesTable = () => {
    return (
        <div className='rounded-md bg-white m-3 col-span-2 text-xs max-h-[28vh] overflow-auto'>
            <div className="relative">
                <h4 className='text-md font-bold ml-7 my-1'>Recent Sales</h4>
                <table className="w-full">
                    {/* head */}
                    <thead className='sticky top-0 bg-base-200 border-b border-gray'>
                        <tr>
                            <th>OrderId</th>
                            <th>Customer</th>
                            <th>Delivery Status</th>
                            <th>Grand Total</th>
                            <th>Paid Amount</th>
                            <th>Due Amount</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Completed"} grandTotal={20000} paidAmount={20000} dueAmount={0} paymentStatus={"Paid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Pending"} grandTotal={20000} paidAmount={3000} dueAmount={17000} paymentStatus={"Portial"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Completed"} grandTotal={20000} paidAmount={20000} dueAmount={0} paymentStatus={"Paid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                        <DashboardRecentSalesTableRow orderId={12345} customer={'Rimon'} deliveryStatus={"Ordered"} grandTotal={20000} paidAmount={0} dueAmount={20000} paymentStatus={"Unpaid"} alertQty={30} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardRecentSalesTable;
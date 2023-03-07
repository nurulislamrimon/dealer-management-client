import React from 'react';
import DashboardStockAlertTableRow from './DashboardTopSellingProductsRow';

const DashboardStockAlertTable = () => {
    return (
        <div className='rounded-md bg-white mx-3 text-xs  h-full overflow-auto'>
            <div className="relative">
                <h4 className='text-md font-bold ml-6 my-1'>Top Selling Products</h4>
                <table className="w-full">
                    {/* head */}
                    <thead className='sticky top-0 bg-black-light-bg border-b border-gray'>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Grand Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                        <DashboardStockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardStockAlertTable;
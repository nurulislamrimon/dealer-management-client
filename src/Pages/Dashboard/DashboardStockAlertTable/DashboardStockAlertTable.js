import React from 'react';
import DashboardStockAlertTableRow from './DashboardStockAlertTableRow';

const DashboardStockAlertTable = () => {
    return (
        <div className='rounded-md bg-white mx-3 col-span-2 text-xs  h-full overflow-auto'>
            <div className="relative">
                <h4 className='text-md font-bold ml-7 my-1 '>Stock Alert</h4>
                <table className="w-full">
                    {/* head */}
                    <thead className='sticky top-0 bg-black-light-bg border-b border-gray'>
                        <tr>
                            <th>Code</th>
                            <th>Product</th>
                            <th>Warehouse</th>
                            <th>Quantity</th>
                            <th>Alert Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <DashboardStockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardStockAlertTable;
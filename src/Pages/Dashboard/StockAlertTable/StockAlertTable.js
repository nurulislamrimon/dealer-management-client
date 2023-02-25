import React from 'react';
import StockAlertTableRow from './StockAlertTableRow';

const StockAlertTable = () => {
    return (
        <div className='rounded-md bg-white mx-3 col-span-2 text-xs  max-h-[28vh] overflow-auto'>
            <div className="overflow-x-auto">
                <h4 className='text-md font-bold ml-7 my-1'>Stock Alert</h4>
                <table className="w-full border-t">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Product</th>
                            <th>Warehouse</th>
                            <th>Quantity</th>
                            <th>Alert Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                        <StockAlertTableRow code={12345} product={'Roll'} warehouse={"Nobi Sowd. Bari"} quantity={20} alertQty={30} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockAlertTable;
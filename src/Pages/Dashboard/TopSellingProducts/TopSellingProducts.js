import React from 'react';
import StockAlertTableRow from './TopSellingProductsRow';

const StockAlertTable = () => {
    return (
        <div className='rounded-md bg-white mx-3 text-xs  max-h-[28vh] overflow-auto'>
            <div className="overflow-x-auto">
                <h4 className='text-md font-bold ml-6 my-1'>Top Selling Products</h4>
                <table className="w-full border-t">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Grand Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockAlertTableRow product={'Roll'} quantity={20} grandTotal={95430} />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockAlertTable;
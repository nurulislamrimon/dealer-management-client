import React from 'react';

const StockAlertTableRow = ({ code, product, warehouse, quantity, alertQty }) => {
    return (
        <tr className='text-center text-gray-500'>
            <td className='pb-1'>{code}</td>
            <td className='pb-1'>{product}</td>
            <td className='pb-1'>{warehouse}</td>
            <td className='pb-1'>{quantity}</td>
            <td className='pb-1'><span className='border border-warning px-1 rounded-md text-warning text-[10px]
            '>{alertQty}</span></td>
        </tr>
    );
};

export default StockAlertTableRow;
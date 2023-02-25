import React from 'react';

const StockAlertTableRow = ({ product, quantity, grandTotal }) => {
    return (
        <tr className='text-center text-gray-500'>
            <td className='pb-1'>{product}</td>
            <td className='pb-1'>{quantity}</td>
            <td className='pb-1'>৳ {grandTotal}</td>
        </tr>
    );
};

export default StockAlertTableRow;
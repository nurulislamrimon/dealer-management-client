import React from 'react';

const DashboardStockAlertTableRow = ({ product, quantity, grandTotal }) => {
    return (
        <tr className='text-center text-black-light hover:bg-black-light-bg'>
            <td className='pb-1'>{product}</td>
            <td className='pb-1'>{quantity}</td>
            <td className='pb-1'>৳ {grandTotal}</td>
        </tr>
    );
};

export default DashboardStockAlertTableRow;
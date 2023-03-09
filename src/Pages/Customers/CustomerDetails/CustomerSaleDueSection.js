import React from 'react';

const CustomerSaleDueSection = () => {
    return (
        <div className='bg-white flex rounded-lg p-5 space-x-28'>
            <div className='space-y-1'>
                <p className="text-black-light">Total Sales amount</p>
                <h2 className="text-xl font-bold">৳ 455465</h2>
                <p className="text-sm text-black-light">55 order added</p>
            </div>
            <div className='space-y-1'>
                <p className="text-black-light">Due Amount</p>
                <h2 className="text-xl font-bold">৳ 200</h2>
            </div>
        </div>
    );
};

export default CustomerSaleDueSection;
import React from 'react';

const FinanceCard = ({ logo, type, amount, bgColor, logoBgColor }) => {
    return (
        <div className={`${bgColor} h-full p-5 w-32 2xl:w-48 flex flex-col 2xl:flex-row justify-center 2xl:justify-evenly items-center rounded-lg`}>
            <div className={`${logoBgColor} h-8 w-8 2xl:h-16 rounded-full flex items-center justify-center`}>
                {logo}
            </div>
            <div className='text-center'>
            <h1>{type}</h1>
            <span className='font-bold'>৳{amount}</span>
            </div>
        </div>
    );
};

export default FinanceCard;
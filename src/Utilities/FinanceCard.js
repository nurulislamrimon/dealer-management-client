import React from 'react';

const FinanceCard = ({ logo, type, amount, bgColor, logoBgColor }) => {
    return (
        <div className={`${bgColor} h-full w-28 flex flex-col justify-center items-center rounded-lg`}>
            <div className={`${logoBgColor} h-8 w-8 rounded-full flex items-center justify-center`}>
                {logo}
            </div>
            <h1 className='font-bold'>{type}</h1>
            <span>৳{amount}</span>
        </div>
    );
};

export default FinanceCard;
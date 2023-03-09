import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='text-center text-black text-3xl font-bold'>404</h1>
            <h1 className='text-center text-error text-xl font-bold'>Sorry! We can't get the page.</h1>
        </div>
    );
};

export default NotFoundPage;
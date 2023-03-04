import React from 'react';
import SalesTableRow from './SelesTableRow/SalesTableRow';

const Sales = ({ selesTable }) => {
    return (
        <div className='menu-container px-7 mt-8'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>Total Sells</h1>
                <div>
                    <select name="month" id="month" className='py-2.5 px-3.5 pt rounded-lg mr-3'>
                        <option value="">This month</option>
                        <option value="">last month</option>
                        <option value="">Today</option>
                    </select>
                    <select name="malai" id="malai" className='py-2.5 px-3.5 rounded-lg'>
                        <option value="">Malai</option>
                        <option value=""> Biskut</option>
                        <option value="">Dodey</option>
                    </select>
                </div>
            </div>
            <hr className='border-slate-300 mt-4' />
            <div className='flex p-5 mt-3 mb-7 bg-white rounded-2xl'>
                <div className='rounded-xl mr-7 w-72 h-36 bg-emerald-100 flex items-center justify-center '>
                    <div>
                        <h2 className='text-xl font-semibold'>Sales</h2>
                        <p>$ 4,5655</p>
                    </div>
                </div>
                <div className='rounded-xl mr-7 w-72 h-36 bg-red-100 flex items-center justify-center '>
                    <div>
                        <h2 className='text-xl font-semibold'>Due</h2>
                        <p>$ 504</p>
                    </div>
                </div>
                <div className='rounded-xl w-72 h-36 bg-orange-100 flex items-center justify-center '>
                    <div>
                        <h2 className='text-xl font-semibold'>Returned</h2>
                        <p>$ 4,5655</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='flex text-lg'>
                        <p className='pr-10'>
                            <span className='bg-green-500 rounded-xl text-white px-8 py-2.5'>All</span>
                        </p>
                        <p className='pr-10'>Delivered</p>
                        <p>Delivered</p>
                    </div>
                    <select name="store" id="store" className='px-4 py-2.5 rounded-lg'>
                        <option value="">Mobile store</option>
                        <option value="">phone store</option>
                    </select>
                </div>
                <hr className='border-slate-300 mt-4' />
                <div></div>
            </div>
        </div>
    );
};

export default Sales;
import React from 'react';
import CustomerTable from './CustomerTable/CustomerTable';
import { icons } from "../../Utilities/Icons"

const Customer = () => {
    return (
        <div className='w-full px-7 bg-white'>
            <h2 className='text-2xl font-bold py-5'>Product Expire Alert</h2>
            <hr className='border-black-light' />

            <div className="flex justify-between my-5">
                <div className="grid grid-flow-col items-center bg-black-light-bg py-1 px-2 w-fit rounded-lg text-lg">
                    <icons.AiOutlineSearch className='text-accent-content' />
                    <input type="text" placeholder='Search' className='bg-black-light-bg outline-none pl-2' />
                </div>

                <div className='flex'>
                    <select name="dealer" id="dealer" className='p-1 rounded-lg mr-3 bg-black-light-bg'>
                        <option value="">Dealer</option>
                        <option value="malai">Malai</option>
                    </select>
                    <select name="sort" id="sort" className='p-1 rounded-lg bg-black-light-bg'>
                        <option value="a-z">Lower to higher price</option>
                        <option value="z-a">Higher to lower price</option>
                    </select>
                </div>
            </div>
            <CustomerTable />
        </div>
    );
};

export default Customer;
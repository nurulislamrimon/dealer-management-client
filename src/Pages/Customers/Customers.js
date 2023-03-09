import React from 'react';
import { icons } from "../../Utilities/Icons"
import AddNewCustomerModal from './AddNewCustomerModal';
import CustomersTable from './CustomersTable/CustomersTable';

const Customers = () => {
    return (
        <div className='w-full h-full px-7 bg-white'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-bold py-5'>All Customers</h2>
                <label htmlFor="add-new-customer-modal" className='btn btn-sm btn-primary'>Add New Customer</label>
            </div>
            <hr className='border-black-light' />

            <div className="flex justify-between my-5">
                <div className="grid grid-flow-col items-center bg-black-light-bg py-1 px-2 w-fit rounded-lg text-lg">
                    <icons.AiOutlineSearch className='text-accent-content' />
                    <input type="text" placeholder='Search' className='bg-black-light-bg outline-none pl-2' />
                </div>

                <div className='flex'>
                    <select name="top-sells" id="top-sells" className='p-1 rounded-lg mr-3 bg-black-light-bg'>
                        <option value="">Top sells</option>
                    </select>
                    <select name="filter" id="filter" className='p-1 rounded-lg bg-black-light-bg'>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                </div>
            </div>
            <CustomersTable />
            <AddNewCustomerModal />
        </div>
    );
};

export default Customers;
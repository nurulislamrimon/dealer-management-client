import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetailsInfoSection from './CustomerDetailsInfoSection';
import CustomerDetailsTable from './CustomerDetailsTable/CustomerDetailsTable';
import CustomerSaleDueSection from './CustomerSaleDueSection';
import { icons } from "../../../Utilities/Icons";

const CustomerDetails = () => {
    const { id } = useParams();
    const handleChange = (e) => {
        console.log(e.target.value);
    }



    return (
        <div className='p-5 w-full h-full'>
            <div className="flex justify-between">
                <h4 className='text-lg'>
                    <span className='text-black-light'>
                        Customers
                    </span> / {id}
                </h4>
                <div className="flex space-x-2">
                    <input type="date" onChange={handleChange} className='text-primary btn btn-sm bg-white border-none hover:btn-primary' />
                    <button className='text-primary btn btn-sm bg-white border-none hover:btn-primary'>
                        <icons.CgFileDocument className='text-primary text-lg mr-1' /> VIEW STATEMENT
                    </button>
                    <button className='text-primary btn btn-sm bg-white border-none hover:btn-primary'>
                        <icons.AiOutlineEdit className='text-primary text-lg mr-1' /> EDIT CUSTOMER DETAILS
                    </button>
                </div>
            </div>
            <hr className='border-gray my-5' />
            <div className="flex gap-5">

                <div className='basis-3/4 space-y-5'>
                    <CustomerSaleDueSection />
                    <CustomerDetailsTable />
                </div>
                <CustomerDetailsInfoSection />
            </div>
        </div>
    );
};

export default CustomerDetails;
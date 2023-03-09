import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetailsInfoSection from './CustomerDetailsInfoSection';
import CustomerDetailsTable from './CustomerDetailsTable/CustomerDetailsTable';
import CustomerSaleDueSection from './CustomerSaleDueSection';

const CustomerDetails = () => {
    const { id } = useParams();

    return (
        <div className='p-5 w-full h-full'>
            <div className="flex justify-between">
                <h4 className='text-lg'>
                    <span className='text-black-light'>
                        Customers
                    </span> / {id}
                </h4>
                <div className="flex space-x-2">
                    <button className='text-primary btn btn-sm bg-white border-none hover:btn-primary'>
                        VIEW STATEMENT
                    </button>
                    <button className='text-primary btn btn-sm bg-white border-none hover:btn-primary'>
                        EDIT CUSTOMER DETAILS
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
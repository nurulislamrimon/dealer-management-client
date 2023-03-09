import React from 'react';
import placeholder from "../../../Images/profile-placeholder.jpg";
import { icons } from "../../../Utilities/Icons"

const CustomerDetailsInfoSection = () => {
    return (
        <div className='basis-1/4 bg-white rounded-lg h-[calc(100vh-110px)] p-5'>
            <div className="flex items-center space-x-2">
                <div className="bg-gray h-16 w-16 rounded-lg">
                    <img src={placeholder} alt="" className='h-full w-full object-contain' />
                </div>
                <div>
                    <h2 className='text-lg font-medium'>Madina Store</h2>
                    <p className='flex items-center'><icons.GoLocation className='mr-2' /> Pakarhat Bazar</p>
                </div>
            </div>
            {/* customer info */}
            <hr className='border-gray my-3' />
            <p className='text-sm text-black-light'>CUSTOMER INFO</p>
            <div className="customer-info">
                <p className='text-black-light'>Customer Name : </p>
                <p>Abduz Zabbar</p>
            </div>
            <div className="customer-info">
                <p className='text-black-light'>Customer ID : </p>
                <p>LN1-236</p>
            </div>
            <div className="customer-info">
                <p className='text-black-light'>Line : </p>
                <p>LN1</p>
            </div>
            <div className="customer-info">
                <p className='text-black-light'>First Delivery : </p>
                <p>24 Oct, 22</p>
            </div>
            <div className="customer-info">
                <p className='text-black-light'>Last Delivery : </p>
                <p>24 Oct, 23</p>
            </div>
            {/* contact section */}
            <hr className='border-gray my-3' />
            <p className='text-sm text-black-light'>CONTACT INFO</p>

            <div className="customer-info">
                <p className='text-black-light'>Jabbar Molisab </p>
                <p className='flex items-center'>01850711231<icons.IoCallOutline className='ml-1'/></p>
            </div>
            <div className="customer-info">
                <p className='text-black-light'>Jabbar Molisab </p>
                <p className='flex items-center'>01850711231<icons.IoCallOutline className='ml-1'/></p>
            </div>

        </div>
    );
};

export default CustomerDetailsInfoSection;
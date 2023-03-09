import React from 'react';
import { Link } from 'react-router-dom';
import profilePlaceholder from "../../../Images/profile-placeholder.jpg"
import { icons } from "../../../Utilities/Icons"

const CustomersTableRow = ({ customer }) => {
    console.log(customer.id);

    return (
        <Link to={`${customer?.id}`} className='odd:bg-black-light-bg px-3 grid grid-cols-5 gap-5 items-center cursor-pointer whitespace-nowrap'>
            <div className='pl-3 col-span-2'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={profilePlaceholder} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl">{"Madina Store"}{customer?.due && <span className='px-3 py-1 bg-electric-orange text-white ml-3 text-sm rounded-lg'>Due</span>}</div>
                        <div className="text-sm flex items-center"><icons.GoLocation className='mr-1' />Chaprashirhat</div>
                    </div>
                </div>
            </div>
            <div>
                <span className="opacity-50 text-sm">Last delivery date</span>
                <br />
                <span className="text-sm">12/04/23</span>
            </div>
            <div>
                <span className="opacity-50 text-sm">Contact</span>
                <br />
                <span className="text-sm">01850711231</span>
            </div>
            <div>
                <label htmlFor="customer-view-modal">
                    <span className="text-sm">Total Sell</span>
                    <br />
                    <span className="text-lg">৳56324</span>
                    <br />
                    <span className="opacity-50 text-xs">Total 15 order delivered</span>
                </label>
            </div>
        </Link>
    );
};

export default CustomersTableRow;
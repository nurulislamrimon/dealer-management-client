import React from 'react';
import profilePlaceholder from "../../../Images/profile-placeholder.jpg"
import { icons } from "../../../Utilities/Icons"

const CustomerTableRow = ({due}) => {
    return (
        <tr className='odd:bg-black-light-bg px-3'>
            <td className='pl-3'>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={profilePlaceholder} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl">{"Madina Store"}{due&&<span className='px-3 py-1 bg-electric-orange text-white ml-3 text-sm rounded-lg'>Due</span>}</div> 
                        <div className="text-sm flex items-center"><icons.CiLocationOn className='mr-1' />{"Chaprashirhat"}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="opacity-50 text-sm">Last delivery date</span>
                <br />
                <span className="text-sm">12/04/23</span>
            </td>
            <td>
                <span className="opacity-50 text-sm">Contact</span>
                <br />
                <span className="text-sm">01850711231</span>
            </td>
            <td>
                <span className="text-sm">Total Sell</span>
                <br />
                <span className="text-lg">৳56324</span>
                <br />
                <span className="opacity-50 text-xs">Total 15 order delivered</span>
            </td>
        </tr>
    );
};

export default CustomerTableRow;
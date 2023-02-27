import React from 'react';
import FinanceCard from '../../Utilities/FinanceCard';
import { icons } from "../../Utilities/Icons"

const TodaySummary = () => {
    return (

        <div className="bg-white m-3 p-3 rounded-md overflow-auto h-[30vh]">
            <div className="flex justify-between items-center">
                <h6 className='pb-3 font-semibold'>Today's Summary</h6>
                <select name="date-filter" id="date-filter" className='border text-sm p-0 rounded-md'>
                    <option value="this-month">This month</option>
                </select>
            </div>
            <div className="grid grid-flow-col h-3/4">
                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Sales" amount="4500" bgColor="bg-green-200" logoBgColor="bg-green-500" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Expenses" amount="4500" bgColor="bg-red-200" logoBgColor="bg-red-500" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Stock" amount="4500" bgColor="bg-orange-200" logoBgColor="bg-orange-500" />


                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Benifite" amount="4500" bgColor="bg-purple-200" logoBgColor="bg-purple-500" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Due" amount="4500" bgColor="bg-green-200" logoBgColor="bg-green-500" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Purchase" amount="4500" bgColor="bg-orange-200" logoBgColor="bg-orange-500" />


                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='text-3xl text-white' />} type="Invoice" amount="4500" bgColor="bg-purple-200" logoBgColor="bg-purple-500" />

            </div>
        </div>
    );
};

export default TodaySummary;
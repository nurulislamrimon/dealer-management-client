import React from 'react';
import FinanceCard from '../../Components/FinanceCard';
import { icons } from "../../Utilities/Icons"

const DashboardTodaySummary = () => {
    return (

        <div className="bg-white m-3 p-3 rounded-md overflow-auto max-h-[30vh]">
            <div className="flex justify-between items-center">
                <h6 className='pb-3 font-semibold'>Today's Summary</h6>
                <select name="date-filter" id="date-filter" className='border text-sm p-0 rounded-md'>
                    <option value="this-month">This month</option>
                </select>
            </div>
            <div className="flex justify-around">
                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Sales" amount="4500" bgColor="bg-green-200" logoBgColor="bg-primary" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Expenses" amount="4500" bgColor="bg-red-200" logoBgColor="bg-dying-rose" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Stock" amount="4500" bgColor="bg-orange-200" logoBgColor="bg-electric-orange" />


                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Benifite" amount="4500" bgColor="bg-purple-200" logoBgColor="bg-maya-blue" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Due" amount="4500" bgColor="bg-green-200" logoBgColor="bg-primary" />

                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Purchase" amount="4500" bgColor="bg-orange-200" logoBgColor="bg-dying-rose" />


                <FinanceCard logo={<icons.AiFillCodeSandboxCircle className='finance-card-icon' />} type="Invoice" amount="4500" bgColor="bg-purple-200" logoBgColor="bg-maya-blue" />

            </div>
        </div>
    );
};

export default DashboardTodaySummary;
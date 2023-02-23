import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from "../Utilities/Icons"


const Menu = () => {
    return (
        <nav className='h-screen relative w-2/8 bg-white'>
            <div className="flex items-center m-5">
                <div className='h-10 w-10 rounded-full'>
                    {/* <img src="" alt="" /> */}
                    <icons.AiFillCodeSandboxCircle className='h-10 w-10 text-primary' />
                </div>
                <span className='text-2xl text-primary'>BRANDX</span>
            </div>
            <ul className='h-[calc(100vh-100px)] overflow-auto pb-8'>
                <li><Link className='menus-button hover:bg-secondary' to="/dashboard"><icons.RiDashboardFill className='mr-2' />Dashboard</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/products"><icons.MdOutlineProductionQuantityLimits className="mr-2" />Products</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/customer"> <icons.IoIosPeople className="mr-2" /> Customer</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/sales"><icons.AiOutlineLineChart className='mr-2' />Sales</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/invoice"> <icons.AiOutlineReconciliation className='mr-2' /> Invoice</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/returned"><icons.TbTruckReturn className='mr-2' />Returned</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/warehouse"> <icons.FaWarehouse className='mr-2' /> Warehouse</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/purchases"> <icons.RiShoppingBag3Line className='mr-2' /> Purchases</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/dealers"> <icons.MdOutlineAddBusiness className='mr-2' /> Dealers</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/finance"> <icons.HiOutlineCurrencyBangladeshi className='mr-2' /> Finance</Link></li>
                <li><Link className='menus-button hover:bg-secondary' to="/users"> <icons.FiUsers className='mr-2' /> Users</Link></li>
            </ul>
            <button className='btn btn-sm btn-primary mx-5 fixed bottom-5 text-white'>Create Invoice</button>
        </nav>
    );
};

export default Menu;
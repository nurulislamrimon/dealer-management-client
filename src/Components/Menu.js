import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { icons } from "../Utilities/Icons"


const Menu = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className='h-screen relative bg-white'>
            <Link to='/' className="flex items-center m-5">
                <div className='h-10 w-10 rounded-full'>
                    {/* <img src="" alt="" /> */}
                    <icons.AiFillCodeSandboxCircle className='h-10 w-10 text-primary' />
                </div>
                <span className='text-2xl text-primary'>BRANDX</span>
            </Link>
            <ul className='h-[calc(100vh-100px)] overflow-auto pb-8'>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/dashboard">
                        <icons.RiDashboardFill className='mr-2' />Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/products" onClick={() => setDropdown(!dropdown)}>
                        <icons.MdOutlineProductionQuantityLimits className="mr-2" />Products{dropdown ? <icons.IoMdArrowDropup className='ml-5' /> : <icons.IoMdArrowDropdown className='ml-5' />}
                    </Link>
                </li>

                <div className={`${dropdown ? "block" : "hidden"}`}>
                    <li>
                        <Link className='text-accent pl-14 w-full inline-block hover:bg-secondary text-sm' to="/expire-alert">
                            Expire Alert
                            <span className='text-xs border rounded-full h-3 w-3 px-1 border-error text-error relative left-7'>2</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='text-accent pl-14 w-full inline-block hover:bg-secondary text-sm' to="/blank-stock">
                            Blank Stock
                            <span className='text-xs border rounded-full h-3 w-3 px-1 border-primary text-primary relative left-7'>2</span>
                        </Link>
                    </li>
                </div>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/customer">
                        <icons.IoIosPeople className="mr-2" /> Customer
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/sales">
                        <icons.AiOutlineLineChart className='mr-2' />Sales
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/invoice">

                        <icons.AiOutlineReconciliation className='mr-2' /> Invoice

                        <div><span className='text-xs border rounded-full h-3 w-3 px-1 border-primary text-primary relative left-10'>2</span></div>
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/returned">
                        <icons.TbTruckReturn className='mr-2' />Returned
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/warehouse">
                        <icons.FaWarehouse className='mr-2' /> Warehouse
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/purchases">
                        <icons.RiShoppingBag3Line className='mr-2' /> Purchases
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/dealers">
                        <icons.MdOutlineAddBusiness className='mr-2' /> Dealers
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/finance">
                        <icons.HiOutlineCurrencyBangladeshi className='mr-2' /> Finance
                    </Link>
                </li>
                <li>
                    <Link className='menus-button hover:bg-secondary' to="/users">
                        <icons.FiUsers className='mr-2' /> Users
                    </Link>
                </li>
            </ul>
            <div>
                <button className='btn btn-sm btn-primary w-fit fixed bottom-5 text-white mx-8'>Create Invoice</button>
            </div>
        </nav>
    );
};

export default Menu;
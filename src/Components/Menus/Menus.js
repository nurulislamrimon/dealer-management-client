import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { icons } from "../../Utilities/Icons"
import MenuComponent from './MenuComponent';


const Menus = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className='h-screen relative bg-white'>
            <Link to='/' className={`flex items-center m-5`}>
                <div className='h-10 w-10 rounded-full'>
                    {/* <img src="" alt="" /> */}
                    <icons.AiFillCodeSandboxCircle className='h-10 w-10 text-primary' />
                </div>
                <span className='text-2xl text-primary'>BRANDX</span>
            </Link>
            <ul className='h-[calc(100vh-100px)] overflow-auto pb-8'>

                <MenuComponent name="Dashboard" path="/" icon={<icons.RiDashboardFill className='mr-2' />} />
                <li>
                    <NavLink className={`menus-button hover:bg-primary-focus 
                    ${({ isActive }) => isActive ? "bg-primary-focus" : ""}
                        `} to="/products" onClick={() => setDropdown(!dropdown)}>
                        <icons.MdOutlineProductionQuantityLimits className="mr-2" />Products{dropdown ? <icons.IoMdArrowDropup className='ml-5' /> : <icons.IoMdArrowDropdown className='ml-5' />}
                    </NavLink>
                </li>

                <div className={`${dropdown ? "block" : "hidden"}`}>
                    <li>
                        <NavLink className='text-neutral pl-14 w-full inline-block hover:bg-primary-focus text-sm' to="/stock-alert">
                            Stock Alert
                            <span className='text-xs border rounded-full h-3 w-3 px-1 border-error text-error relative left-7'>2</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='text-neutral pl-14 w-full inline-block hover:bg-primary-focus text-sm' to="/blank-stock">
                            Blank Stock
                            <span className='text-xs border rounded-full h-3 w-3 px-1 border-primary text-primary relative left-7'>2</span>
                        </NavLink>
                    </li>
                </div>

                <MenuComponent name="Customer" path="/customer" icon={<icons.IoIosPeople className="mr-2" />} />

                <MenuComponent name="Sales" path="/sales" icon={<icons.AiOutlineLineChart className='mr-2' />} />

                <li>
                    <NavLink className={`menus-button hover:bg-primary-focus 
                    ${({ isActive }) => isActive ? "bg-secondary" : ""}
                        `} to="/invoice">

                        <icons.AiOutlineReconciliation className='mr-2' /> Invoice

                        <div><span className='text-xs border rounded-full h-3 w-3 px-1 border-primary text-primary relative left-10'>2</span></div>
                    </NavLink>
                </li>


                <MenuComponent name="Returned" path="/returned" icon={<icons.TbTruckReturn className='mr-2' />} />

                <MenuComponent name="Warehouse" path="/warehouse" icon={<icons.FaWarehouse className='mr-2' />} />

                <MenuComponent name="Purchases" path="/purchases" icon={<icons.RiShoppingBag3Line className='mr-2' />} />

                <MenuComponent name="Dealers" path="/dealers" icon={<icons.MdOutlineAddBusiness className='mr-2' />} />

                <MenuComponent name="Finance" path="/finance" icon={<icons.HiOutlineCurrencyBangladeshi className='mr-2' />} />

                <MenuComponent name="Users" path="/users" icon={<icons.FiUsers className='mr-2' />} />

            </ul>
            <div>
                <button className='btn btn-sm btn-primary w-fit fixed bottom-5 text-white mx-8'>Create Invoice</button>
            </div>
        </nav >
    );
};

export default Menus;
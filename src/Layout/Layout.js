import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Components/Menu';

const Layout = () => {
    return (
        <div className='grid grid-cols-6 h-screen overflow-hidden max-w-screen-2xl mx-auto bg-slate-200'>
            <Menu />
            <Outlet />
        </div>
    );
};

export default Layout;
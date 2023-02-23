import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Components/Menu';

const Layout = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Menu />
            <Outlet />
        </div>
    );
};

export default Layout;
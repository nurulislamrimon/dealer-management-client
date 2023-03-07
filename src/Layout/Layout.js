import React from 'react';
import { Outlet } from 'react-router-dom';
import Menus from '../Components/Menus/Menus';

const Layout = () => {
    return (
        <div className='flex w-screen h-screen overflow-hidden bg-black-light-bg'>
            <Menus />
            <Outlet />
        </div>
    );
};

export default Layout;
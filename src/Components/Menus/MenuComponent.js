import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuComponent = ({ path, icon, name }) => {
    return (
        <li>
            <NavLink className={
                    ({ isActive }) => isActive ? "menu-button bg-primary-dark" : "menu-button "}
                        to={path}>
                {icon}
                {name}
            </NavLink>
        </li>
    );
};

export default MenuComponent;
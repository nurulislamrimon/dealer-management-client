import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuComponent = ({ path, icon, name }) => {
    return (
        <li>
            <NavLink className={`menus-button hover:bg-primary-focus 
                    ${({ isActive }) => isActive ? "bg-primary-focus" : ""}
                        `} to={path}>
                {icon}
                {name}
            </NavLink>
        </li>
    );
};

export default MenuComponent;
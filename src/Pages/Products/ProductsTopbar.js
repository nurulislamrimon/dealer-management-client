import React from 'react';
import { icons } from "../../Utilities/Icons"

const ProductsTopbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex items-center  py-1 px-2 w-fit rounded-lg text-lg bg-black-light-bg">
                <icons.AiOutlineSearch className='text-black-light' />
                <input type="text" placeholder='Search' className='bg-black-light-bg outline-none pl-2' />
            </div>
            <div>
                <label htmlFor='product-add-new-modal' className='flex items-center btn btn-primary btn-sm text-white'>
                    <icons.BsPlusSquareFill className='text-white text-lg mr-2' />New Product</label>
            </div>
        </div>
    );
};

export default ProductsTopbar;
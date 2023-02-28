import React from 'react';
import { icons } from "../../Utilities/Icons"

const ProductsTopbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="grid grid-flow-col items-center bg-base-200 py-1 px-2 w-fit rounded-lg text-lg">
                <icons.AiOutlineSearch className='text-accent-content' />
                <input type="text" placeholder='Search' className='bg-base-200 outline-none pl-2' />
            </div>
            <div>
                <label htmlFor='product-add-new-modal' className='btn btn-primary btn-sm text-white'><icons.BsPlusSquareFill className='text-base-focus text-lg mr-2' />New Product</label>
            </div>
        </div>
    );
};

export default ProductsTopbar;
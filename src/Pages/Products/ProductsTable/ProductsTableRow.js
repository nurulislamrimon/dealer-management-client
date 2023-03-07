import React from 'react';
import { icons } from '../../../Utilities/Icons';


const ProductsTableRow = ({ setModals }) => {
    return (
        <tr className='text-black-light even:bg-black-light-bg'>
            <td className='py-2'>
                <div className="mask mask-squircle w-12 h-12 mx-auto">
                    <img src="https://www.littlesugarsnaps.com/wp-content/uploads/2022/03/Shrewsbury-biscuits-square-1025.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
            </td>
            <td className='py-2'>
                <div>
                    <div className=" font-normal">Hart Hagerty</div>
                    <div className="text-sm opacity-50">#157554</div>
                </div>
            </td>
            <td className='py-2'>NS. House</td>
            <td className='py-2'>100pcs</td>
            <td className='py-2'>৳ 100</td>
            <td className='py-2'>৳ 150</td>
            <td className='py-2'>
                <span className='text-white bg-black-light rounded-lg px-2 py-1'>
                    Malai
                </span>
            </td>
            <th>

                <label htmlFor="product-view-modal" className="btn btn-ghost btn-xs" onClick={() => setModals.setOpenViewProductModal({})}>
                    <icons.AiOutlineEye className='text-lg' />
                </label>
                <label htmlFor="product-edit-modal" className="btn btn-ghost btn-xs" onClick={() => setModals.setOpenEditProductModal({ test: "test from edit button" })}>
                    <icons.TbEdit className='text-lg text-primary' />
                </label>

                <label htmlFor="product-delete-modal" className="btn btn-ghost btn-xs" onClick={() => setModals.setDeleteProductModal({ test: "test from edit button" })}>
                    <icons.RiDeleteBin5Line className='text-lg text-error' />
                </label>
            </th>
        </tr>
    );
};

export default ProductsTableRow;
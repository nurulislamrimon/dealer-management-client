import React, { useState } from 'react';
import ProductDeleteModal from '../ProductDeleteModal';
import ProductEditModal from '../ProductEditModal/ProductEditModal';
import ProductsTable from '../ProductsTable/ProductsTable';
import ProductViewModal from '../ProductViewModal';
import { icons } from "../../../Utilities/Icons"

const BlankStock = () => {

    const [openViewProductModal, setOpenViewProductModal] = useState({});
    const [openEditProductModal, setOpenEditProductModal] = useState({});
    const [openDeleteProductModal, setDeleteEditProductModal] = useState({});
    return (
        <div className='menu-container px-7 w-full bg-white'>
            <h2 className='text-2xl font-bold py-3 border-b border-gray'>Blank Stock</h2>

            <div className="flex justify-between my-5">
                <div className="grid grid-flow-col items-center bg-base-200 py-1 px-2 w-fit rounded-lg text-lg">
                    <icons.AiOutlineSearch className='text-accent-content' />
                    <input type="text" placeholder='Search' className='bg-base-200 outline-none pl-2' />
                </div>

                <div>
                    <select name="dealer" id="dealer" className='p-1 rounded-lg mr-3 bg-black-light-bg'>
                        <option value="">Dealer</option>
                        <option value="malai">Malai</option>
                    </select>
                    <select name="sort" id="sort" className='p-1 rounded-lg bg-black-light-bg'>
                        <option value="a-z">Lower to higher price</option>
                        <option value="z-a">Higher to lower price</option>
                    </select>
                </div>
            </div>

            <ProductsTable setModals={{ setOpenViewProductModal: setOpenViewProductModal, setOpenEditProductModal: setOpenEditProductModal, setDeleteEditProductModal: setDeleteEditProductModal }} products={{}} />


            {openViewProductModal && <ProductViewModal product={openViewProductModal} />}

            {openEditProductModal && <ProductEditModal product={openEditProductModal} />}

            {openDeleteProductModal && <ProductDeleteModal product={openDeleteProductModal} />}
        </div>
    );
};

export default BlankStock;
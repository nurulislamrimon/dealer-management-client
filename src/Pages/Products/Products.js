import React, { useState } from 'react';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ProductDeleteModal from './ProductDeleteModal';
import ProductEditModal from './ProductEditModal/ProductEditModal';
import ProductsTable from './ProductsTable/ProductsTable';
import ProductsTopbar from './ProductsTopbar';
import ProductViewModal from './ProductViewModal';

const Products = () => {
    const [openViewProductModal, setOpenViewProductModal] = useState({});
    const [openEditProductModal, setOpenEditProductModal] = useState({});
    const [openDeleteProductModal, setDeleteProductModal] = useState({});

    return (
        <div className='w-full p-5 bg-white text-black'>
            <ProductsTopbar />
            <div className="flex justify-between items-center my-2">
                <h2 className='text-2xl font-semibold my-3'>All Products</h2>
                <div>
                    <select name="dealer" id="dealer" className='p-1 rounded-lg mr-3 bg-black-light-bg'>
                        <option value="" disabled>Dealer</option>
                        <option value="malai">Malai</option>
                    </select>
                    <select name="category" id="category" className='p-1 rounded-lg bg-black-light-bg'>
                        <option value="" disabled>Category</option>
                        <option value="biscuit">Biscuit</option>
                    </select>
                </div>
            </div>

            <ProductsTable setModals={{ setOpenViewProductModal: setOpenViewProductModal, setOpenEditProductModal: setOpenEditProductModal, setDeleteProductModal: setDeleteProductModal }} />

            <AddNewProductModal />

            {openViewProductModal && <ProductViewModal product={openViewProductModal} />}

            {openEditProductModal && <ProductEditModal product={openEditProductModal} />}

            {openDeleteProductModal && <ProductDeleteModal product={openDeleteProductModal} />}
        </div>
    );
};

export default Products;
import React from 'react';
import ProductsTable from './ProductsTable/ProductsTable';
import ProductsTopbar from './ProductsTopbar';

const Products = () => {
    return (
        <div className='menu-container py-5 px-10'>
            <ProductsTopbar />
            <div className="flex justify-between items-center my-2">
                <h2 className='text-2xl font-semibold my-3 text-base-300'>All Products</h2>
                <div>
                    <select name="dealer" id="dealer" className='p-1 rounded-lg mr-3'>
                        <option value="" selected disabled>Dealer</option>
                        <option value="malai">Malai</option>
                    </select>
                    <select name="category" id="category" className='p-1 rounded-lg'>
                        <option value="" selected disabled>Category</option>
                        <option value="biscuit">Biscuit</option>
                    </select>
                </div>
            </div>
            <ProductsTable />
        </div>
    );
};

export default Products;
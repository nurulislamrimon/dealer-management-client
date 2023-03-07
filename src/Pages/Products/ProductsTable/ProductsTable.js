import React from 'react';
import ProductsTableRow from './ProductsTableRow';

const ProductsTable = ({ products, setModals }) => {
    return (
        <div className="h-[calc(100vh-140px)] relative overflow-auto">
            <table className="w-full text-center">
                {/* head */}
                <thead className='sticky top-0 z-10 bg-black-light-bg'>
                    <tr>
                        <th className='py-3'>Image</th>
                        <th className='py-3'>Name</th>
                        <th className='py-3'>Warehouse</th>
                        <th className='py-3'>Quantity</th>
                        <th className='py-3'>Cost</th>
                        <th className='py-3'>Selling Price</th>
                        <th className='py-3'>Dealer</th>
                        <th className='py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                    <ProductsTableRow setModals={setModals} />
                </tbody>

            </table>
        </div>
    );
};

export default ProductsTable;
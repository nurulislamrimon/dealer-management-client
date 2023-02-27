import React from 'react';
import ProductsTableRow from './ProductsTableRow';

const ProductsTable = ({ setModals }) => {
    return (
        <div className="h-[calc(100vh-130px)] relative overflow-auto">
            <table className="table table-zebra w-full text-center text-base-300">
                {/* head */}
                <thead className='sticky top-0 z-10'>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Warehouse</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Selling Price</th>
                        <th>Dealer</th>
                        <th>Actions</th>
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
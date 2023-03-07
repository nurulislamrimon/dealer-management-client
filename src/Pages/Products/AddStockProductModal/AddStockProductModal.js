import React from 'react';
import AddStockProductModalForm from './AddStockProductModalForm';

const AddStockProductModal = ({product}) => {
    return (
        <div>
            <input type="checkbox" id="add-stock-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative min-w-fit m-5">
                        <label htmlFor="add-stock-product-modal" className="btn btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
                        <div className='w-full flex items-center space-x-10 p-7 border-b border-gray'>
                            <img src="https://www.atablefullofjoy.com/wp-content/uploads/2022/02/how-to-toast-bread-in-the-oven-featured.jpg" height={100} width={100} alt="" />
                            <div>
                                <div className="flex space-x-2">
                                <h2 className='text-xl font-semibold'>Malai Toast </h2>
                                <span className='text-lg font-normal text-black-light'>#TO5456</span>
                                </div>
                                <div className="flex space-x-2">
                                <p className='font-normal text-black-light'>Available Product: </p>
                                <span className='text-black'>154</span>
                                </div>
                            </div>
                        </div>
                        <AddStockProductModalForm/>
                </div>
            </div>
        </div>
    );
};

export default AddStockProductModal;
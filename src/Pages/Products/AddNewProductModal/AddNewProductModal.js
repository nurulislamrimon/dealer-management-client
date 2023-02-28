import React from 'react';
import { icons } from '../../../Utilities/Icons';
import AddNewProductForm from './AddNewProductForm';

const AddNewProductModal = () => {


    return (
        <div>
            <input type="checkbox" id="product-add-new-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative min-w-fit">
                    <div className="text-lg font-bold flex items-cente">
                        <label className='btn btn-ghost btn-sm' htmlFor="product-add-new-modal" ><icons.BsArrowLeft className='text-2xl' /></label>
                        <h2 className='ml-5'>Add New Product</h2>
                    </div>

                    <AddNewProductForm />

                </div>
            </div>
        </div>
    );
};

export default AddNewProductModal;
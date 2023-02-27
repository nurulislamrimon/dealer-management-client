import React from 'react';
import { icons } from '../../../Utilities/Icons';
import EditForm from './EditForm';

const ProductEditModal = ({ product }) => {


    return (
        <div>
            <input type="checkbox" id="product-edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative min-w-fit">
                    <div className="text-lg font-bold flex items-cente">
                        <label className='btn btn-ghost btn-sm' htmlFor="product-edit-modal" ><icons.BsArrowLeft className='text-2xl' /></label>
                        <h2 className='ml-5'>Edit product</h2>
                    </div>

                    <EditForm />

                </div>
            </div>
        </div>
    );
};

export default ProductEditModal;
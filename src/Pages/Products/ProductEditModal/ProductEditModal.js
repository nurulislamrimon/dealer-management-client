import React from 'react';
import { icons } from '../../../Utilities/Icons';
import ModalCloseButton from '../../../Utilities/ModalCloseButton';
import EditForm from './EditForm';

const ProductEditModal = ({ product }) => {


    return (
        <div>
            <input type="checkbox" id="product-edit-modal" className="modal-toggle" />
            <div className="modal backdrop-blur-sm">
                <div className="modal-box relative min-w-fit">
                    <div className="text-lg font-bold flex items-cente">

                        <ModalCloseButton htmlFor="product-edit-modal" />

                        <h2 className='ml-5'>Edit product</h2>
                    </div>

                    <EditForm />

                </div>
            </div>
        </div>
    );
};

export default ProductEditModal;
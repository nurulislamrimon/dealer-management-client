import React from 'react';
import ModalCloseButton from '../../Utilities/ModalCloseButton';

const AddNewCustomerModal = () => {
    return (
        <div>
        <input type="checkbox" id="add-new-customer-modal" className="modal-toggle" />
        <div className="modal backdrop-blur-sm">
            <div className="modal-box relative min-w-fit">
                <div className="text-lg font-bold flex items-cente">
                    <ModalCloseButton htmlFor="add-new-customer-modal" />
                    <h2 className='ml-5'>Add New Product</h2>
                </div>

            </div>
        </div>
    </div>
    );
};

export default AddNewCustomerModal;
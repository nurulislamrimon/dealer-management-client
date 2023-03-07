import React from 'react';
import { icons } from "../../Utilities/Icons"
import ModalCloseButton from '../../Utilities/ModalCloseButton';

const ProductDeleteModal = ({ product }) => {

    return (
        <div>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <ModalCloseButton htmlFor="product-delete-modal" />
                    <h3 className='text-2xl font-semibold'>Do you want to delete?</h3>
                    <div className="flex items-center justify-between">
                        <div className='w-1/2'>
                            <img src="https://createbakemake.com/wp-content/uploads/2021/03/Condensed-Milk-Cookies-3.jpg" alt="" className='w-full' />
                        </div>
                        <div>
                            <p> Product id: #T94758</p>
                            <p> Name: Malai Biscuit</p>
                            <p> Dealer: Malai</p>
                            <p> Price: 45</p>
                            <p> Selling Price: 55</p>
                            <p> Stock item: 0</p>
                            <p> Stock Alert: 30</p>
                        </div>
                    </div>
                    <div className="flex mt-5 ml-auto w-fit">
                        <label htmlFor="product-delete-modal" className='btn btn-xs btn-primary'>
                            No
                        </label>
                        <label htmlFor="product-delete-modal" className='btn btn-xs btn-error mx-5'>
                            Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeleteModal;
import React from 'react';
import { icons } from '../../Utilities/Icons'
import ModalCloseButton from '../../Utilities/ModalCloseButton';
import AddStockProductModal from './AddStockProductModal/AddStockProductModal';
import ProductHistoryModal from './ProductHistoryModal';

const ProductViewModal = ({ product }) => {

    return (
        <div>


            <input type="checkbox" id="product-view-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative min-w-fit bg-white">
                    <AddStockProductModal />
                    <ProductHistoryModal />

                    <ModalCloseButton htmlFor="product-view-modal" />

                    <h3 className="text-lg font-bold">Malai Toast</h3>

                    <div className="grid grid-cols-4 gap-5 whitespace-nowrap p-5 pb-0 justify-center">
                        <div className='w-44'>
                            <img src="https://www.atablefullofjoy.com/wp-content/uploads/2022/02/how-to-toast-bread-in-the-oven-featured.jpg" alt="" className=' w-full' />
                        </div>
                        <div className='col-span-2 grid grid-cols-2 gap-5'>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="code">SKU</label>
                                <p>T083678</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="product-cost">Product Cost</label>
                                <p>৳ 60</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="category">Category</label>
                                <p>Biscuite</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="stock-products">Stock Products</label>
                                <p>120 pcs</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="brand">Brand</label>
                                <p>Malai</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-black-light text-sm" htmlFor="stock-alert">Stock Alert</label>
                                <p>30 pcs</p>
                            </div>
                        </div>
                        <div className="bg-black-light-bg p-3 h-fit w-fit text-center ml-auto">
                            <p className='text-black-light'>Selling Price</p>
                            <p>৳ 55</p>
                        </div>
                    </div>
                    <p className='p-5'>{50} times updated. <label htmlFor='product-history-modal' className='text-primary cursor-pointer hover:underline'>See list</label></p>
                    <div className='w-full border-t border-black-light p-5 flex items-center'>
                        <div className='w-1/2'>
                            <h6 className='text-black-light'>Warehouse</h6>

                            <p className='flex justify-between'><span>Home Stock</span> <span>120</span></p>
                            <p className='flex justify-between'><span>Home Stock</span> <span>120</span></p>
                        </div>
                        <label htmlFor='add-stock-product-modal'
                            className='flex btn btn-sm bg-black-light-bg text-black border-none
                          w-fit ml-auto hover:text-white hover:bg-primary'
                        >
                            <icons.AiOutlinePlus /> Add Product Stock
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
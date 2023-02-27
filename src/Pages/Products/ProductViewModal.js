import React from 'react';

const ProductViewModal = ({ product }) => {

    return (
        <div>

            <input type="checkbox" id="product-view-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative min-w-fit bg-base-200">
                    <label htmlFor="product-view-modal" className="btn btn-sm text-base-200 btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">Malai Toast</h3>

                    <div className="grid grid-cols-4 gap-5 whitespace-nowrap p-5 pb-0 justify-center">
                        <div className='w-44'>
                            <img src="https://www.atablefullofjoy.com/wp-content/uploads/2022/02/how-to-toast-bread-in-the-oven-featured.jpg" alt="" className=' w-full' />
                        </div>
                        <div className='col-span-2 grid grid-cols-2 gap-5'>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="code">SKU</label>
                                <p>T083678</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="product-cost">Product Cost</label>
                                <p>৳ 60</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="category">Category</label>
                                <p>Biscuite</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="stock-products">Stock Products</label>
                                <p>120 pcs</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="brand">Brand</label>
                                <p>Malai</p>
                            </div>
                            <div className="pl-7">
                                <label className="text-base-300 text-sm" htmlFor="stock-alert">Stock Alert</label>
                                <p>30 pcs</p>
                            </div>
                        </div>
                        <div className="bg-accent-content p-3 h-fit w-fit text-center ml-auto">
                            <p className='text-base-300'>Selling Price</p>
                            <p>৳ 55</p>
                        </div>
                    </div>
                    <p className='p-5'>{50} times updated. <span className='text-primary cursor-pointer'>See list</span></p>
                    <div className='border-t border-base-content p-5'>
                        <h6 className='text-base-300'>Warehouse</h6>

                        <p className='w-1/2 flex justify-between'><span>Home Stock</span> <span>120</span></p>
                        <p className='w-1/2 flex justify-between'><span>Home Stock</span> <span>120</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
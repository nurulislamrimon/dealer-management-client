import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NumberInputWithValidation from '../../../Utilities/NumberInputWithValidation';

const EditForm = () => {
    const [url, setUrl] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }
    const imgInp = evt => {
        const url = URL.createObjectURL(evt.target.files[0]);
        url && setUrl(url);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center pl-5">
                <div>
                    <div className="grid grid-cols-2 gap-5">

                        {/* name input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text ">Name</span>
                            </label>
                            <input {...register("name", { required: true })} className="modal-input" />
                            {errors.name && <label>
                                <span className="label-text-alt text-error ">This input is required</span>
                            </label>}
                        </div>
                        {/* SKU input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">SKU</span>
                            </label>
                            <input {...register("sku", { required: true })} className="modal-input" value="T94729" />
                            {(errors.sku && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        {/* Category input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category", { required: true })} className="modal-input" >
                                <option value="biscuite">Biscuite</option>
                                <option value="bread">Bread</option>
                            </select>
                            {(errors.category && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        {/* Brand input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Brand (Dealer)</span>
                            </label>
                            <select {...register("brand", { required: true })} className="modal-input" >
                                <option value="malai">Malai</option>
                                <option value="pran">Pran</option>
                            </select>
                            {(errors.brand && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        {/* Product Cost input */}

                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Product Cost</span>
                            </label>
                            <input {...register("productCost", { required: true })} className="modal-input" value="48" />
                            {(errors.productCost && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        

                        {/* Selling Price input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input {...register("sellingPrice", { required: true })} className="modal-input" value="55" />
                            {(errors.sellingPrice && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        {/* Stock Product input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Stock Product</span>
                            </label>
                            <input {...register("stockProduct", { required: true })} className="modal-input" value="120" />
                            {(errors.stockProduct && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
                        {/* Stock Alert input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Stock Alert</span>
                            </label>
                            <input {...register("stockAlert", { required: true })} className="modal-input" value="30" />
                            {(errors.stockAlert && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>

                        {/* warehouse input */}
                        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">Warehouse</span>
                            </label>
                            <select {...register("warehouse", { required: true })} className="modal-input" >
                                <option value="house stock">House Stock</option>
                                <option value="madina store">Madina Store</option>
                            </select>
                            {(errors.warehouse && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>

                    </div>
                    {/* description input */}
                    <div className="form-control w-full mt-3">
                        <label>
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea text-sm border border-accent-content w-full" value="This product has more than 6 months expire date" ></textarea>
                        {(errors.description && <label>
                            <span className="label-text-alt text-error">This input is required</span>
                        </label>)}
                    </div>
                </div>
                {/* Photo input */}
                <div className="form-control w-full max-w-xs p-10">
                    <p className="label-text">Product Image</p>
                    <div className="border border-dashed border-base-300 rounded-3xl w-fit h-fit">
                        <label htmlFor="photo" className='w-44 h-52 block p-5 pb-0 '>
                            {url ? <img src={url} alt="" className='w-full h-full object-cover' /> :
                                <img className='w-full h-full object-cover' src="https://createbakemake.com/wp-content/uploads/2021/03/Condensed-Milk-Cookies-3.jpg" alt="" />}
                        </label>
                        <input id='photo' {...register("photo", { required: true })} type="file" className="file-input file-input-ghost max-w-xs opacity-0 h-0 w-0" onChange={imgInp} />
                        {(errors.photo && <label>
                            <span className="label-text-alt text-error">This input is required</span>
                        </label>)}
                    </div>
                </div>
            </div>


            <label htmlFor='product-edit-modal' className='btn btn-sm btn-primary mt-3 block w-fit py-2 mx-auto'>Submit Edited item</label>
        </form>
    );
};

export default EditForm;
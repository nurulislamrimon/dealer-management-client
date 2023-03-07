import React from 'react';
import { useForm } from 'react-hook-form';
import ImageInput from '../../../Utilities/ImageInput';
import NumberInputWithValidation from '../../../Utilities/NumberInputWithValidation';
import OptionTypeInput from '../../../Utilities/OptionTypeInput';
import TextInput from '../../../Utilities/TextInput';

const AddNewProductForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center pl-5">
                <div>
                    <div className="grid grid-cols-2 gap-5">

                        <TextInput register={register} errors={errors} regName="name" name="Name"/>

                        <TextInput register={register} errors={errors} regName="sku" name="SKU"/>

                        <OptionTypeInput register={register} errors={errors} regName="category" name="Category" options={["Biscuite","Bread"]}/>

                        <OptionTypeInput register={register} errors={errors} regName="brand" name="Brand (Dealer)" options={["Malai","Pran"]}/>

                        <NumberInputWithValidation register={register} errors={errors} regName="productCost" name="Product Cost"/>

                        <NumberInputWithValidation register={register} errors={errors} regName="sellingPrice" name="Selling Price"/>

                        <NumberInputWithValidation register={register} errors={errors} regName="stockProduct" name="Stock Product"/>

                        <NumberInputWithValidation register={register} errors={errors} regName="stockAlert" name="Stock Alert"/>

                        <OptionTypeInput register={register} errors={errors} regName="warehouse" name="Warehouse" options={["House Stock","Madina Store"]}/>
                       

                    </div>
                    {/* description input */}
                    <div className="form-control w-full mt-3">
                        <label>
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea text-sm border border-maya-blue w-full " ></textarea>
                        {(errors.description && <label>
                            <span className="label-text-alt text-error">This input is required</span>
                        </label>)}
                    </div>
                </div>

            <ImageInput register={register} errors={errors} regName="productPhoto" name="Product Photo"/>

            </div>


            <button htmlFor='product-add-new-modal' className='btn btn-sm btn-primary mt-3 block w-fit py-2 mx-auto'>Submit New Item</button>
        </form>
    );
};

export default AddNewProductForm;
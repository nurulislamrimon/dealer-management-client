import React from 'react';
import { useForm } from 'react-hook-form';
import NumberInputWithValidation from '../../../Utilities/NumberInputWithValidation';
import OptionTypeInput from '../../../Utilities/OptionTypeInput';

const AddStockProductModalForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

const onsubmit=(e)=>{
    console.log(e);
    
}

    return (
        <form onSubmit={(handleSubmit(onsubmit))} className='w-full mx-auto'>
            <NumberInputWithValidation register={register} errors={errors} name="Stock Product" regName="stockProduct"  customClass="modal-input text-lg h-10"/>
<OptionTypeInput register={register} errors={errors} name="Warehouse" regName="warehouse" options={["House Stock","Madina Store"]} customClass="modal-input text-lg h-10"/>
<button className='btn w-full mt-5 h-10'>Submit</button>
        </form>
    );
};

export default AddStockProductModalForm;
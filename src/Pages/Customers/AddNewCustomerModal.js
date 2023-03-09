import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageInput from '../../Utilities/ImageInput';
import ModalCloseButton from '../../Utilities/ModalCloseButton';
import OptionTypeInput from '../../Utilities/OptionTypeInput';
import TextInput from '../../Utilities/TextInput';
import { useRandomNumberUsingDate } from '../../Utilities/useRandomNumberUsingDate';

const AddNewCustomerModal = () => {
    const randomNumber = useRandomNumberUsingDate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [autoId, setAutoId] = useState("");

    const handleChange = () => {
        setAutoId(randomNumber);
    }

    const onSubmit = (e) => {
        console.log(e);
    }
    return (
        <div>
            <input type="checkbox" id="add-new-customer-modal" className="modal-toggle" />
            <div className="modal backdrop-blur-sm">
                <div className="modal-box relative min-w-fit">
                    <ModalCloseButton htmlFor="add-new-customer-modal" />
                    <h2 className=' text-lg font-bold'>Add New Customer</h2>
                    <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
                        <div className="flex">
                            <div>
                                <div className="grid grid-cols-2 gap-5">
                                    {/* store name input*/}
                                    <TextInput name="Store Name" regName="storeName" register={register} errors={errors} isMandatorySymbol={true} placeholder="Type store name" />


                                    {/* customer id input */}
                                    <TextInput name="Customer ID" regName="customerId" register={register} errors={errors} isMandatorySymbol={true} placeholder="Will auto generate" isDisable={true} value={autoId} isRequired={false} />

                                    {/* customer name */}
                                    <TextInput name="Customer Name" regName="customerName" register={register} errors={errors} placeholder="Type customer name" isRequired={false} />
                                    {/* sales line */}
                                    <OptionTypeInput name="Sales Line" regName="salesLine" register={register} errors={errors} isMandatorySymbol={true} options={["LN1", "LN2", "LN3", "LN4", "LN5", "LN6"]} />
                                    {/* Bazar name */}
                                    <OptionTypeInput name="Bazar Name" regName="bazarName" register={register} errors={errors} isMandatorySymbol={true} options={["Add Location"]} />
                                    {/* Store category */}
                                    <OptionTypeInput name="Store Category" regName="storeCategory" register={register} errors={errors} options={["Select store type"]} />
                                </div>
                                <hr className='border-black-light-bg my-5' />

                                <h3 className='text-md font-medium'>Contact Information</h3>
                                <div className="grid grid-cols-2 gap-5">
                                    {/* contact of customer== name*/}
                                    <TextInput name="Name" regName="name" register={register} errors={errors} placeholder="Type Name" isRequired={false} />
                                    {/* phone number */}
                                    <TextInput name="Phone Number" regName="phoneNumber" register={register} errors={errors} placeholder="Type Phone Number" isRequired={false} />
                                </div>
                            </div>
                            <ImageInput name="Store/Customer Image" regName="storeImage" register={register} errors={errors} isRequired={false} />
                        </div>

                        <button className='btn btn-sm w-1/2 block mx-auto mt-10'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewCustomerModal;
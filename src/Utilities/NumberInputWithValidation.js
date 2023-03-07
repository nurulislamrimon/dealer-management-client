import React from 'react';
import { useForm } from 'react-hook-form';

const NumberInputWithValidation = ({register,errors,name,regName}) => {    

    return (
        <div>
            {/* Product Cost input */}
            <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">{name}</span>
                            </label>
                            <input {...register(regName)} className="modal-input"/>
                            {(errors?.productCost && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>)}
                        </div>
        </div>
    );
};

export default NumberInputWithValidation;
import React from 'react';

const TextInput = ({ register, errors, name, regName, isRequired = true, isMandatorySymbol = false, customClass = "modal-input", placeholder, isDisable, value }) => {
    return (
        <div className="form-control w-full">
            <label>
                <span className="label-text">{name} {isMandatorySymbol && <span className='text-error'>*</span>} </span>
            </label>
            <input {...register(regName, { required: isRequired, pattern: /[a-z]/ })} placeholder={placeholder} className={`${customClass} ${isDisable && "cursor-not-allowed"}`} readOnly={isDisable} value={value} />
            {errors?.[regName] && <label>
                <span className="label-text-alt text-error">This input is required</span>
            </label>}
        </div>
    );
};

export default TextInput;
import React from 'react';

const OptionTypeInput = ({register,errors,name,regName,options}) => {
    return (
        <div className="form-control w-full max-w-xs">
        <label>
            <span className="label-text">{name}</span>
        </label>
        <select {...register(regName, { required: true })} className="modal-input" >
            {options?.map(option=><option value={option.toLowerCase()} defaultValue={option[0]}>{option}</option>)}
        </select>
        {(errors?.[regName] && <label>
            <span className="label-text-alt text-error">This input is required</span>
        </label>)}
    </div>
    );
};

export default OptionTypeInput;
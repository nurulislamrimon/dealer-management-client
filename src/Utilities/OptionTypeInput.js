import React from 'react';

const OptionTypeInput = ({register,errors,name,regName,options,customClass="modal-input",isMandatorySymbol=false}) => {
    return (
        <div className="form-control w-full">
        <label>
            <span className="label-text">{name}{isMandatorySymbol&&<span className='text-error'>*</span>}</span>
        </label>
        <select {...register(regName, { required: true })} className={customClass} >
            {options?.map(option=><option key={option} value={option.toLowerCase()} defaultValue={option[0]}>{option}</option>)}
        </select>
        {(errors?.[regName] && <label>
            <span className="label-text-alt text-error">This input is required</span>
        </label>)}
    </div>
    );
};

export default OptionTypeInput;
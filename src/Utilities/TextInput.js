import React from 'react';

const TextInput = ({register,errors,name,regName}) => {
    return (
        <div className="form-control w-full max-w-xs">
                            <label>
                                <span className="label-text">{name}</span>
                            </label>
                            <input {...register(regName,{ required:true,pattern:/[a-z]/})} className="modal-input"/>
                            {errors?.[regName] && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>}
                        </div>
    );
};

export default TextInput;
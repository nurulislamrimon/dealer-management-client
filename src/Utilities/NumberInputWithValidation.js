
const NumberInputWithValidation = ({register,errors,name,regName,customClass="modal-input"}) => {

    return (
            <div className="form-control w-full">
                            <label>
                                <span className="label-text">{name}</span>
                            </label>
                            <input {...register(regName,{ required:true,pattern:/[0-9]/ })} className={customClass}/>
                            {errors?.[regName] && <label>
                                <span className="label-text-alt text-error">This input is required</span>
                            </label>}
                        </div>
    );
};

export default NumberInputWithValidation;
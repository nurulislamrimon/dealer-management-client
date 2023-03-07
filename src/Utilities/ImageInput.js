import React, { useState } from 'react';
import uploadPlaceholder from "../Images/upload-placeholder.png"

const ImageInput = ({register,errors,name,regName}) => {
    
    const [url, setUrl] = useState(uploadPlaceholder);
    
    const imgInp = evt => {
        const url = URL.createObjectURL(evt.target.files[0]);
        url && setUrl(url);

    }
    return (
        <div className="form-control w-full max-w-xs p-10">
        <p className="label-text">{name}</p>
        <div className="border border-dashed border-base-300 rounded-3xl w-fit h-fit">
            <label htmlFor="photo" className='w-44 h-44 block p-5 pb-0 '>
                <img className='w-full h-full object-cover' src={url} alt="" />
            </label>
            <input id='photo' {...register(regName, { required: true })} type="file" className="file-input file-input-ghost max-w-xs opacity-0 h-0 w-0" onChange={imgInp} />
            {(errors?.[regName] && <label>
                <span className="label-text-alt text-error">This input is required</span>
            </label>)}
        </div>
    </div>
    );
};

export default ImageInput;
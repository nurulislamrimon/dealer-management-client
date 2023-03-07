import React from 'react';

const ModalCloseButton = ({ htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="btn btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
    );
};

export default ModalCloseButton;
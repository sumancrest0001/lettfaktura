import React from "react";

const InputLabel = ({ children, onClick, ...property }) => (
    <div className={`Body-Default  ${property.className} capitalize text-sm font-medium text-gray-900`} onClick={onClick}>
        {children}{property.isRequired && <span className="required">*</span>}
    </div>
);

export default InputLabel;
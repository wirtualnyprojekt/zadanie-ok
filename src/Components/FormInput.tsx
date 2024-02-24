import React from "react";

export const FormInput = (
    { htmlFor, type, placeHolder, label, id, name, updateFormState } : 
    { htmlFor: string, type: string, placeHolder: string, label: string, id: string, name: string, updateFormState: any }) => {
    
    return (
        <div className="mb-3">
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeHolder}
          name={name}
          onChange={updateFormState}
        />
      </div>
    )
}

export default FormInput;
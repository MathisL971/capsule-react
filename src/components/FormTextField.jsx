import React from 'react'
import "../index.css";

const FormTextField = ({type, label, value, handleChange }) => {
  return (
    <div className="flex flex-col gap-1">
        <label className="text-emerald-100 font-bold">
            {label}
        </label>
        <input
            type={type}
            value={value}
            onChange={({ target }) => handleChange(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
        ></input>
    </div>
  )
}

export default FormTextField
import React from 'react'

const FormSelectField = ({ label, value, name, handleChange, options }) => {
  return (
    <div className="flex flex-col gap-1">
        <label className="text-emerald-100 font-bold">{label}</label>
        <select
            value={value}
            name={name}
            onChange={({ target }) => handleChange(target.value)}
            className="rounded-sm p-1 border-2 border-emerald-800"
        >
            <option value=""></option>
            {options.map((option) => {
                return <option value={option}>{option[0].toUpperCase() + option.substr(1)}</option>
            })}
        </select>
    </div>
  )
}

export default FormSelectField
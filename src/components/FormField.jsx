import React from "react";
import "../index.css";

import { Field, ErrorMessage } from "formik";

const FormField = ({ name, label, type, as, options }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-teal-50 font-bold">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        as={as}
        className="rounded-sm py-0.5 px-1 border-2 border-teal-900"
      >
        {options && (
          <div>
            <option value={""}></option>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </div>
        )}
      </Field>
      <span className="text-sm text-red-700 font-bold">
        {" "}
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default FormField;

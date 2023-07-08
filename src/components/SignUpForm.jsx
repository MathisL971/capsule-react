import React, { useState } from "react";
//import userService from "../services/user";
import "../index.css";
import FormField from "./FormField";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const fields = [
    {
      name: "email",
      type: "email",
      label: "Enter your email",
    },
    {
      name: "firstName",
      type: "text",
      label: "First Name",
    },
    {
      name: "lastName",
      type: "text",
      label: "Last Name",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm password",
    },
    {
      name: "birthDate",
      type: "date",
      label: "Birth Date",
    },
    {
      name: "bio",
      type: "text",
      label: "Bio",
      as: "textarea",
    },
    {
      name: "profilePicture",
      type: "file",
      label: "Profile picture",
    },
    {
      name: "username",
      type: "text",
      label: "Username",
    },
    {
      name: "phoneMobile",
      type: "text",
      label: "Mobile phone number",
    },
    {
      name: "phoneOffice",
      type: "text",
      label: "Office phone number",
    },
    {
      name: "role",
      as: "select",
      label: "Select a role",
      options: ["adolescent", "parent", "professionel"],
    },
  ];

  const [complete, setComplete] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="flex flex-col w-2/4 p-10 bg-teal-400 rounded-md gap-8 border-emerald-900 border-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl text-teal-950 font-extrabold">
            Welcome to Capsule!
          </h1>
          <h4 className="text-2xl text-teal-800 font-bold">
            Let's get you set up with an account.
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {fields.map((field) => {
            return <FormField {...field} />;
          })}
        </div>

        {complete && (
          <button
            type="submit"
            className="rounded-lg bg-teal-900 py-4 text-teal-50 font-extrabold shadow-lg"
          >
            Submit
          </button>
        )}
      </Form>
    </Formik>
  );
};

export default SignUpForm;

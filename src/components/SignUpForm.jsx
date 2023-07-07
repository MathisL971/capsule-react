import React, { useState } from "react";
import userService from "../services/user";
import "../index.css";
import FormTextField from "./FormTextField";
import FormDateField from "./FormDateField";
import FormSelectField from "./FormSelectField";
import Button from "./Button";
import FormFieldContainer from "./FormFieldContainer";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [profession, setProfession] = useState("");

  const [streetOne, setStreetOne] = useState("");
  const [streetTwo, setStreetTwo] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [status, setStatus] = useState("");
  const [activationKey, setActivationKey] = useState("");

  const [bio, setBio] = useState("");
  const [socialId, setSocialId] = useState(null);
  const [phoneOffice, setPhoneOffice] = useState("");
  const [phoneMobile, setPhoneMobile] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    console.log("Handling signup!");

    try {
      const newUser = {
        firstName,
        name: lastName,
        email,
        password,
        role,
        birthDate,
        profession,
        street1: streetOne,
        street2: streetTwo,
        city,
        postcode: postalCode,
        status,
        activationKey,
        bio,
        socid: socialId,
        phoneOffice,
        phoneMobile,
        profilePic,
      };
      console.log(newUser);
      const createdUser = await userService.create(newUser);
      console.log(createdUser);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");
      setBirthDate("");
      setProfession("");
      setStreetOne("");
      setStreetTwo("");
      setCity("");
      setPostalCode("");
      setStatus("");
      setBio("");
      setActivationKey("");
      setSocialId("");
      setPhoneOffice("");
      setPhoneMobile("");
      setProfilePic("");
    } catch (errror) {
      console.log(errror);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col w-3/4 p-10 bg-emerald-500 rounded-md gap-8 border-emerald-900 border-4"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-emerald-950 font-extrabold">Welcome to Capsule!</h1>
        <h4 className="text-2xl text-emerald-800 font-bold">Let's get you set up with an account.</h4>
      </div>
      
      <FormFieldContainer styles={"flex flex-col gap-3"}>
        <FormTextField type={"text"} label={"Enter your first name"} value={firstName} handleChange={setFirstName}></FormTextField>
        <FormTextField type={"text"} label={"Enter your last name"} value={lastName} handleChange={setLastName}></FormTextField>
        <FormDateField type={"text"} label={"Enter your date of birth"} value={birthDate} handleChange={setBirthDate}></FormDateField>
        <FormTextField type={"text"} label={"Enter your email"} value={email} handleChange={setEmail}></FormTextField>
        <FormTextField type={"password"} label={"Enter your password"} value={password} handleChange={setPassword}></FormTextField>
        <FormTextField type={"password"} label={"Confirm your password"} value={confirmPassword} handleChange={setConfirmPassword}></FormTextField>
        <FormSelectField label={"Choose a role"} value={role} name={"roles"} handleChange={setRole} options={["adolescent", "parent", "professionel"]}></FormSelectField>
        <FormSelectField label={"Choose a title"} value={title} name={"titles"} handleChange={setTitle} options={["mr.", "mrs.", "dr.", "jd."]}></FormSelectField>
      </FormFieldContainer>

      <Button type={"submit"} styles={"rounded-lg bg-emerald-100 py-4 text-emerald-800 font-extrabold shadow-lg"} text={"Submit"}></Button>
    </form>
  );
};

export default SignUpForm;

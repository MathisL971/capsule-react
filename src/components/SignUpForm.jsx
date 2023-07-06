import React, { useState } from "react";
import userService from "../services/user";
import "../index.css";

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

  // USE BOOTSTRAP CLASSES FOR FORM
  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col w-3/4 p-10 bg-emerald-500 rounded-md gap-6 border-emerald-900 border-4"
    >
      <div className="flex flex-col text-emerald-950 text-xl font-extrabold">
        <h1>Welcome to Capsule!</h1>
        <h3>Let's get you set up with an account.</h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">
            Enter your first name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">
            Enter your last name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">
            Enter your date of birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={({ target }) => setBirthDate(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">Enter your email</label>
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">
            Enter your password
          </label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">
            Confirm your password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            className="rounded-sm py-0.5 px-1 border-2 border-emerald-800"
          ></input>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">Choose a role</label>
          <select
            value={role}
            name="roles"
            onChange={({ target }) => setRole(target.value)}
            className="rounded-sm p-1 border-2 border-emerald-800"
          >
            <option value="">-- Choose a role --</option>
            <option value="adolescent">Adolescent</option>
            <option value="parent">Parent</option>
            <option value="professionel">Professionnel</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-emerald-100 font-bold">Choose a title</label>
          <select
            value={title}
            name="titles"
            onChange={({ target }) => setTitle(target.value)}
            className="rounded-sm p-1 border-2 border-emerald-800"
          >
            <option value="">-- Choose a title --</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Jd.">Jd.</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-emerald-100 py-4 text-emerald-800 font-extrabold shadow-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;

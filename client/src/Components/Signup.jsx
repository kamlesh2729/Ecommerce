import React, { useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { signup } from "../actions/authaction";

const Signup = ({ handelSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showpassword, setShowPassword] = useState("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordref = useRef(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const spcialchar = new RegExp("(?=.*[!@#$%^&*])");

    if (!name) {
    setMessage("Plaese enter name");
    }

    if (email === '') {
    setMessage("Plaese enter email");
    }

    if (!password) {
      setMessage("Plaese enter password");
    }else if (!lower.test(password)) {
      setMessage("At least one lower case latter include");
    } else if (!upper.test(password)) {
      setMessage("At least one upper case latter include");
    } else if (!number.test(password)) {
      setMessage("At least one number include");
    } else if (!spcialchar.test(password)) {
      setMessage("At least one spcial character include");
    } else {
    dispatch(signup({ name, email, password }, navigate));
    }
  };

  const PasswordShowHide = () => {
    setShowPassword(!showpassword);
  };

  return (
    <section className="w-[60vw] h-[100vh] flex flex-col justify-center items-center mx-auto py-4 signup-bg">
      <h1 className=" uppercase font-semibold text-h4 mx-auto mt-4 absolute z-3 top-0">
        Sign Up here
      </h1>
      <form
        className="w-3/4 flex flex-col items-center absolute z-3 "
        onSubmit={handelSubmit}
      >
        <div className="w-full Lp-l:w-3/4 relative flex flex-col items-start justify-between gap-4">
          <label htmlFor="Fname" className="text-p font-semibold mb-4">
            First Name <b className=" text-blue-500">*</b>
          </label>
          <input
            className="w-full bg-slate-200 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="text"
            name="name"
            id="Fname"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p className=" absolute bottom-2 text-xl">{message}</p>
        </div>

        <div className="w-full Lp-l:w-3/4 relative flex flex-col items-start justify-between gap-4">
          <label htmlFor="Email" className="text-p font-semibold mb-4">
            Email<b className=" text-blue-500">*</b>
          </label>
          <input
            className="w-full bg-slate-200 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="email"
            name="email"
            id="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <p className=" absolute bottom-2 text-xl">{message}</p>
        </div>

        <div className="w-full Lp-l:w-3/4 relative flex flex-col items-start justify-between gap-4">
          <label htmlFor="Password" className="text-p font-semibold mb-4">
            Passaword<b className=" text-blue-500">*</b>
          </label>
          <input
            className="w-full bg-slate-200 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type={showpassword ? "password" : "text"}
            name="password"
            id="Password"
            ref={passwordref}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className=" absolute right-12 top-24 text-bt cursor-pointer">
            {showpassword ? (
              <FaEye onClick={PasswordShowHide} />
            ) : (
              <FaEyeSlash onClick={PasswordShowHide} />
            )}
          </span>
          <p className=" absolute bottom-2 text-xl">{message}</p>
        </div>

        <button
          className="w-full Lp-l:w-3/6 flex justify-center items-center py-7 px-12 mt-4 rounded-md text-black text-bt font-semibold border-[1px] border-black cursor-pointer hover:shadow-3xr hover:bg-black hover:text-white"
          type="submit"
        >
          Sign Up
        </button>
        <p
          onClick={handelSwitch}
          className="mt-6 text-blue-500 text-2xl font-semibold cursor-pointer"
        >
          Alreday have an account ?
        </p>
      </form>
    </section>
  );
};

export default Signup;

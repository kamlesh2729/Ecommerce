import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { login } from "../actions/authaction";

const Login = ({ handelSwitch}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const[visability, setVisability] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter email")
    }
    if (!password) {
      setMessage("Please enter password")
    }
    dispatch(login({ email, password }, navigate));
  };

  const PasswordShowHide = () => {
    setVisability(!visability);
  }

  return (
    <section className=" w-[60vw] h-[80vh] flex flex-col justify-center items-center mx-auto py-8 login-bg relative z-3">
      <h1 className=" uppercase font-semibold text-h4 mx-auto mt-4 absolute z-3 top-0">
        Log In here
      </h1>
      <form
        className="w-3/4 h-[50vh] flex flex-col items-center absolute z-3"
        onSubmit={handelSubmit}
      >
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
          />
          <p className=" absolute bottom-2 text-xl">{message}</p>
        </div>

        <div className="w-full Lp-l:w-3/4 relative flex flex-col items-start justify-between gap-4">
          <label htmlFor="msg" className="text-p font-semibold mb-4">
            Passaword<b className=" text-blue-500">*</b>
          </label>
          <input
            className="w-full bg-slate-200 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type={visability ? "text" : "password"}
            id="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span className=" absolute right-12 top-24 text-bt cursor-pointer">
            {visability ? (
              <FaEyeSlash onClick={PasswordShowHide} />
            ) : (
              <FaEye onClick={PasswordShowHide} />
            )}
          </span>
          <p className=" absolute bottom-2 text-xl">{message}</p>
        </div>

        <button
          className="w-full Lp-l:w-3/6 flex justify-center items-center py-7 px-12 mt-4 rounded-md transition-all border border-solid border-black text-black text-bt font-semibold cursor-pointer hover:shadow-3xr hover:bg-black hover:text-white"
          type="submit"
        >
          Log In
        </button>
        <p
          onClick={handelSwitch}
          className="mt-6 text-blue-500 text-2xl font-semibold cursor-pointer"
        >
          Don't have an account ?
        </p>
      </form>
    </section>
  );
};

export default Login;

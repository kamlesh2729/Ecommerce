import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";

import { login } from "../actions/authaction";

const Login = ({ handelSwitch}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
    }
    dispatch(login({ email, password }, navigate));
  };

  return (
    <section className=" w-[80vw] h-[70vh] flex flex-col justify-center items-center mx-auto login-bg relative z-3">
      <h1 className=" uppercase font-semibold text-h4 mx-auto absolute z-3 top-0">
        Log In here
      </h1>
      <form
        className="w-3/4 h-[50vh] flex flex-col items-center absolute z-3"
        onSubmit={handelSubmit}
      >
        <div className="w-full Lp-l:w-3/4 flex flex-col Lp-l:flex-row items-center justify-between gap-4">
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
        </div>

        <div className="w-full Lp-l:w-3/4 flex flex-col Lp-l:flex-row items-center justify-between gap-4">
          <label htmlFor="msg" className="text-p font-semibold mb-4">
            Passaword<b className=" text-blue-500">*</b>
          </label>
          <input
            className="w-full bg-slate-200 py-5 px-7 text-p border outline-none mb-9 focus:border-b-2 focus:border-t-0 border-r-0 border-l-0 focus:border-text-orange"
            type="password"
            name="password"
            id="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          className="w-full Lp-l:w-3/6 bg-blue-500 flex justify-center items-center py-7 px-12 rounded-md transition-all border border-solid border-white text-white text-bt font-semibold cursor-pointer hover:shadow-3xr hover:bg-text-orange"
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

import React, { useState } from "react";

import SignUp from "../Components/Signup";
import LogIn from "../Components/Login";

const Auth = () => {
  const [issignup, setIssignUp] = useState(false);

  const handelSwitch = () => {
    setIssignUp(!issignup);
  };

  return (
    <section className="w-full Lp-l:max-w-8lx h-auto mx-auto">
      <div className=" transition-all duration-300 ease-in-out">
        {issignup ? <SignUp handelSwitch={handelSwitch} /> : <LogIn handelSwitch={handelSwitch} />}
      </div>
    </section>
  );
};

export default Auth;

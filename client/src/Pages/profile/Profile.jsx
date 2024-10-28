import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import gsap from "gsap"
import { useGSAP } from "@gsap/react";


const Profile = () => {

    const User = useSelector((state) => state.currentUser);
    useGSAP(() => {
      gsap.fromTo("#profiletitle",
      { y: -10, duration: 4, delay: 0.5, opacity: 0 },
      {y: 1, duration: 4,delay:0.5, opacity:1});
    });

  return (
    <>
      <div className="justify-center flex">
        <h1 className=" text-[3rem] font-bold" id="profiletitle">
          Welcome {User?.result?.name}
        </h1>
      </div>
      <div className="container page-padding flex border-2">
        <div className="w-1/4 flex flex-col items-center pl-8 pt-8 gap-8 border-r-2">
          <Link to={`/Profile/UserProfile/${User?.result?._id}`}>
            <span className="text-bt font-titles font-bold">Profile</span>
          </Link>
          <Link to={`/Profile/UserOrder/${User?.result?._id}`}>
            <span className="text-bt font-titles font-bold">Orders</span>
          </Link>
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Profile
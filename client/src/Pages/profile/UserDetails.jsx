import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { FaUserEdit } from "react-icons/fa";
import UserEditForm from './UserEditForm';
import { useParams } from 'react-router-dom';


const UserDetails = () => {
  const { Id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === Id)[0];
  const User = useSelector((state) => state.currentUser);


  const [Switch, setSwitch] = useState(false);
  
  const UserBio = () => {
    return (
      <>
        <div className="w-3/4 flex items-center justify-start gap-12">
          <span className="text-h4">Name:</span>
          <span className="text-4h">{User?.result?.name}</span>
        </div>
        <div className="w-3/4 flex items-center justify-start gap-12">
          <span className="text-h4">Email:</span>
          <span className="text-4h">{User?.result?.email}</span>
        </div>
        <div className="w-3/4 flex items-center justify-start gap-12">
          <span className="text-h4">Address:</span>
          <span className="text-4h">{User?.result?.address}</span>
        </div>
        <div className="w-3/4 flex items-center justify-start gap-12">
          <span className="text-h4">Number:</span>
          <span className="text-4h">{User?.result?.number}</span>
        </div>
        <div className="w-3/4 flex items-center justify-start gap-12">
          <span className="text-h4">Joindate:</span>
          <span className="text-4h">{User?.result?.joinedOn}</span>
        </div>
      </>
    );
  };
    
  return (
    <div className="w-full h-full flex flex-col items-center gap-8 py-16">
      <div className="w-3/4 flex items-center justify-center mb-6 relative">
        <span className="w-28 h-28 flex items-center justify-center text-h2 bg-purple-500 font-bold">
          {User?.result?.name.charAt(0).toUpperCase()}
        </span>
        {User?.result?._id === Id && (
          <button
            type="button"
            onClick={() => setSwitch(true)}
            className="flex items-center justify-center font-bold text-h3 absolute right-0"
          >
            <FaUserEdit />
            <span className='text-4h'>Edit Profile</span>
          </button>
        )}
      </div>

      <>
        {Switch ? (
          <UserEditForm User={User} setSwitch={setSwitch} />
        ) : (
          <UserBio currentProfile={currentProfile} />
        )}
      </>
    </div>
  );
}

export default UserDetails
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/useraction";

const UserEditForm = ({User, setSwitch}) => {

const [name, setName] = useState(User?.result?.name);
const [email, setEmail] = useState(User?.result?.email);
const [address, setAddress] = useState();
const [number, setNumber] = useState();
    
const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(User?.result?._id, { name, email, address, number }))
    setSwitch(false);
  };
  return (
    <>
      <form className="w-3/4 flex flex-col" onSubmit={handleSubmit}>
        <div className="my-8 text-h4 flex gap-14">
          <label htmlFor="Name">Name :</label>
          <input type="text" className="w-3/4 border-[1px] border-black px-2" id="Name" value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="my-8 text-h4 flex gap-14">
          <label htmlFor="Email">Email :</label>
          <input type="email" className="w-3/4 border-[1px] border-black px-2" id="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="my-8 text-h4 flex gap-4">
          <label htmlFor="Address">Address :</label>
          <input type="text" name="useraddress" className="w-3/4 border-[1px] border-black px-2" id="Address" value={address}
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="my-8 text-h4 flex gap-4">
          <label htmlFor="Phonenum">Number :</label>
          <input type="number" name="usernumber" className="w-3/4 border-[1px] border-black px-2" id="Phonenum" value={number}
            onChange={(e) => setNumber(e.target.value)}/>
        </div>
        <div className="text-h4 flex items-center justify-center gap-16 my-4">
        <button type="submit" className="h-16 bg-blue-400 text-white text-4h px-4 border-[1px] border-blue-700">Save Profile</button>    
        <button type="button" onClick={() => setSwitch(false)} className="h-16 bg-red-500 text-white text-4h px-4 border-[1px] border-red-700">Cancel</button>    
        </div>
      </form>
    </>
  );
};

export default UserEditForm;

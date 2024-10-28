import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/useraction";

const UserEditForm = ({User, setSwitch}) => {

const [name, setName] = useState(User?.result?.name);
const [email, setEmail] = useState(User?.result?.name);
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
      <form onSubmit={handleSubmit}>
        <div className="my-4 flex justify-between">
          <label htmlFor="Name">Name:</label>
          <input type="text" className="border-[1px] border-black" id="Name" value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="my-4 flex justify-between">
          <label htmlFor="Email">Email</label>
          <input type="email" className="border-[1px] border-black" id="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="my-4 flex justify-between">
          <label htmlFor="Address">Address</label>
          <input type="text" name="useraddress" className="border-[1px] border-black" id="Address" value={address}
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="my-4 flex justify-between">
          <label htmlFor="Phonenum">Number</label>
          <input type="number" name="usernumber" className="border-[1px] border-black" id="Phonenum" value={number}
            onChange={(e) => setNumber(e.target.value)}/>
            </div>
        <div className="flex gap-16 my-4">
        <button type="submit" className="bg-blue-400 text-white text-4h">Save Profile</button>    
        <button type="button" onClick={() => setSwitch(false)} className="bg-red-500 text-white text-4h">Cancel</button>    
        </div>
      </form>
    </>
  );
};

export default UserEditForm;

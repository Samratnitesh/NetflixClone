import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute flex justify-between items-center px-5 z-10 bg-gradient-to-t from-black/10 via-black/80 to-black/80 w-full">
      <div className="z-10 px-20 ">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-32 md:w-48 cursor-pointer"
        />
      </div>
      {
        user && (<div className="flex px-10">
        <img
          src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b"
          alt="profile-avatar"
          className="w-16 h-12 px-2 cursor-pointer"
        />
        <button onClick={handleSignOut} className="text-white">Sign Out</button>
      </div>)
      }
      
    </div>
  );
};

export default Header;

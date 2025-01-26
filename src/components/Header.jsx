import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(addUser({ email, uid, displayName }));
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute flex justify-between items-center px-5 z-10 bg-gradient-to-t from-black/10 via-black/80 to-black/80 w-full">
      <div className="z-10 px-16">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-28 md:w-44 cursor-pointer"
        />
      </div>
      {
        users && (<div className="flex px-16 items-center" onClick={toggleDropdown}>
        <img
          src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b"
          alt="profile-avatar"
          className="w-14 h-10 px-2 cursor-pointer"
        />
        <div className="cursor-pointer">{isOpen ? "🔼" : "🔽"}</div>
        {isOpen && (
                <div
                    className="absolute right-16 mt-24 w-44
                    rounded-md shadow-lg bg-black/50 ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                >
                    <div className="py-2 border border-t-2 rounded-md items-center flex justify-center">
                      <button onClick={handleSignOut} className="text-white px-2 hover:underline">Sign out of Netflix</button>
                    </div>
                </div>
            )}
      </div>)
      }
      
    </div>
  );
};

export default Header;

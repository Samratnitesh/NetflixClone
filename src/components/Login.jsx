import React, { useState, useRef } from "react";
import { validateEmailPassword } from "../utils/validateEmailPassword.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const val = validateEmailPassword(
      email.current.value,
      password.current.value
    );

    setErrorMessage(val);

    if(val) return;
    // Sign up user
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errorCode + " - " + errMessage);
        });
    } else {
      // sign in user
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errMessage = error.message;
          setErrorMessage(errorCode + "-" + errMessage);
        });
    }
  };

  const handleClick = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div>
    <Header />
    <div className="h-screen w-full flex items-center justify-center relative">
      <div>
      <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="background-image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="z-10 w-full max-w-md">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col bg-black/70 backdrop-blur-sm text-white p-14 rounded-lg mx-2"
        >
          <h1 className="font-bold mb-10 text-3xl">
            {isSignIn == true ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-4 mb-5 rounded-md bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white border border-gray-400"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 mb-5 rounded-md bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white border border-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 mb-4 rounded-md bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white border border-gray-400"
          />
          <p className="text-red-600 font-bold mb-1">{errorMessage}</p>
          <button
            onClick={handleValidation}
            type="submit"
            className="px-4 py-3 mb-10 bg-red-700 rounded-lg hover:bg-red-800 transition-colors duration-200"
          >
            {isSignIn == true ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={handleClick}>
            {isSignIn == true
              ? <span><span className="cursor-default">New to Netflix?</span>{" "}<span className="font-bold">Sign up now.</span></span>
              : <span><span className="cursor-default">Already Registered?</span>{" "}<span className="font-bold">Sign In</span></span>}
          </p>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;

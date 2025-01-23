import React, { useState, useRef } from 'react';
import {validateEmailPassword} from "../utils/validateEmailPassword.js";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleValidation = () => {
        const val = validateEmailPassword(email.current.value, password.current.value);

        console.log(val);
        setErrorMessage(val);
    }

    const handleClick = () => {
        setSignIn(!isSignIn);
    }

  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="z-10 w-full max-w-md">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col bg-black/70 backdrop-blur-sm text-white p-14 rounded-lg mx-2">
          <h1 className="font-bold mb-10 text-3xl">{isSignIn == true ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignIn && 
            <input 
            type="text" 
            placeholder="Name" 
            className="p-4 mb-5 rounded-md bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white border border-gray-400"
            />
          }
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
          <p className='text-red-600 font-bold mb-1'>{errorMessage}</p>
          <button 
            onClick={handleValidation}
            type="submit" 
            className="px-4 py-3 mb-10 bg-red-700 rounded-lg hover:bg-red-800 transition-colors duration-200"
          >
            {isSignIn == true ? "Sign In" : "Sign Up"}
          </button>
          <p className='cursor-pointer' onClick={handleClick}>{isSignIn == true ? "New to Netflix? Sign up now." : "Already Registered? Sign In"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
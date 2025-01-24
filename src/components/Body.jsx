import React, { useEffect } from "react";
import Header from "./Header";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(addUser({ email, uid, displayName }));
      }
    });
  }, []);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;

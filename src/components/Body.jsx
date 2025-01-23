import React from 'react'
import Header from './Header'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';

const Body = () => {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <></>
    }
  ]);

  return (
    <div className=''>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg'
        alt='background-image' className='absolute top-0 left-0 w-full h-full object-cover' />
        <Header />
        <RouterProvider router={router} />
        
    </div>
  )
}

export default Body
import React from 'react'
import Login from "../routes/Login";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function Navbar() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
    ]);

    return (
        <>
            <div className="flex sticky h-[8vh] justify-between items-center bg-[#4F4A45]">
                <svg className='ml-3 cursor-pointer' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 7.65625H4.375C3.77708 7.65625 3.28125 7.16042 3.28125 6.5625C3.28125 5.96458 3.77708 5.46875 4.375 5.46875H17.5C18.0979 5.46875 18.5938 5.96458 18.5938 6.5625C18.5938 7.16042 18.0979 7.65625 17.5 7.65625Z" fill="white" />
                    <path d="M17.5 14.9478H4.375C3.77708 14.9478 3.28125 14.4519 3.28125 13.854C3.28125 13.2561 3.77708 12.7603 4.375 12.7603H17.5C18.0979 12.7603 18.5938 13.2561 18.5938 13.854C18.5938 14.4519 18.0979 14.9478 17.5 14.9478Z" fill="white" />
                    <path d="M30.625 22.2397H4.375C3.77708 22.2397 3.28125 21.7439 3.28125 21.146C3.28125 20.5481 3.77708 20.0522 4.375 20.0522H30.625C31.2229 20.0522 31.7188 20.5481 31.7188 21.146C31.7188 21.7439 31.2229 22.2397 30.625 22.2397Z" fill="white" />
                    <path d="M30.625 29.5312H4.375C3.77708 29.5312 3.28125 29.0354 3.28125 28.4375C3.28125 27.8396 3.77708 27.3438 4.375 27.3438H30.625C31.2229 27.3438 31.7188 27.8396 31.7188 28.4375C31.7188 29.0354 31.2229 29.5312 30.625 29.5312Z" fill="white" />
                </svg>



            </div>
        </>
    )
}

export default Navbar
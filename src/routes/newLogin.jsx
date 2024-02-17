import React from 'react'
import logo from "../assets/logo.png"

function newLogin() {
    return (
        <>
            <div className='h-[93vh] flex justify-center p-2 '>
                <div className='basis-2/5 text-center bg-green-300 rounded-tl-3xl rounded-br-3xl p-3 pt-9 h-auto m-2'>
                    <div className="flex-col mb-5">
                        <div className="ml-9 pb-1 text-left">Email</div>
                        <input type="email" className=' p-2 w-[25vw] rounded-xl border border-green-800' placeholder='User Email' />
                    </div>
                    <div className="flex-col mt-5">
                        <div className="ml-9 pb-1 text-left">Password</div>
                        <input type="email" className='p-2 w-[25vw] rounded-xl border border-green-800' placeholder='Password' />
                    </div>
                    <button className=' bg-white border border-green-600 p-4 pt-3 pb-3 mt-10 rounded-xl w-[25vw]' >Login</button>
                    <div>
                        <button className='border border-green-800 bg-transparent p-4 pt-3 pb-3 mt-10 rounded-xl w-[25vw]   '>Don't have an account? <span className='text-green-800' >Sign up</span> </button>
                    </div>
                    <p className='text-center mt-2 mb-2'>OR</p>
                    <button className='bg-white p-4 pt-3 pb-3 rounded-xl w-[25vw]'>Continue With Google</button>
                </div>
                <div className='text-center rounded-tr-3xl rounded-bl-3xl p-3 pt-9 h-auto m-2 basis-4/5 bg-gray-300 '>
                    <img src={logo} alt="logo" />                    
                </div>
            </div>
        </>
    )
}

export default newLogin
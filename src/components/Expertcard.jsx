import React, { useState } from 'react'
import master from '../assets/Master.jpg'
import masterIcon1 from '../assets/masterIcon1.svg'
import masterIcon2 from '../assets/masterIcon2.svg'
import { Link } from 'react-router-dom'


import masterIcon3 from '../assets/masterIcon3.svg'
import pfp1 from '../assets/profile/pfp1.jpg'
import pfp2 from '../assets/profile/pfp2.jpg'
import pfp3 from '../assets/profile/pfp3.jpg'
import pfp4 from '../assets/profile/pfp4.jpg'
export default function Expertcard() {
    const [viewProfile, setViewProfile] = useState(false);
    const showProfile = () => {
        setViewProfile(!viewProfile);
    }


  return (
    
    <div className='flex justify-center w-full gap-8  items-center relative'>
    
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Ayush Kansal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of IEEE</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

     <Link to="/profile"><div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div></Link>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={pfp1} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Ayushi Mittal</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of studentHub</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

     <Link to="/profile"><div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div></Link>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={pfp2} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Aryan Zutsi</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of Neomorons</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

     <Link to="/profile"><div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div></Link>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={master} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Gurshabadpal singh</p>
        <p className='text-gray-600 mt-1 text-sm'>founder of pandora</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

     <Link to="/profile"><div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div></Link>
        

    </div>
    <div className='h-[40vh] w-[250px] bg-violet-100 border-gray-400 rounded-3xl border shadow-lg z-0 relative object-contain flex flex-col justify-start items-center'>
        <img className='h-1/3 aspect-square rounded-full shadow-2xl mt-6 border-violet-800 border-[5px] ' src={pfp4} alt="" />
        <div>
        <p className='font-bold text-xl mt-4 '>Abhinav Saini</p>
        <p className='text-gray-600 mt-1 text-sm'>founder GeeXpro</p>
        </div>
        <div className='flex gap-4 mt-3'>
        <img src={masterIcon1} alt="" />           
        <img src={masterIcon2} alt="" />           
        <img src={masterIcon3} alt="" />           
        </div>

     <Link to="/profile"><div onClick={showProfile} className='h-9 cursor-pointer m-4 w-[90%] bg-purple-400 rounded-xl flex justify-center text-white font-semibold border-gray-300 border shadow-lg'>view profile</div></Link>
        

    </div>

   
     
   
    </div>


  )
}

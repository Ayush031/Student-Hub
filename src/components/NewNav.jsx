import React from 'react'
import logo from "../assets/logo.png"
import campus from "../assets/campus.svg"
import notification from "../assets/notification.svg"
import home from "../assets/home.svg"
import { Link } from 'react-router-dom'

function NewNav() {

   

  return (
    <div className='w-full h-[7vh] shadow-lg flex justify-between items-center '>
        <Link to='/'><img className='w-24' src={logo} /></Link>
        <div className='flex justify-center items-center gap-9 pr-10'>
         <Link to='/'> <img className='w-7 cursor-pointer ' src={home} /> </Link>
        <img className='w-7 ' src={campus} /> 
        <img className='w-7 ' src={notification} /> 
        <img className='w-7 ' src={home} /> 
        <img className='w-7 ' src={campus} /> 
        <img className='w-7 ' src={notification} /> 
        <button className='w-[80px] ml-4 h-[35px] rounded-md flex justify-center text-sm font-semibold items-center  bg-[#E2FCAB]'><Link to='/signup'>Sign up</Link></button> 
        </div>
    </div>
  )
}

export default NewNav
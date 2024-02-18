import React from 'react'
import realhackathon from '../assets/finalrealone.jpg'
import company from '../assets/company.svg'
import { Link } from 'react-router-dom'
function Eventpage() {
  return (
    <div className='flex flex-col  justify-center object-cover  items-start gap-3'>
        <img src={realhackathon} className=' h-[70vh] w-full shadow-2xl aspect-auto ' alt="" />
          <div className='flex w-full justify-between pr-20 mt-5 items-center'>
        <p className='font-bold text-5xl flex pl-20 '><p className='font-semibold pr-4'>by,</p> Cipher School</p>
        <button className='w-[150px] ml-4 h-[50px] rounded-md flex justify-center border-gray-300 border text-md font-bold items-center  bg-[#54ee3c]'><Link to='/signup'>Register</Link></button> 
        </div>

        <div className='flex w-[90%] h-[80vh] mb-8 mt-6 rounded-3xl bg-violet-100 ml-auto mr-auto'>
          <div className='h-[80vh] w-1/2 bg-violet-300 rounded-3xl p-10'> 
          <p className='font-semibold text-xl'>Details</p>
          <p className='font-md pt-3 pb-8 text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nam dolorem dicta nisi maxime saepe nemo quos in, consequuntur reprehenderit ipsam laudantium esse sit incidunt. Consequatur fugiat recusandae cupiditate deserunt natus inventore doloremque ipsa neque non? Fugit ipsa amet, adipisci tenetur laborum sit libero modi aperiam dolorum. Dolores, maiores vel.lorem60 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore accusantium doloremque nisi necessitatibus expedita assumenda dignissimos architecto. Quo odit consequatur explicabo itaque velit hic molestias totam, ducimus possimus? Assumenda, dolore deserunt vero incidunt laborum eos adipisci vitae voluptas voluptatem doloribus, eligendi, similique labore ipsa dolor iure quod voluptate earum suscipit? Corporis laborum deleniti saepe nesciunt et! Expedita eveniet fuga iure.</p>
          <p className='font-semibold text-xl'>Venue</p>
          <p className='pt-3'>Suite 881 83967 Abdul Station, Port Elmotown, SC 08816-5874</p>
          </div>

          <div className='h-[80vh] w-1/2  p-10'>
          <p className='font-semibold text-xl pb-3'>About community</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut cumque incidunt enim inventore nulla tempore est dolores corporis accusantium consequuntur modi, hic recusandae adipisci, neque necessitatibus labore, iusto dicta.</p>
            <img className='rounded-2xl ml-auto mr-auto mt-8 shadow-xl h-[40%]' src={company} alt="" />
            <button className='w-[560px] text-white mr-auto mt-10 h-[50px]  rounded-md flex justify-center text-sm font-semibold items-center ml-auto bg-[#973b94]'><Link to='/signup'>Join Community</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Eventpage
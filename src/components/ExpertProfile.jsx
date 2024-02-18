import React from 'react'
import ExpertLeftBar from './ExpertLeftBar'
import ExpertRightBar from './ExpertRightBar'
import profileImg from '../assets/profileImg1.avif'
import arrowRight from '../assets/arrowRight.svg'
import p1 from '../assets/p1.jpg'

function ExpertProfile() {
    return (
        <>
            <div className="flex">
                <ExpertLeftBar />
                <div className='text-green-800 flex basis-3/5 bg-green-300 h-[93vh] p-8'>
                    <div className='bg-white h-full w-full rounded-3xl'>
                        <div>
                            <div className='text-lg font-semibold ml-12 m-3'>Profile</div>
                            <div className='flex gap-5 w-auto justify-evenly items-center'>
                                <img src={profileImg} className='w-24 border border-green-500 rounded-3xl' />
                                <div className=' ' >
                                    <p>Alisha</p>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p>Shots</p><p>30</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p>Followers</p><p>20k</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p>Following</p><p>60</p>
                                    </div>
                                </div>
                                <button className=' text-white bg-green-800 p-2 pl-5 pr-5 rounded-3xl shadow-2xl'>Connect</button>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between pr-10 text-lg font-semibold ml-12 m-3'>
                                Portfolio
                                <img src={arrowRight} />
                            </div>
                            <div className=' flex flex-wrap gap-3 h-28  ml-10'>
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between pr-10 text-lg font-semibold ml-12 m-3'>
                                Reviews
                                <img src={arrowRight} />
                            </div>
                            <div className=' flex flex-wrap gap-3 h-28  ml-10'>
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                                <img src={p1} className='h-full rounded-3xl cursor-pointer ' />
                            </div>
                        </div>
                    </div>
                </div>
                <ExpertRightBar />
            </div>
        </>
    )
}

export default ExpertProfile
import React from 'react'
import home from '../assets/homeWhite.svg'
import trending from '../assets/trending.svg'
import event from '../assets/event.svg'

function ExpertLeftBar() {
    return (
        <>
            <div className='basis-1/5 bg-green-800 flex flex-col gap-4 justify-start pt-10 '>
                <div className='flex gap-5 justify-center items-center border-b-2 pb-2 ml-10 rounded-l-full '>
                    <img className=' bg-green-300 rounded-xl p-1 ' src={home} />
                    <span className='text-white' >Discover</span>
                </div>
                <div className='flex gap-5 justify-center items-center border-b-2 pb-2 ml-10 rounded-l-full '>
                    <img className=' bg-slate-50 rounded-xl p-1 ' src={trending} />
                    <span className='text-white'>Trending</span>
                </div>
                <div className='flex gap-8 justify-center items-center border-b-2 pb-2 ml-10 rounded-l-full '>
                    <img className=' bg-slate-50 rounded-xl p-1 ' src={event} />
                    <span className='text-white'>Events</span>
                </div>
                <div className='flex gap-5 justify-center items-center border-b-2 pb-2 ml-10 rounded-l-full '>
                    <img className=' bg-slate-50 rounded-xl p-1 ' src={home} />
                    <span className='text-white'>Discover</span>
                </div>
                <div className='flex gap-5 justify-center items-center border-b-2 pb-2 ml-10 rounded-l-full '>
                    <img className=' bg-slate-50 rounded-xl p-1 ' src={home} />
                    <span className='text-white'>Discover</span>
                </div>
            </div>
        </>
    )
}

export default ExpertLeftBar
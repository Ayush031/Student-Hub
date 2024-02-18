import React from 'react'
import rating from "../assets/rating.svg"
import chat from "../assets/chat.svg"

function Feedback() {
    return (
        <>
            <div className='h-screen flex justify-center p-2 '>
                <div className='basis-2/5 text-center bg-green-300 rounded-tl-3xl rounded-br-3xl p-3 pt-9 h-auto m-2'>
                    <div className='text-3xl font-bold mb-8 ' >
                        Feedback Form
                    </div>
                    <div className="flex-col mb-3">
                        <div className="ml-9 pb-1 text-left">Email</div>
                        <input type="email" className=' p-2 w-[25vw] rounded-xl border border-green-800' placeholder='User Email' />
                    </div>
                    <div className="flex-col mt-3">
                        <div className="ml-9 pb-1 text-left">Password</div>
                        <input type="email" className='p-2 w-[25vw] rounded-xl border border-green-800' placeholder='Password' />
                    </div>
                    <div className='flex flex-col text-left ml-10 gap-1 mt-7'>
                        <p>Share Your Experience in Scaling</p>
                        <img src={rating} width={150} />
                    </div>
                    <div>
                        <textarea className='resize-none w-4/5 mt-1 h-24' placeholder='  Your Opinion Matters!'></textarea>
                    </div>
                    <button className=' bg-white border border-green-950 bg-green-500 text-green-950 p-4 pt-3 pb-3 mt-1 rounded-xl w-[8vw]'>Submit</button>
                </div>
                <div className='flex flex-wrap text-center gap-8 rounded-tr-3xl rounded-bl-3xl p-3 pt-9 h-auto m-2 basis-4/5 '>
                    <div className='p-2 rounded-3xl bg-yellow-200 h-2/5 basis-1/4' >
                        <div className='m-2' ><img src={chat} /></div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit quam quibusdam ducimus provident aliquam? </p>
                    </div>
                    <div className=' p-2 rounded-3xl bg-green-300 h-2/5 basis-1/3' >
                        <div className='m-2' ><img src={chat} /></div>
                        <p> Lorem ipsum dolor sit am vdfvd fdfdet consectetur adipisicing elit. Quae impedit quam quibusdam ffdff ducimus provident aliquam? </p>
                    </div>
                    <div className='p-2 rounded-3xl bg-pink-300 h-2/5 basis-1/4' >
                        <div className='m-2' ><img src={chat} /></div>
                        <p> Lorem ipsum dolor sit ameQuae impedit quam quibusdam ducimus provident aliquam? </p>
                    </div>
                    <div className='p-2 rounded-3xl bg-yellow-200 h-1/3 basis-2/5' >
                        <div className='m-2' ><img src={chat} /></div>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit quam quibusdam ducimus provident aliquam? </p>
                    </div>
                    <div className='p-2 rounded-3xl bg-pink-300 h-1/3 basis-1/5' >
                        <div className='m-2' ><img src={chat} /></div>

                        <p>nsectetur adipisicing elit. Quae impedit quam quibusdam aliquam? </p>
                    </div>
                    <div className='p-2  rounded-3xl bg-green-300 h-1/3 basis-1/4' >
                        <div className='m-2' ><img src={chat} /></div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. imus provident aliquam? </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback
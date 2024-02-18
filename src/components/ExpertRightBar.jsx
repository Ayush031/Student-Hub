import React from 'react'
import leaderboard from '../assets/leaderboard.svg'

function ExpertRightBar() {
    return (
        <>
            <div className='basis-1/4 bg-green-300 h-[93vh] flex flex-col justify-center p-8 pl-0 '>
                <div className='items-center text-green-800 flex flex-col bg-white rounded-3xl w-full h-full'>
                    <div className='p-3 text-xl font-bold flex gap-3 border-b-2 border-green-950 '>
                        <img src={leaderboard} className='' />
                        Leaderboard
                    </div>
                    <div className=' p-2 outline-dashed outline-1 h-[20%] font-semibold w-[90%] mt-4 ' >
                        <div>
                            <span>Campus Rank</span> <br /> <span className='text-xs' >Based on Activity</span>

                        </div>
                        <div className='flex' >
                            <img src={leaderboard} className='mt-2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertRightBar
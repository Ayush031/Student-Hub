import React from 'react'
import NewNav from './components/NewNav'
import abstract from './assets/homeAbs.svg'
import Header from './components/Header'

function App() {
  return (
    <>
      <NewNav />
      <div className='flex justify-evenly items-center w-full h-93vh'>
        <div className="flex flex-col justify-start gap-5 h-[93vh] items-center basis-1/2">
          <p className='text-5xl font-bold w-[60%]'>Explore Domains!</p>

          <input className='h-6 border-black bg-gray-200 w-[60%] ' type="text" />
        </div>
        <div className='flex justify-center items-center h-[93vh]   basis-1/2'>
          <img className='w-[550px]' src={abstract} alt="" placeholder="Search here!" />
        </div>
      </div>
      <Header />
    </>
  )
}

export default App
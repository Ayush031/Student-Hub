import React from 'react'
import NewNav from './components/NewNav'
import abstract from './assets/homeAbs.svg'
import Header from './components/Header'
import Login from './routes/newLogin'

function App() {
  return (
    <>
      <NewNav />     
      <Header />
      <Login/>
    </>
  )
}

export default App
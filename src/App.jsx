import React from 'react'
import NewNav from './components/NewNav'
import Header from './components/Header'
import Login from './routes/newLogin'
import ExpertProfile from './components/ExpertProfile'
import Feedback from './routes/Feedback'

function App() {
  return (
    <>
      <NewNav />     
      <Header />
      <Feedback />
    </>
  )
}

export default App
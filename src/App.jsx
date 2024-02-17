import React from 'react'
import NewNav from './components/NewNav'
import Header from './components/Header'

import Login from './routes/NewLogin'
import Feedback from './routes/Feedback'

function App() {
  return (    
    <>
      <NewNav />
      {/* <Header /> */}
      {/* <Login /> */}
      <Feedback />
    </>
  )
}

export default App
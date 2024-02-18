import React from 'react'
import NewNav from './components/NewNav'
import abstract from './assets/homeAbs.svg'
import Header from './components/Header'
import Login from './routes/newLogin'
import Home from './routes/Home'
import NewLogin from './routes/newLogin'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ExpertProfile from './components/ExpertProfile'
import Eventpage from './routes/Eventpage'

function App() {
  return (
    <Router>
      <NewNav/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/profile" element={<ExpertProfile/>} />
       <Route path="/signup" element={<NewLogin/>} />
       <Route path="/events" element={<Eventpage/>} />
      </Routes>
    </Router>
  )
}

export default App;
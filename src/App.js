import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Landing from './Components/Landing/Landing.jsx'
import Serivces from './Components/Serivces/Serivces.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Work from './Components/Work/Work.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
    <div className= 'App'>
      <Navbar/>
      <Landing/>
      <Serivces/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

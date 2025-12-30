import React from 'react'
import './index.css'; 
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MyCertificates from './Components/Certificates/MyCertificates'
// import FrontendModel from './Components/About/utilities/FrontendModel'



const App = () => {
  return (

    <div className='flex flex-col justify-center'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <MyCertificates/>
      <Contact />
      <Footer />


    </div >
  )
}

export default App
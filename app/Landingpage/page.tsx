'use client'
import React from 'react'
import Navbar from '../component/navbar'
// import Mainbody from '../component/mainbody'
import { Mainbody } from '../component/mainbody'
import Footer from '../component/footer'
import SoftAurora from '../component/ui/wavesbg'
import { BackgroundLines } from '../component/ui/paralax-hero-images'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      
  

      <BackgroundLines/>
      <Mainbody/>
      <Footer/>
    </div>
  )
}

export default LandingPage

import React from 'react'
import Navbar from '../component/navbar'
// import Mainbody from '../component/mainbody'
import { Mainbody } from '../component/mainbody'
import { BackgroundLines } from '../component/ui/paralax-hero-images'

const LandingPage = () => {
  return (
    <BackgroundLines>
      <div>
        <Navbar />
        <div className='flex flex-col'>
          <div>
            <Mainbody />
          </div>
          <div className=''>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </BackgroundLines>
  )
}

export default LandingPage

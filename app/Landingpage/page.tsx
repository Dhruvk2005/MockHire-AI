'use client'
import React from 'react'
import Navbar from '../component/navbar'
// import Mainbody from '../component/mainbody'
import { ParallaxHeroImagesDemo } from '../component/mainbody'
import Footer from '../component/footer'
import SoftAurora from '../component/ui/wavesbg'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      
  
<SoftAurora
  speed={0.6}
  scale={1.5}
  brightness={1}
  color1="#f7f7f7"
  color2="#2bff00"
  noiseFrequency={2.5}
  noiseAmplitude={1}
  bandHeight={0.5}
  bandSpread={1}
  octaveDecay={0.1}
  layerOffset={0}
  colorSpeed={1}
  enableMouseInteraction
  mouseInfluence={0.25}
/>
      {/* <Mainbody/> */}
      <ParallaxHeroImagesDemo/>
      <Footer/>
    </div>
  )
}

export default LandingPage

import React from 'react'
import Appheader from './components/Appheader'

const Dashboardlayout = ({ children }:any) => {
  return (
    <div>
      <Appheader />
      <main className="mt-30">
        {children}
      </main>
    </div>
  )
}

export default Dashboardlayout
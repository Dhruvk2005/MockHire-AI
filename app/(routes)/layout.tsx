import React, { Children } from 'react'
import Appheader from './components/Appheader'

const Dashboardlayout = ({ children}:any) => {
    return (
        <div>
            <Appheader/>
            {children}
        </div>
    )
}

export default Dashboardlayout

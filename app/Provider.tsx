"use client"
import React, { Children } from 'react'

const Provider = ({children}:any) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider

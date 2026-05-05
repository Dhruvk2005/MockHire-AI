import React from 'react'
import Link from 'next/link'
import Login from '../loginpage/page'

const Navbar = () => {
  return (
    <div className='w-[full] bg-[#000000] flex justify-between p-[20px] border-b-[2px] border-white/5 ' >
  
      <div className='text-[30px] font-semibold ' >MockHire AI</div>
      <div className=' flex gap-[10px] ' >
        <Link href={"/loginpage"} > 
        <button className='px-6 py-2  text-gray-300 rounded-[10px] hover:bg-white/5 hover:text-white hover:cursor-pointer  ' >Login</button>
        </Link>
        <Link href={'/signup'} >
        <button className='px-6 py-2 bg-[#22C55E]  text-black rounded-[10px] hover:transition-all hover:scale-105 hover:cursor-pointer '>Sign Up</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar

import React from 'react'
import Appheader from '../components/Appheader'

const Dashboard = () => {
  return (
    <div>

      <div className='text-[white] w-[100%] ' >
        <ul className='absolute flex justify-center top-[0] w-[100%] mt-[30px] gap-[30px] text-[grey] hover:cursor-pointer  ' >
          <li className='hover:text-[white]'>Dashboard</li>
          <li className='hover:text-[white]'>Upgrade</li>
          <li className='hover:text-[white]'>How it works?</li>
        </ul>
      </div>

      <div className='w-[100%] flex justify-center items-center pt-[70]  ' >
        <div className='w-[60%] border-[white] border-[2px] border-dashed border-white/20 rounded-[20px] '>
          <div className='flex justify-between items-center border-dashed border-b-[2px] border-white/20 p-[20] ' >
            <div>
              <h2 className='text-[grey]' >My Dashboard</h2>
              <p className='font-bold text-[20px]' >Welcome, Dhruv khade</p>

            </div>
            <div>
              <button className=' text-[black] font-bold bg-[#22C55E] p-[10px] px-[20px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer ' >Create interview</button>
            </div>


          </div>
          <div className='flex flex-col items-center gap-[30px] p-[30] ' >
            <div className='flex flex-col items-center'>

            <img className='h-[200px] w-[300px]' src="/interview.png" alt="" />
            <h2 className='text-[grey]  '>you don't have any interview created</h2>
            </div>
            <div className=''>

            <button className=' text-[black] font-bold bg-[#22C55E] p-[10px] px-[20px] rounded-[10px] hover:cursor-pointer hover:scale-105 transition-all duration-200 ' >Create interview</button>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Dashboard

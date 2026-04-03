import React from 'react'

const Mainbody = () => {
  return (
    <div className='w-[full] flex flex-col items-center mt-[100px] min-h-screen'>
      <section>

        <div className=' text-center  ' >

          <span className='block text-8xl text-grey  font-semibold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent' >Master Job Interview with</span>
          <span className='block text-7xl font-bold bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-green-900 bg-clip-text text-transparent '> AI-Powered Practice Sessions </span>

        </div>
        <div className='mt-[20px] ' >
          <p className='text-xl lg:text-2xl text-gray-400  leading-relaxed text-center max-w-3xl mx-auto' >Preapare for your dream role with interactive AI avatars that mimic real recruiters. Get instant insights, refine your communication skills, and walk into every interview with confidence </p>
        </div>
      </section>

      <section className='mt-12' >
        <div className='flex gap-[20px]' >
          <button className='px-6 py-5 bg-[#22C55E] text-xl text-black font-semibold rounded-[10px]  ' >Explore more</button>
          <button className='px-6 py-5 border-white/5 border-[2px] text-xl font-semibold rounded-[10px] hover:bg-white/5' >Contact support</button>
        </div>
      </section>

    </div>
  )
}

export default Mainbody

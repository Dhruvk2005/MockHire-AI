"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Signup = () => {

    const [checked, setChecked] = useState(false);
    return (
        <div
            className='bg-black bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-screen w-full'
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <div className='border-[1px] rounded-[20px] border-none bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex flex-col  w-[35%] '>
                <h1 className=' text-center m-[20px] text-3xl block  font-bold leading-tight  bg-[white] bg-clip-text text-transparent text font-bold ' >Register to MockHire AI</h1>
                <div className=' p-[20px] w-[100%]' >
                    <form action="">
                        <div className='p-[20px]  flex flex-col items-center' >

                            {/* <label className='text-[30px]' htmlFor="text">Email</label> */}
                            <input className='w-[90%] -m-[20px]  border-[1px] p-[10px] rounded-[20px]' type="text" name='name' typeof='text' placeholder='Enter your name' />
                        </div>
                        <div className='p-[20px]  flex flex-col items-center' >

                            {/* <label className='text-[30px]' htmlFor="text">Email</label> */}
                            <input className='w-[90%]  border-[1px] p-[10px] rounded-[20px]' type="text" name='name' typeof='text' placeholder='Enter your email' />
                        </div>
                        <div className='p-[20px ] flex flex-col items-center ' >

                            {/* <label className=' text-[30px] ml-[20px]' htmlFor="number">Password</label> */}
                            <input className=' w-[83%]  border-[1px] p-[10px] rounded-[20px] ' type="text" name='name' placeholder='Enter password' />

                        </div>
                        <div className='px-[20px] py-[20px] flex justify-between mx-[22px]'>
                            <div className=''>
                                <label className='flex ml-[3px] gap-[5px]' >
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    Remember me
                                </label>


                            </div>
                            <div className='hover:cursor-pointer mr-[2px]' >Forgot password?</div>


                        </div>
                        <div>

                            <div className='flex justify-center'>
                                <button className='bg-[white] text-black font-bold w-[83%]  p-[10px] rounded-[20px] hover:cursor-pointer'  >Register</button>
                            </div>
                            <div className='flex justify-center m-[20px]'>
                                Already have an account?  <b className='hover:cursor-pointer' > <Link href={'/loginpage'} >Login</Link> </b>

                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup

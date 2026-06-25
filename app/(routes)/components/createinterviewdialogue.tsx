import React from 'react'

const Createinterviewdialogue = (props: any) => {


    return (
        <div className=' absolute top-0 z-20 bg-[#18181B66]  w-full h-full flex justify-center items-center'>
            <div className='w-[40%] bg-[white] text-[black] flex flex-col gap-[5px] rounded-[20px] p-[15px]' >
                <div className='font-bold flex  justify-between   ' ><p>Are yo absolutely sure?</p>
                    <button className='cursor-pointer mr-[10px]  p-[4px] px-[8px] rounded-[10px] bg-[black] font-normal  text-[grey] ' onClick={() => props.setDialougeOpen(false)}  >close</button>
                </div>
                <div className='text-[grey]' >
                    This action cannot be undone. This will permanently delete your account from our servers.

                </div>



            </div>
        </div>
    )
}

export default Createinterviewdialogue

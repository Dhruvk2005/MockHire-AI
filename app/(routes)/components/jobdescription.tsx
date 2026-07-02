import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const Jobdescription = (onHandleInputChange:any) => {


  return (
    <div className='flex flex-col gap-[20px]' >
      <div className='p-[10px]' >
        <label className='' htmlFor="text">Job Title</label>
        <Textarea placeholder='Ex. full stack developer' onChange={(event)=>onHandleInputChange('jobtitle',event.target.value)}/>
      </div>
      <div className='p-[10px]'>
        <label htmlFor="text">Job Description</label>
        <Textarea placeholder='Enetr or paste job description' onChange={(event)=>onHandleInputChange('job description',event.target.value)} />
      </div>
      {/* <div>
        <label htmlFor="text">Job Title</label>
        <Textarea placeholder='Ex. full stack developer' />
      </div> */}
    </div>
  )
}

export default Jobdescription

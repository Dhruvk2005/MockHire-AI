import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Jobdescription = ({ onHandleInputChange }: any) => {

  return (
    <div className='flex flex-col gap-[20px]'>

      <div className='p-[10px]'>
        <label htmlFor="jobTitle">Job Title</label>

        <Textarea
          placeholder='Ex. full stack developer'
          onChange={(event) =>
            onHandleInputChange('jobTitle', event.target.value)
          }
        />
      </div>

      <div className='p-[10px]'>
        <label htmlFor="jobDescription">Job Description</label>

        <Textarea
          placeholder='Enter or paste job description'
          onChange={(event) =>
            onHandleInputChange('jobDescription', event.target.value)
          }
        />

      </div>

    </div>
  )
}

export default Jobdescription
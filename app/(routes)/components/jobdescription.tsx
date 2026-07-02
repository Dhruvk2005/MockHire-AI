import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const Jobdescription = () => {

  const [formData, setFormData] = useState();

  const onHandleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }))
  }
  return (
    <div className='flex flex-col gap-[20px]' >
      <div className='p-[10px]' >
        <label className='' htmlFor="text">Job Title</label>
        <Textarea placeholder='Ex. full stack developer' />
      </div>
      <div className='p-[10px]'>
        <label htmlFor="text">Job Description</label>
        <Textarea placeholder='Enetr or paste job description' />
      </div>
      {/* <div>
        <label htmlFor="text">Job Title</label>
        <Textarea placeholder='Ex. full stack developer' />
      </div> */}
    </div>
  )
}

export default Jobdescription

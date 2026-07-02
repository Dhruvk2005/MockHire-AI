import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Resumeupload from './resumeupload'
import Jobdescription from './jobdescription'
const Createinterviewdialogue = (props: any) => {
    const [formData, setFormData] = useState<any>();

    const onHandleInputChange:any = (field: string, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className=' absolute top-0 z-20 bg-[#18181B66]  w-full h-full flex justify-center items-center'>
            <div className='w-[50%] bg-[black] text-[white] border-[#22C55E] border-[2px] flex flex-col gap-[5px] rounded-[20px] p-[15px]' >
                <div className='flex  justify-between ml-[5px]   ' ><p className='font-bold' >Are yo absolutely sure?</p>
                    <button className='text-[black]  bg-[#22C55E] p-[5px] px-[10px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer ' onClick={() => props.setDialougeOpen(false)}  >close</button>
                </div>
                <div className='text-[black]' >
                    <Tabs defaultValue="account" className="w-[full] flex flex-col   text-[black]">
                        <div className='' >
                            <TabsList className={'text-[black] '} >
                                <TabsTrigger className={'text-[grey]'} value="resume-upload">Resume upload</TabsTrigger>
                                <TabsTrigger className={'text-[grey]'} value="Job-Description">Job Description  </TabsTrigger>
                            </TabsList>
                        </div>
                        <div className='ml-[8px]'>
                            <TabsContent className={'text-[grey]  '} value="resume-upload"><Resumeupload /></TabsContent>
                            <TabsContent className={'text-[grey]'} value="Job-Description"><Jobdescription onHandleInputChange={onHandleInputChange} /></TabsContent>
                        </div>
                        <div className=' flex justify-end gap-3 p-[10px] '>
                            <button onClick={() => props.setDialougeOpen(false)} className='text-[white]   p-[5px] px-[10px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer' >cancel</button>
                            <button className='text-[black]  bg-[#22C55E] p-[5px] px-[10px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer' >Submit</button>
                        </div>



                    </Tabs>
                </div>



            </div>
        </div>
    )
}

export default Createinterviewdialogue
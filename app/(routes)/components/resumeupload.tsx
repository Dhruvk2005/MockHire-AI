'use client'
import { FileUpload } from '@/components/ui/file-upload';
import React from 'react'
import { useState } from 'react';
const Resumeupload = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };
    return (
        <div>
            <div className="w-full flex  max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                <FileUpload onChange={handleFileUpload} />
            </div>

        </div>
    )
}

export default Resumeupload

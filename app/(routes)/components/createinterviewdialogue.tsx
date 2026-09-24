"use client";

import React, { useState } from "react";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import Resumeupload from "./resumeupload";
import Jobdescription from "./jobdescription";

import axios from "axios";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { useRouter } from "next/navigation";

interface CreateInterviewDialogueProps {
    setDialougeOpen: (value: boolean) => void;
    userDetail: any;
}

const Createinterviewdialogue = ({
    setDialougeOpen,
    userDetail,
}: CreateInterviewDialogueProps) => {

    const [formData, setFormData] = useState<any>({
        jobTitle: "",
        jobDescription: "",
    });

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);
    const Router = useRouter();

    // Convex mutation
    const saveInterviewQuestion = useMutation(
        api.Interview.SaveInterviewQuestion
    );

    // Handle Job Title / Job Description
    const onHandleInputChange = (
        field: string,
        value: string
    ) => {

        setFormData((prev: any) => ({
            ...prev,
            [field]: value,
        }));

    };

    // Submit
    const onSubmit = async () => {

        try {

            setLoading(true);

            console.log("================================");
            console.log("SENDING DATA");
            console.log("================================");

            console.log("File:", file);
            console.log(
                "Job Title:",
                formData.jobTitle
            );
            console.log(
                "Job Description:",
                formData.jobDescription
            );
            console.log(
                "User:",
                userDetail
            );

            // --------------------------------
            // 1. Create FormData
            // --------------------------------

            const formData_ = new FormData();

            // Resume is optional
            if (file) {
                formData_.append("file", file);
            }

            formData_.append(
                "jobTitle",
                formData.jobTitle || ""
            );

            formData_.append(
                "jobDescription",
                formData.jobDescription || ""
            );

            // --------------------------------
            // 2. Send to Next.js API
            // --------------------------------

            const res = await axios.post(
                "/api/generate-interview-question",
                formData_
            );

            console.log("================================");
            console.log("API RESPONSE");
            console.log("================================");

            console.log(res.data);

            // --------------------------------
            // 3. Get questions from n8n response
            // --------------------------------

            /*
                Depending on your n8n response,
                it can be either:

                [
                    {
                        question: "...",
                        answer: "..."
                    }
                ]

                OR

                {
                    questions: [...]
                }
            */

            const questions =
                res.data?.n8nResponse?.questions ??
                res.data?.n8nResponse ??
                res.data?.questions ??
                [];

            console.log("QUESTIONS:", questions);

            // --------------------------------
            // 4. Check questions
            // --------------------------------

            if (!questions || questions.length === 0) {

                throw new Error(
                    "No interview questions were generated."
                );

            }

            // --------------------------------
            // 5. Check user
            // --------------------------------

            if (!userDetail?._id) {

                throw new Error(
                    "User information not found."
                );

            }

            // --------------------------------
            // 6. Save in Convex
            // --------------------------------

            const savedInterview =
                await saveInterviewQuestion({

                    questions: questions,

                    resumeUrl:
                        res.data?.resumeUrl || undefined,

                    uid: userDetail._id,

                    jobTitle:
                        formData.jobTitle || undefined,

                    jobDescription:
                        formData.jobDescription || undefined,

                });

                Router.push('/interviewPage/'+savedInterview);



            console.log(
                "================================"
            );

            console.log(
                "CONVEX RESPONSE:",
                savedInterview
            );

            console.log(
                "================================"
            );

            alert(
                "Interview created successfully!"
            );

            // Close dialogue
            setDialougeOpen(false);

        } catch (error: any) {

            console.error(
                "================================"
            );

            console.error(
                "SUBMIT ERROR:",
                error
            );

            console.error(
                "================================"
            );

            alert(
                error?.response?.data?.error ||
                error?.message ||
                "Submission Failed"
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <div
            className="
                absolute
                top-0
                z-20
                bg-[#18181B66]
                w-full
                h-full
                flex
                justify-center
                items-center
            "
        >

            <div
                className="
                    w-[50%]
                    bg-black
                    text-white
                    border-[#22C55E]
                    border-[2px]
                    flex
                    flex-col
                    gap-[5px]
                    rounded-[20px]
                    p-[15px]
                "
            >

                {/* Header */}

                <div
                    className="
                        flex
                        justify-between
                        ml-[5px]
                    "
                >

                    <p className="font-bold">
                        Create Interview
                    </p>

                    <button
                        className="
                            text-black
                            bg-[#22C55E]
                            p-[5px]
                            px-[10px]
                            rounded-[10px]
                            hover:scale-105
                            transition-all
                            duration-200
                            cursor-pointer
                        "
                        onClick={() =>
                            setDialougeOpen(false)
                        }
                    >
                        Close
                    </button>

                </div>


                {/* Tabs */}

                <div className="text-black">

                    <Tabs
                        defaultValue="resume-upload"
                        className="
                            w-full
                            flex
                            flex-col
                            text-black
                        "
                    >

                        {/* Tab buttons */}

                        <TabsList
                            className="text-black"
                        >

                            <TabsTrigger
                                className="text-gray-500"
                                value="resume-upload"
                            >
                                Resume Upload
                            </TabsTrigger>

                            <TabsTrigger
                                className="text-gray-500"
                                value="Job-Description"
                            >
                                Job Description
                            </TabsTrigger>

                        </TabsList>


                        {/* Tab content */}

                        <div className="ml-[8px]">

                            <TabsContent
                                className="text-gray-500"
                                value="resume-upload"
                            >

                                <Resumeupload
                                    setFiles={(
                                        selectedFile: File
                                    ) =>
                                        setFile(
                                            selectedFile
                                        )
                                    }
                                />

                            </TabsContent>


                            <TabsContent
                                className="text-gray-500"
                                value="Job-Description"
                            >

                                <Jobdescription
                                    onHandleInputChange={
                                        onHandleInputChange
                                    }
                                />

                            </TabsContent>

                        </div>


                        {/* Buttons */}

                        <div
                            className="
                                flex
                                justify-end
                                gap-3
                                p-[10px]
                            "
                        >

                            <button
                                onClick={() =>
                                    setDialougeOpen(false)
                                }
                                className="
                                    text-white
                                    p-[5px]
                                    px-[10px]
                                    rounded-[10px]
                                    hover:scale-105
                                    transition-all
                                    duration-200
                                    cursor-pointer
                                "
                            >
                                Cancel
                            </button>


                            <button
                                onClick={onSubmit}
                                disabled={loading}
                                className="
                                    text-black
                                    bg-[#22C55E]
                                    p-[5px]
                                    px-[10px]
                                    rounded-[10px]
                                    hover:scale-105
                                    transition-all
                                    duration-200
                                    cursor-pointer
                                    disabled:opacity-50
                                "
                            >

                                {loading
                                    ? "Submitting..."
                                    : "Submit"
                                }

                            </button>

                        </div>

                    </Tabs>

                </div>

            </div>

        </div>
    );
};

export default Createinterviewdialogue;
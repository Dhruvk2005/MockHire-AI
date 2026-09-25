"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {

  const params = useParams();

  const interviewId = params.interviewId as string;

  console.log("Interview ID:", interviewId);

  return (
    <div className="w-full min-h-screen">

      {/* Navbar */}
      <div className="text-[white] w-[100%]">
        <ul className="absolute flex justify-center top-[0] w-[100%] mt-[30px] gap-[30px] text-[grey] hover:cursor-pointer">
          <Link href={"/dashboard"} >
            <li className="hover:text-[white]">Dashboard</li>
          </Link>
          <li className="hover:text-[white]">Upgrade</li>
          <li className="hover:text-[white]">How it works?</li>
        </ul>
      </div>
      {/* Image */}
      <div className="flex justify-center items-center pt-[100px]">
        <img
          className="w-[200px] h-auto"
          src="/int.png"
          alt="Interview"
        />
      </div>

      {/* Heading */}
      <h2 className="flex justify-center items-center p-[20px] font-bold text-2xl">
        Ready to start interview?
      </h2>

      {/* Interview */}
      <div className="flex justify-center items-center">
        <div className="text-center">

          <p className="p-[10px]">
            The interview will last 30 minutes. Are you ready to begin?
          </p>

        <Link href={`/interviewPage/${interviewId}/start`}>
            <button
              className="text-black bg-[#22C55E] p-[10px] px-[20px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Start interview
            </button>
          </Link>

        </div>
      </div>

      {/* Send Interview Link */}
      <div className="flex justify-center items-center mt-[200px]">

        <div className="text-center">

          <p>
            Do you want to send interview link to someone?
          </p>

          <div className="pt-[30px] flex justify-center items-center gap-[10px]">

            <input
              type="email"
              className="border-2 border-gray-400 p-[10px] rounded-[10px]"
              placeholder="Enter email address"
            />

            <button
              className="text-black bg-[#22C55E] p-[5px] px-[15px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Page;
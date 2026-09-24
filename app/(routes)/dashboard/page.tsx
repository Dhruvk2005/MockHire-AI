"use client";

import React, { useState } from "react";
import Appheader from "../components/Appheader";
import Createinterviewdialogue from "../components/createinterviewdialogue";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Dashboard = () => {

  const [dialougeOpen, setDialougeOpen] = useState(false);

  // Clerk user
  const { user } = useUser();

  // Get corresponding Convex user
 const userDetail = useQuery(
  api.users.GetUserByEmail,
    user?.primaryEmailAddress?.emailAddress
      ? {
          email: user.primaryEmailAddress.emailAddress,
        }
      : "skip"
  );

  return (
    <div>

      <div className="text-[white] w-[100%]">
        <ul className="absolute flex justify-center top-[0] w-[100%] mt-[30px] gap-[30px] text-[grey] hover:cursor-pointer">
          <li className="hover:text-[white]">Dashboard</li>
          <li className="hover:text-[white]">Upgrade</li>
          <li className="hover:text-[white]">How it works?</li>
        </ul>
      </div>

      <div className="w-[100%] flex justify-center items-center pt-[70px]">
        <div className="w-[60%] border-[white] border-[2px] border-dashed border-white/20 rounded-[20px]">

          <div className="flex justify-between items-center border-dashed border-b-[2px] border-white/20 p-[20px]">

            <div>
              <h2 className="text-[grey]">
                My Dashboard
              </h2>

              <p className="font-bold text-[20px]">
                Welcome, {user?.firstName || "User"}
              </p>
            </div>

            <div>
              <button
                onClick={() => setDialougeOpen(true)}
                className="text-[black] font-bold bg-[#22C55E] p-[10px] px-[20px] rounded-[10px] hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Create interview
              </button>
            </div>

          </div>

          <div className="flex flex-col items-center gap-[30px] p-[30px]">

            <div className="flex flex-col items-center">

              <img
                className="h-[200px] w-[300px]"
                src="/interview.png"
                alt=""
              />

              <h2 className="text-[grey]">
                You don't have any interview created
              </h2>

            </div>

            <div>

              <button
                onClick={() => setDialougeOpen(true)}
                className="text-[black] font-bold bg-[#22C55E] p-[10px] px-[20px] rounded-[10px] hover:cursor-pointer hover:scale-105 transition-all duration-200"
              >
                Create interview
              </button>

            </div>

          </div>

        </div>
      </div>

      {dialougeOpen && (
        <Createinterviewdialogue
          setDialougeOpen={setDialougeOpen}
          userDetail={userDetail}
        />
      )}

    </div>
  );
};

export default Dashboard;
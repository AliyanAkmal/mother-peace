"use client";
import Image from "next/image"; 
import img from "@/assets/pic.svg";
import { Progress } from "@/components/ui/progress"

const userData = {
  name: "John Doe",
  role: "Peace Ambassador",
  level: 8,
  points: 1255,
  progress: 80,
  maxPoints: 1500,
  profilePic: img,
  stats: [
    { label: "Day Streak", value: 12 },
    { label: "Quotes Shared", value: 24 },
    { label: "Blessings Sent", value: 8 },
  ],
};
const progressPercent = Math.round((userData.points / userData.maxPoints) * 100);   
const AccountLevel = () => {
  return (
    <div className=" rounded-[15px] bg-white p-4  space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold ">Account level</h2>
            <h2 className="text-3xl font-medium ">{userData.level}</h2>
        </div>
      <div className="mt-3 space-y-3">
        <div className="flex justify-between">
             <p className="text-sm text-gray-500">Progress to Level {userData.level + 1}</p>
            <p className="text-xs text-right text-gray-500 mt-1">
             {userData.points}/{userData.maxPoints}
            </p>
        </div>
       
            <Progress  className="h-3" value={progressPercent} />
      </div>
      <div className="flex justify-between mt-4 text-center">
        {userData.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountLevel;

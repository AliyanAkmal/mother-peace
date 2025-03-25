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
const YourProfile = () => {
  return (
    <div className="  space-y-4">
           <h3 className="text-2xl text-[#28303F] font-medium">
           Your Profile
           </h3>
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 border rounded-full overflow-hidden">
          <Image
            src={userData.profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{userData.name}</h2>
          <p className="text-[#828282] text-sm">{userData.role}</p>

           <div className="flex gap-2 mt-3">
              <div className="flex flex-col gap-1 items-center" >
                   <span className="px-8 py-[2px] text-sm bg-gray-100 font-bold text-[#5a86d8] rounded-full">
                    {userData.level}
                  </span>
                  <span className="text-[#828282] text-sm">Level</span>
              </div>

              <div className="flex flex-col gap-1 items-center" >
                   <span className="px-8 py-[2px] text-sm bg-gray-100 font-bold text-[#5a86d8] rounded-full">
                    {userData.points}
                   </span>      
                   <span className="text-[#828282] text-sm">Points</span>
              </div>     
           </div>
        </div>
      </div>
     
      <div className="mt-3">
        <div className="flex justify-between">
             <p className="text-sm text-gray-500">Progress to Level {userData.level + 1}</p>
            <p className="text-xs text-right text-gray-500 mt-1">
             {userData.points}/{userData.maxPoints}
            </p>
        </div>
       
        <div className="w-full bg-gray-200 h-2.5 mt-1 rounded-full">
            <Progress value={progressPercent} />
        </div>
      </div>
      <div className="flex justify-between mt-4 text-center">
        {userData.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
        <hr className="mt-10 mb-6"  />
    </div>
  );
};

export default YourProfile;

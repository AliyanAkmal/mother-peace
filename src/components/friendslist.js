"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { UserRound, EllipsisVertical } from "lucide-react";

const friendsData = [
  { id: 1, name: "First", imgsrc: "https://github.com/shadcn.png" , level: 8, position: "Peace Ambassador", active: "2 hours ago", imgAlt:"abc" },
  { id: 2, name: "Hello", imgsrc: "https://github.com/shadcn.png" , level: 8, position: "Peace Ambassador", active: "2 hours ago" ,imgAlt:"abc"},
  { id: 2, name: "Hello", imgsrc: "https://github.com/shadcn.png" , level: 8, position: "Peace Ambassador", active: "2 hours ago" ,imgAlt:"abc"},
  { id: 3, name: "Terry", imgsrc: "https://github.com/shadcn.png" , level: 8, position: "Peace Ambassador", active: "online" ,imgAlt:"abc"},
];

export default function FriendsList() {
  return (
    <div className="bg-white p-4 rounded-lg  w-full max-w-md">
      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center gap-3">
          <UserRound size={22} />
          <h3 className="text-2xl font-medium text-[#28303F]">Friends List</h3>
        </div>
        <EllipsisVertical size={20} strokeWidth={1.25} />
      </div>

      <div className="flex-col justify-between flex gap-4 flex-wrap">
        {friendsData.map((data,index) => (
            <div key={index}>
            <div>
                 {data.imgsrc ? (
                <Avatar className="w-12 h-12">
            <AvatarImage src={data.imgsrc}/>
             <AvatarFallback>{data.imgAlt}</AvatarFallback>
            </Avatar>
              ) : (
                <div className="border w-fit p-2 rounded-full">  <UserRound size={20} className="text-gray-500" /></div>
              )}
              <div>

              </div>
              <h4 className="text-[#28303F] text-2xl font-medium"> {data.name}</h4>
            </div>

            </div>
        ))}
        {/* {friendsData.map((data,index) => (
          <div key={index} className="flex items-center gap-4 py-2 border ">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
             
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">{data.name}</h4>
              <p className="text-sm text-gray-500">{data.position}</p>
            </div>
            <span className={`text-xs ${data.active === "online" ? "text-green-500" : "text-gray-400"}`}>
              {data.active}
            </span>
          </div>
        ))} */}
      </div>
    </div>
  );
}

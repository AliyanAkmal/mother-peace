"use client";
import { CircleAlert } from "lucide-react"
export default function MappingData({achievements}) {
  return (
    <div className="space-y-6">
      {achievements.map((item) => (
        <div key={item.id} className="flex items-center justify-between " >
            <div className="flex items-center flex-row gap-4">
             <span className="text-2xl text-[#828282] ">{item.icon}</span>
            <div className="">
               <h2 className="text-base text-[#828282] font-medium">{item.title}</h2>
            </div>
            </div>
          <p className="text-base font-medium bg-gray-100 rounded-full px-3">{item.count}</p>
        </div>
      ))}
    </div>
  );
}

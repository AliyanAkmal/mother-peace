import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function AchievementsMap({ data }) {
  return (
    <div className="bg-[#28303f] rounded-lg  text-[#28303F]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-gray-400 w-fit mb-3 rounded-full p-2">
              <Image src={item.icon} alt={item.title} width={25} height={25} />
            </div>
              <div className="flex justify-between mb-4 items-end">
                <div>
                <h4 className="text-base text-[#28303F] font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              
               <div className="text-xs  text-gray-300">
                  <span className="text-[#5E8DE5] text-sm">{item.progress}</span>/
                  <span className="text-[#828282] text-sm">{item.total}</span>
                </div>
              </div>
                <Progress value={item.progressPercentage} className="w-full" />
            <div className="text-sm font-medium text-[#5E8DE5] mt-2">
              {item.compltext}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Star } from "lucide-react";
import AchivementsMap from "@/components/achivementsmap"
import cardsData from "@/components/achivementsdata"
export default function AchievementCards() {
  return (
    <div className="bg-[#28303f] space-y-8 rounded-lg p-8 text-white">
        <div className="flex flex-col ">
            <div className="flex  gap-2">
            <Star size={25} strokeWidth={1.75} stroke="white " /> 
             
             <div className="mt-[-8px]">
              <h4 className="text-[28px] font-semibold">Almost There !</h4>
              <span className="text-[#FFFFFF] text-base">
                You're close to earning these achievements
              </span>
             </div>
             </div>
         
        </div>
        <div>
            <AchivementsMap data={cardsData}/>
        </div>
      
    </div>
  );
}

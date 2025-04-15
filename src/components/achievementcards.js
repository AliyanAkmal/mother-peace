import { Star } from "lucide-react";
import AchivementsMap from "@/components/achivementsmap";
import cardsData from "@/components/achievementsinfo";

export default function AchievementCards() {
  return (
    <div className="bg-[#28303f] space-y-6 sm:space-y-8 rounded-lg p-6 sm:p-8 text-white">
      <div className="flex flex-col">
        <div className="flex gap-2 sm:gap-3 items-start">
          <Star 
            size={20} 
            className="w-5 h-5 sm:w-6 sm:h-6 mt-1" 
            strokeWidth={1.75} 
            stroke="white" 
          />
          <div className="mt-[-4px] sm:mt-[-6px]">
            <h4 className="text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight">
              Almost There!
            </h4>
            <span className="text-white text-sm sm:text-base">
              You're close to earning these achievements
            </span>
          </div>
        </div>
      </div>
      <div>
        <AchivementsMap data={cardsData} />
      </div>
    </div>
  );
}
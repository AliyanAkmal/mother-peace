import cardsData from "@/components/achivementsdata"
import { Calendar } from "lucide-react";
import AchivementsMap from "@/components/achivementsmap"
export default function MonthlyChallenges() {
return (
    <div className="p-3 bg-[#F8F8F8] space-y-8 min-h-screen">
      <div className="space-y-2">
         <h2 className="text-4xl font-semibold">Your Achievements</h2>
       <h4 className="text-xl ">
         John Doe
      </h4>
      </div>
       <div className="bg-white space-y-8 rounded-lg p-4 lg:p-8 text-white">
        <div className="flex flex-col ">
            <div className="flex  gap-2">
             <Calendar size={30} strokeWidth={1} stroke="black " />             
             <div className="mt-[-8px]">
              <h4 className="text-[28px] text-[#28303F] font-semibold">May 2025 Challenges</h4>
              <span className="text-[#28303F] text-base">
                You're close to earning these achievements
              </span>
             </div>
             </div>
        </div>
        <div>
            <AchivementsMap data={cardsData.slice(0-3)}/>
        </div>
    </div>
      <p className="text-[#5E8DE5] pl-4 text-base">New challenges are released at the beginning of each month. Complete all challenges to earn the "Monthly Champion" badge.</p>

    </div>
  )} 

import AchievementsRanking from "@/components/achievementsrenks"
import AchievementsProgress from "@/components/achievementsprogress"
import AchievementCards from "@/components/achievementcards"
export default function Achievements() {
  return (
        <div className=" ">
          <div className=" flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl   text-[#28303F] font-semibold">Your Achievements</h1>
          <AchievementsRanking/>
          <div className="bg-white space-y-8 rounded-lg p-5">
            <div>
              <h2 className="text-2xl text-[#28303F] font-medium">Level Progress</h2>
              <p className="text-base text-[#828282]">You're making great progress! Keep engaging with True Mother's teachings to earn more points.</p>
            </div>
             <AchievementsProgress/>
          </div>
           <div>
            <AchievementCards/>

          </div>
          </div>   
        </div>
        
  );
}

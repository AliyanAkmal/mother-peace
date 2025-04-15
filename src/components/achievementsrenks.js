import Image from "next/image";
import fire from "@/assets/fire.svg";
import cup from "@/assets/cup.svg";
import ranking from "@/assets/ranking.svg";
import level from "@/assets/level.svg";

const achievementsData = [
  {
    id: 1,
    title: "Current Streak",
    value: "12 days",
    icon: fire,
  },
  {
    id: 2,
    title: "Rank",
    value: "Peace Ambassador",
    icon: ranking,
  },
  {
    id: 3,
    title: "Achievements",
    value: "5/10",
    icon: cup,
  },
  {
    id: 4,
    title: "Next Level",
    value: "9",
    subtext: "> 250 points needed",
    icon: level,
  },
];

export default function AchievementsRanking() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
      {achievementsData.map((achievement) => (
        <div
          key={achievement.id}
          className="flex flex-col p-4 gap-4 rounded-lg bg-[#28303f] hover:bg-[#28303f]/90 transition-colors duration-200 min-h-[120px]"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg text-white font-semibold">
              {achievement.title}
            </h2>
            <Image 
              src={achievement.icon} 
              alt={achievement.title} 
              width={25} 
              height={25} 
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-white font-medium text-xl sm:text-2xl">
              {achievement.value}
            </p>
            {achievement.subtext && (
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                {achievement.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
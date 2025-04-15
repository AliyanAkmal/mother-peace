import { Progress } from "@/components/ui/progress";

const achievementsData = {
  currentLevel: 8,
  nextLevel: 9,
  progress: 53,
  progressText: "1255/1500",
  stats: [
    { label: "Searches", value: 248 },
    { label: "Quotes Shared", value: 87 },
    { label: "Discussions", value: 32 },
    { label: "Blessings Sent", value: 64 },
    { label: "Meditations", value: 64 },
  ],
};

export default function AchievementsProgress() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2">
        <div className="flex gap-3 items-center">
          <span className="text-[#28303F] font-medium text-xl sm:text-2xl">
            {achievementsData.currentLevel}
          </span>
          <h4 className="text-[#28303F] font-medium text-lg sm:text-xl">
            Peace Ambassador
          </h4>
        </div>
        <div className="flex gap-3 items-center">
          <h4 className="text-[#28303F] font-medium text-lg sm:text-xl">
            {achievementsData.progressText}
          </h4>
          <span className="text-[#28303F] font-medium text-xl sm:text-2xl">
            {achievementsData.nextLevel}
          </span>
        </div>
      </div>
      <Progress value={achievementsData.progress} className="h-2 sm:h-3" />
        <div className="flex sm:flex-row flex-col justify-around px-3 gap-2 sm:px-0 items-start mt-6">
        {achievementsData.stats.map((stat, index) => (
          <div 
            key={index} 
            className="flex flex-row sm:flex-col justify-between sm:justify-center items-center w-full sm:w-auto gap-2 sm:gap-0"
          >
            <h2 className="text-xl sm:text-2xl font-medium text-[#28303F]">
              {stat.value}
            </h2>
            <h4 className="text-md sm:text-base text-[#828282]">
              {stat.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
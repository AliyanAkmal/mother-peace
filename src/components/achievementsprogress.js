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
          <span className="text-[#28303F] font-medium text-2xl">{achievementsData.currentLevel}</span>
          <h4 className="text-[#28303F] font-medium text-xl">Peace Ambassador</h4>
        </div>
        <div className="flex gap-3 items-center">
          <h4 className="text-[#28303F] font-medium text-xl">{achievementsData.progressText}</h4>
          <span className="text-[#28303F] font-medium text-2xl">{achievementsData.nextLevel}</span>
        </div>
      </div>
      <Progress value={achievementsData.progress} className="h-4" />
      <div className="flex justify-around flex-wrap mt-8">
        {achievementsData.stats.map((stat, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-medium text-[#28303F]">{stat.value}</h2>
            <h4 className="text-xl text-[#828282]">{stat.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

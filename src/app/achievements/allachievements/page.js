import cardsData from "@/components/achivementsdata"
import AchivementsMap from "@/components/achivementsmap"

export default function AllAchievements() {
  return (
    <div className="p-3 bg-[#F8F8F8] min-h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl  font-semibold">Your Achievements</h2>
      <h4 className=" text-lg sm:text-xl mt-2">
        John Doe
      </h4>
      <div>
        <AchivementsMap data={cardsData}/>
      </div>
    </div>
  )} 
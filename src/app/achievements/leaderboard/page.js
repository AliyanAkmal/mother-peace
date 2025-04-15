import { Globe } from "lucide-react";
import Image from "next/image";
import cup from "@/assets/cup.svg";
import men from "@/assets/men.svg";

const leaderboardData = [
  { name: "Michael Lee", level: 8, points: 2450, image: men },
  { name: "Michael Lee", level: 8, points: 2450, image: men },
  { name: "Michael Lee", level: 8, points: 2450, image: men },
  { name: "Michael Lee", level: 8, points: 2450, image: men },
  { name: "Michael Lee", level: 8, points: 2450, image: men },
];

export default function Leaderboard() {
  return (
    <div className="space-y-8 min-h-screen">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#28303F]">
          Your Achievements
        </h2>
        <h4 className="text-lg sm:text-xl text-[#28303F]">John Doe</h4>
      </div>
      <div className="bg-white rounded-lg p-3 lg:p-8 space-y-6">
        <div className="flex items-start gap-3">
          <Globe size={25} strokeWidth={1.5} stroke="#28303F" className="mt-[5px]" />
          <div>
            <h4 className="text-[24px] sm:text-[28px] text-[#28303F] font-semibold">
              Global Leaderboard
            </h4>
            <span className="text-[#828282] text-sm">
              See how you rank among other users
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${
                index === 0 ? "bg-[#F5F5F5]" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                    index === 0
                      ? "bg-[#F4B940] text-white"
                      : index === 1
                      ? "bg-[#5FCF65] text-white"
                      : index === 2
                      ? "bg-[#4A90E2] text-white"
                      : "text-[#0a0909]"
                  }`}
                >
                  {index + 1} 
                </div>
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h5 className="text-base sm:text-lg text-[#28303F] font-medium">{user.name}</h5>
                  <p className="text-xs space-x-1 text-gray-500">
                    <span className="bg-gray-300 rounded-full px-1 py-[1px]">Level {user.level}</span>
                    <span className="text-[#5E8DE5] font-medium">
                      {user.points} points
                    </span>
                  </p>
                </div>
              </div>

              {index < 3 && (
                <Image src={cup} alt="Trophy" width={40} height={40} />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#5E8DE5] text-sm sm:text-base ml-4">
        Leaderboard updates daily. The top 3 users at the end of each month
        receive special rewards.
      </p>
    </div>
  );
}
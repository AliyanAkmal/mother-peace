"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import search from "@/assets/search.svg";
import share from "@/assets/share.svg";
import { Button } from "./ui/button";
import { Progress } from "@/components/ui/progress"

const journeyData = [
  {
    task: "First Steps",
    taskMsg: "Complete your first search",
    iconSrc: search,
    completed: true,
  },
  {
    task: "Sharing is Caring",
    taskMsg: "Share 5 quotes",
    iconSrc: share,
    completed: true,
  },
  {
    task: "Discussion Leader",
    taskMsg: "Create 3 group discussions",
    iconSrc: search,
    completed: false,
    progress: 3,
    total: 10,
  },
  {
    task: "Blessing Giver",
    taskMsg: "Send 10 blessings",
    iconSrc: share,
    completed: false,
    progress: 4,
    total: 10,
  },
  {
    task: "Blessing Giver",
    taskMsg: "Send 10 blessings",
    iconSrc: share,
    completed: false,
    progress: 4,
    total: 10,
  },
  {
    task: "Blessing Giver",
    taskMsg: "Send 10 blessings",
    iconSrc: share,
    completed: false,
    progress: 4,
    total: 10,
  },
  {
    task: "Blessing Giver",
    taskMsg: "Send 10 blessings",
    iconSrc: share,
    completed: false,
    progress: 4,
    total: 10,
  },
];

const YourJourney = () => {
  return (
    <div className="bg-white  rounded-lg">
      <h3 className="text-xl sm:text-2xl text-[#28303F] font-medium">Your Journey</h3>
      <Tabs defaultValue="Achievements" className="w-full mt-4">
        <TabsList className="flex flex-wrap h-fit gap-2 rounded-4xl p-2 sm:gap-4">
          <TabsTrigger value="Achievements" className="text-xs sm:text-sm p-2 ">Achievements</TabsTrigger>
          <TabsTrigger value="Challenges" className="text-xs sm:text-sm p-2">Challenges</TabsTrigger>
          <TabsTrigger value="Activity" className="text-xs sm:text-sm p-2">Activity</TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[300px] sm:h-[350px] w-full rounded-md pt-2">
          <TabsContent value="Achievements">
            {journeyData.map((data, index) => (
              <div key={index} className="mb-4 sm:mb-6 pr-2 sm:pr-5">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`p-1 sm:p-2 rounded-full ${
                        data.completed ? "bg-[#5a86d8]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <Image 
                        src={data.iconSrc} 
                        alt="Icon" 
                        width={16} 
                        height={16}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h1 className="text-sm sm:text-base font-medium truncate">{data.task}</h1>
                      <h1 className="text-xs sm:text-sm text-[#828282] truncate">{data.taskMsg}</h1>
                    </div>
                  </div>
                  {data.completed ? (
                    <Button
                      variant="custom"
                      className="rounded-full text-xs px-2 sm:px-3 py-1 h-auto"
                    >
                      Complete
                    </Button>
                  ) : (
                    <p className="text-xs sm:text-sm text-[#828282] whitespace-nowrap">
                      <span className="text-[#5E8DE5]">{data.progress}</span>/{data.total}
                    </p>
                  )}
                </div>
                <div className="ml-8 sm:ml-12 mt-1 sm:mt-2">
                  {!data.completed && (
                    <Progress value={(data.progress / data.total) * 100} className="h-1 sm:h-2" />
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="Challenges">Challenges section</TabsContent>
          <TabsContent value="Activity">Activity section</TabsContent>
        </ScrollArea>
      </Tabs>
      <hr className="mt-6 sm:mt-10 mb-3" />
    </div>
  );
};

export default YourJourney;
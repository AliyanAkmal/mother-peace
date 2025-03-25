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
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-2xl text-[#28303F] font-medium">Your Journey</h3>
      <Tabs defaultValue="Achievements" className="w-full mt-4">
        <TabsList className="flex gap-4">
          <TabsTrigger value="Achievements">Achievements</TabsTrigger>
          <TabsTrigger value="Challenges">Challenges</TabsTrigger>
          <TabsTrigger value="Activity">Activity</TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[300px] w-full rounded-md pt-2">
          <TabsContent value="Achievements">
            {journeyData.map((data, index) => (
              <div key={index} className="mb-6 pr-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        data.completed ? "bg-[#5a86d8]" : "bg-[#D9D9D9]"
                      }`}
                    >
                      <Image src={data.iconSrc} alt="Icon" width={20} height={20} />
                    </div>
                    <div>
                      <h1 className="text-base font-medium">{data.task}</h1>
                      <h1 className="text-sm text-[#828282]">{data.taskMsg}</h1>
                    </div>
                  </div>
                  {data.completed ? (
                    <Button
                      variant="custom"
                      className="rounded-full text-xs w-fit"
                    >
                      Complete
                    </Button>
                  ) : (
                    <p className="text-sm text-[#828282] ">
                        <span className="text-[#5E8DE5]">{data.progress}</span>/{data.total}
                    </p>
                  )}
                </div>
                <div className="ml-12 mt-2">
                     {!data.completed && (
                  <Progress value={(data.progress / data.total) * 100} />
                )}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="Challenges">Challenges section</TabsContent>
          <TabsContent value="Activity">Activity section</TabsContent>
        </ScrollArea>
      </Tabs>
        <hr className="mt-10 mb-3"  />
    </div>
  );
};

export default YourJourney;

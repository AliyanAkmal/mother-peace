"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { MoreVertical, Settings, MessageCircle, Users } from "lucide-react";
import Image from "next/image";
export default function TribeCard({ image, name, members, description, user }) {
  const friendsData = [
    {
      image: "/assets/Ellipse 18.png",
      name: "Terry",
      title: "Peace Ambassador",
      level: 8,
      status: "2 hours ago",
    },
    {
      image: "/assets/Ellipse 18.png",
      name: "Alex",
      title: "Global Leader",
      level: 10,
      status: "5 hours ago",
    },
    {
      image: "/assets/Ellipse 18.png",
      name: "Sophia",
      title: "Charity Worker",
      level: 6,
      status: "1 hour ago",
    },
  ];
  return (
    <Card className="w-full hover:cursor-pointer ">
      <CardContent className="py-5 px-[0.5rem] sm:px-[1.5rem]">
        <div className="flex gap-5">
          {/* <div className="flex  justify-between "> */}
          <Avatar className="min-w-14 min-h-14">
            <Image src={image} alt="@shadcn" width={55} height={55} />
          </Avatar>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-4 justify-between ">
              <div>
                <div>
                  <h3 className="text-[24px] font-[500]">{name}</h3>
                  <p className="text-[16px] text-[#828282] font-[400]">
                    {members} members
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-[#FAC571] text-white rounded-full">
                  {user}
                </span>
                <MoreVertical className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <p className="text-sm text-[#828282]">{description}</p>
          </div>

          {/* </div> */}
        </div>
        <div className="flex justify-between items-center pt-4 border-t mt-4 sm:pl-16 pl-0">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex gap-2 text-black border-[#28303F]"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>
            <Button
              variant="outline"
              className="flex gap-2 text-black border-[#28303F]"
            >
              <Users className="w-4 h-4" />
              Members
            </Button>
          </div>

          {/* Settings Icon */}
          <Settings className="text-gray-500 cursor-pointer" />
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
// import profileImg from "../public/Ellipse 14.png";
import { EllipsisVertical, Heart, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export const FriendCards = ({ image, name, title, level, status }) => {
  return (
    <div className="px-3 py-5 bg-[#FFFFFF] rounded-[12px] sm:min-w-[340px] w-[360px] border border-[#28303F14] hover:cursor-pointer">
      <div className="flex justify-between border-b border-[#28303F0F] pb-7">
        <div className="flex sm:gap-4 gap:2">
          <div>
            <Avatar className="">
              <Image src={image} alt="@shadcn" />
            </Avatar>
          </div>

          <div className="flex flex-col gap-1 px-2">
            <p className="sm:text-[24px] text-[22px] font-[500]">{name}</p>
            <p className="text-[#828282] sm:text-[16px] text-sm">{title}</p>
            <p className="px-3 mt-1 rounded-full w-fit py-0.5 text-[#828282] bg-[#EAEAEA] text-[12px]">
              Level {level}
            </p>
          </div>
        </div>

        <div className="flex">
          <p className="text-[#828282] text-[12px]">Active:</p>
          <span className="text-[#828282] text-[12px]"> {status}</span>
        </div>
      </div>
      <div className="flex pt-3.5 sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap sm:flex-nowrap ">
          <Button className="flex items-center md:justify-start justify-center gap-1 border w-full border-[#28303F] text-[12px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
            <MessageCircleMore size={20} /> Message
          </Button>
          <Button className="flex items-center md:justify-start justify-center border gap-1 w-full border-[#28303F] text-[12px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
            <Heart size={20} /> Send a blessing
          </Button>
        </div>
        <div>
          <EllipsisVertical />
        </div>
      </div>
    </div>
  );
};

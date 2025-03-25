import Image from "next/image";
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Share2 } from "lucide-react";

export default function ActivityCard({ shareIcon, image, title, description }) {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-8 border-b border-[#28303F0F] py-4">
      <div className="flex gap-4 items-center">
        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
          <Image src={image} width={65} height={65} alt="profile" />
        </Avatar>
        <div>
          <h1 className="text-[18px] sm:text-[24px] text-[#28303F]">{title}</h1>
          <p className="text-[#828282]  font-[400] text-[12px] sm:text-[16px]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className=" text-[10px] sm:text-sm text-[#828282]">2 hours ago</p>
        {shareIcon ? (
          <div>
            <Share2 strokeWidth={1.5} size={20} className="text-[#828282]" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

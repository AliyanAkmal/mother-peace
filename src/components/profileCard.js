"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Pin, EllipsisVertical, Plus } from "lucide-react";
import Image from "next/image";

export default function ProfileCard({ image, name, title, level }) {
  return (
    <div className="px-3 py-5 bg-[#FFFFFF] rounded-[12px] w-full border border-[#28303F14] hover:cursor-pointer">
      {/* Top Section */}
      <div className="flex justify-between border-b border-[#28303F0F] pb-7">
        <div className="flex gap-4">
          <div>
            <Avatar className="">
              <Image
                src={image}
                alt="@shadcn"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Avatar>
          </div>

          <div className="flex flex-col gap-1 px-2">
            <p className="text-[24px]">{name}</p>
            <p className="text-[#828282]">{title}</p>
            <p className="px-3 mt-1 rounded-full w-fit py-0.5 text-[#828282] bg-[#EAEAEA] text-[12px]">
              Level {level}
            </p>
          </div>
        </div>

        <div className="flex items-center h-fit">
          <Pin size={22} strokeWidth={0.75} />
          <EllipsisVertical />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex pt-3.5 items-center sm:justify-between flex-wrap-reverse sm:flex-nowrap gap-2">
        <div className="flex items-center justify-end sm:justify-start">
          <div className="relative w-10 h-10 flex pr-20 ">
            <Image
              src="/assets/Ellipse 18.png"
              alt="Mutual Friend"
              width={40}
              height={40}
              className="rounded-full object-cover left-12 absolute border-[2px] border-white"
            />
            <Image
              src="/assets/Ellipse 17.png"
              alt="Mutual Friend"
              width={39.5}
              height={39.5}
              className="rounded-full object-cover left-8 absolute border-[2px] border-white"
            />
            <Image
              src="/assets/Ellipse 16.png"
              alt="Mutual Friend"
              width={39.3}
              height={39.3}
              className="rounded-full object-cover left-4 absolute border-[2px] border-white"
            />
            <Image
              src="/assets/Ellipse 15.png"
              alt="Mutual Friend"
              width={39}
              height={39}
              className="rounded-full object-cover left-0 absolute border-[2px] border-white"
            />
          </div>
          <div>
            <Button className="flex gap-0.5 text-[#828282] text-[14px] bg-transparent hover:text-black hover:bg-transparent">
              <Plus
                size={18}
                strokeWidth={2}
                className="text-[#828282] hover:text-black"
              />
              <p> 15 mutual</p>
            </Button>
          </div>
        </div>
        <div className="flex sm:gap-6 justify-between sm:justify-end items-center w-full">
          <Heart />
          <Button className="flex items-center border border-[#28303F] text-[12px] text-[#28303F] bg-transparent hover:bg-gray-100">
            <Plus size={20} strokeWidth={2} className="text-[#28303F]" />
            Send add request
          </Button>
        </div>
      </div>
    </div>
  );
}

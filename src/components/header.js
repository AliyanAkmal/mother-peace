"use client";
import Image from "next/image";
import Vector from "@/assets/Vector.svg";
import notification from "@/assets/notification.svg";
import NotificationsPopOver from "@/components/notificationspopover";
import ProfilePopver from "@/components/profilepopover";
import InboxComponent from "@/components/inboxpopover";
import Group from "@/assets/Group.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useSidebar } from "@/contexts/sidebar-context";

export default function Header() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`grid grid-cols-3 border-b p-3 bg-[#EAEAEA] transition-all duration-300 ${
      isCollapsed ? "ml-[70px]" : "ml-[300px]"
    }`}>
      <div className="relative flex items-center w-full">
        <Input
          placeholder="Search"
          className="pl-10 bg-white border-none focus:outline-none"
        />
        <Image
          src={Vector}
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex gap-6 col-span-2 items-center justify-end">
        <Popover>
          <PopoverTrigger>
            <Image src={Group} alt="Group" width={18} height={18} className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <InboxComponent/>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Image src={notification} alt="Notifications" width={17} height={17} className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className=" ">
            <NotificationsPopOver/>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <ProfilePopver/>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
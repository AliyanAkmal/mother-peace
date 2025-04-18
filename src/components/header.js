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
import { useEffect, useState } from "react";

export default function Header() {
  const { isCollapsed } = useSidebar();

const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
            console.log("fdsfasfsfd",user);
        if (user?.picture) {
          setUserImage(user.picture);
        }
      } catch (e) {
        console.error("Error parsing stored user:", e);
      }
    } 
  }, []);
 
  

  return (
    <div className={`grid grid-cols-3 border-b p-3 bg-[#EAEAEA] transition-all duration-300 gap-3 ${
      isCollapsed ? "ml-[70px]" : "lg:ml-[300px]"
    }`}>
      <div className="relative flex items-center col-span-2 md:col-span-1  w-full">
        <Input
          placeholder="Search"
          className="pl-10 w-full bg-white border-none focus:outline-none"
        />
        <Image
          src={Vector}
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex gap-2 md:gap-4 col-span-1 md:col-span-2 items-center justify-end w-full">
        <Popover>
          <PopoverTrigger>
            <Image src={Group} alt="Group" width={18} height={18} className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <InboxComponent/>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Image src={notification} alt="Notifications" width={17} height={17} className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <NotificationsPopOver/>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Avatar className="w-8 h-8 md:w-10 md:h-10 cursor-pointer">
              <AvatarImage src={userImage} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <ProfilePopver />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

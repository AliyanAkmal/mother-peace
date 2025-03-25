import { Play } from "lucide-react";
import { ChevronRight } from "lucide-react";
import img from "@/assets/users.svg";
import Image from "next/image";
import { Button } from "./ui/button";

export default function VideoOfDay() {
  return (
    <div className="bg-white rounded-[15px] p-3 space-y-4 ">
      <div className="flex items-start gap-2">
        <Play size={24} strokeWidth={1} className="mt-[3px]" />
        <div>
          <h3 className="text-2xl text-[#28303F] font-medium">
            Video of the Day
          </h3>
          <span className="text-[#828282] text-base">
            Building a World of Peace
          </span>
        </div>
      </div>
      <video controls className="w-full mt-3 rounded-lg">
        <source src=" " type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <box className="space-y-2 ">
          <box className="flex flex-row justify-between">
          <span className="text-[#828282] text-sm	">
            March 7, 2025
          </span>
          <span className="flex flex-row gap-2 text-[#828282] text-sm">
               <Image
                src={img}
                alt="Logo"
                width={20}
                height={20}
                className="mt-[1px]"
              />
            World Summit on Peace
          </span>
      </box>
      <Button className="w-full text-sm" variant="outline">
        <ChevronRight strokeWidth={1} />
        View More Videos
      </Button>
      </box>
    </div>
  );
}

import { Plus } from "lucide-react";
import { MessageSquareDot } from "lucide-react";


import { EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Make sure this is correctly imported
import { Button } from "./ui/button";

const contectsData = [
  {
    name: "Blessing Giver",
    blessing: "Send 10 blessings",
    avatarSrc: "https://example.com/image1.jpg",
  },
  {
    name: "Blessing Giver",
    blessing: "Send 10 blessings",
    avatarSrc: "https://example.com/image1.jpg",
  },
  {
    name: "Blessing Giver",
    blessing: "Send 10 blessings",
    avatarSrc: "https://example.com/image1.jpg",
  },
  {
    name: "Blessing Giver",
    blessing: "Send 10 blessings",
    avatarSrc: "https://example.com/image1.jpg",
  },
];

export default function YourContects() {
  return (
    <div className="bg-white  rounded-lg">
      <div className="flex justify-between">
        <div>
          <h3 className="sm:text-2xl text-xl   text-[#28303F] font-medium">Your Journey</h3>
          <span className="text-sm sm:text-base  text-[#828282]">People to share blessings with</span>
        </div>
        <div className="bg-black rounded-xl items-center p-2 h-fit cursor-pointer">
          <Plus className="text-white" />
        </div>
      </div>

      {contectsData.map((data, index) => (
        <div>
            <div key={index} className="flex items-center justify-between mt-4">
          <div  className="flex items-center gap-4 ">    
            <Avatar className="w-10 h-10">
            <AvatarImage src={data.avatarSrc} alt="User Avatar" />
            <AvatarFallback>u</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm font-medium">{data.name}</h1>
            <h1 className="text-xs text-[#828282]">{data.blessing}</h1>
          </div>
          </div>
         <EllipsisVertical size={20} strokeWidth={1} />
        </div>
           <hr className="mt-4"  />
        </div>    
      ))}
      <Button variant="custom" className="w-full">
        <MessageSquareDot size={20} strokeWidth={1.25} />
        Import From Gmail
      </Button>
    </div>
  );
}

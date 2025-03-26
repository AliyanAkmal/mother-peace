import Image from "next/image";
import Vector from "@/assets/Vector.svg";
import notification from "@/assets/notification.svg";
import Group from "@/assets/Group.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
export default function Header() {
  return (
    <div className="grid grid-cols-3 border-b p-2 bg-[#EAEAEA]">
      <div className="relative flex items-center w-full" >
        <Input placeholder="Search" className="pl-4 b-none bg-white border-none " />
         <Image
        src={Vector}
        alt="Icon"
        width={20}
        height={20}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[7px]"
      />
      </div>     
      <div className="flex gap-6 col-span-2 items-center justify-end">
        <Image src={Group} alt="Logo" width={18} height={18} />
        <Image src={notification} alt="Logo" width={17} height={17} />
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

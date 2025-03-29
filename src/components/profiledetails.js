import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import Image from "next/image";
import img from "@/assets/woman.svg"
export default function ProfileDetails() {
  return (
    <div className="space-y-8 ">
      <div className="flex items-center  flex-col justify-center gap-6 ">
          <Image
          src={img}
          />
          <div className="flex flex-col gap-1 items-center">
            <h4 className="text-[#28303F] text-2xl text-center font-medium">Jessica Mathew</h4>
            <span className="text-[#828282] text-center text-base">Peace Ambassador</span>
          </div> 
     </div>
     <hr  />
        <div className="flex justify-center mb-8  lg:mb-11">
        <span className="text-[#828282] text-base text-center">
            Passionate about peace initiatives and family values. I love sharing True Mother's teachings with my community.
        </span>
        </div>
    <hr   />
        <div className="flex justify-center flex-col gap-5">
        <span className="text-[#28303F] text-base text-center">Social Accounts</span>
        <div className="flex justify-center gap-4">
            <Instagram/>
            <Linkedin/>
            <Facebook/>
            <Mail/>
          
        </div>
        <span className="text-[#828282] text-base text-center">Member since January 2023</span>
    </div>
    </div>
  

  );
}

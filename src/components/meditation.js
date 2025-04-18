import img from "@/assets/notes.svg";
import { Play } from "lucide-react";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"
import { Button } from "./ui/button";
export default function Meditation() {
  return (
    <div className="bg-white rounded-[15px] p-3 space-y-4 ">
         <div className="flex items-start justify-between ">
            <div className="flex items-start gap-2">
              <Image
                src={img}
                alt="Logo"
                width={25}
                height={25}
                className="mt-[1px]"
              />
              <div>
                <h3 className="text-2xl text-[#28303F] font-medium">
                    Meditation of the Day
                </h3>
                <span className="text-[#828282] text-base">
                    Peace Begins Within
                </span>
              </div>
            </div>
            <div>
              <span className="text-[##28303F] text-base">March 7, 2025</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#28303F] text-sm" >A guided meditation focusing on inner peace and harmony, featuring teachings from Dr. Hak Ja Han Moon.</span>

            <div className="bg-[#D9D9D91A] space-y-1"> 
                <div className="flex justify-between">
                    <span className="text-[#28303F] text-sm flex items-center gap-1">
                        <Clock size={20} strokeWidth={1} />
                        10:00
                    </span>
                    <span className="text-[#28303F] text-sm">
                       Peace 
                    </span>
                </div>
                <Progress value={40} />
                <div className="flex justify-between">
                     <span className="text-[#828282] text-sm">
                      02:22
                    </span>
                      <span className="text-[#828282] text-sm">
                       10:00
                    </span>
                </div>
            </div>
          </div>
            <Button className="w-full" variant="custom">
           <Play size={20} strokeWidth={2} className="mt-[3px]" />
            Start Meditation
          </Button>

    </div>
  );
}

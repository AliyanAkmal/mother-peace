import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellDot } from "lucide-react";
import { Send } from "lucide-react";
import { Video } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { BookOpen } from "lucide-react";
import MotherCards from "@/components/MotherCards"
import TabsMother from "@/components/mothertabs"
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function AskMother() {
  return (
    <div className="p-3  flex flex-col gap-4 bg-[#F8F8F8]">
      <div className="flex items-end justify-between flex-wrap">
        <div>
          <h1 className="text-[#28303F] text-[40px] font-bold">Ask True Mother</h1>
          <h3 className="text-[#28303F] text-xl">Ask questions about Dr. Hak Ja Han Moon's teachings</h3>
        </div>
        
        <Dialog>
          <DialogTrigger><Button variant="custom" className="py-6">
              <BellDot size={20} strokeWidth={1.25} />
              Get Daily Quotes
            </Button></DialogTrigger>
            <DialogContent>
          <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
          </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>

      <div className="grid g grid-cols-1 lg:grid-cols-3  gap-4">
        <div className="col-span-2  rounded-[15px] bg-white p-4 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-[#5E8DE5] text-xl font-medium">You</h4>
                <span className="text-[#28303F text-base]">What did Mother Moon say about family values?</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[#28303F] text-xl font-medium">True Mother</h4>
                  <span className="text-[#28303F text-base]">Here are teachings from Dr. Hak Ja Han Moon about family values:</span>
                </div>
                <div className="flex gap-2 flex-col">
                  <span>Related Media Resources</span>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="outline">
                      <Video size={20} strokeWidth={1.25} />
                      Family Value Address
                      <SquareArrowOutUpRight size={20} strokeWidth={1.25} />
                    </Button>
                    <Button variant="outline">
                      <BookOpen size={20} strokeWidth={1.25} />
                      Family Value Address
                      <SquareArrowOutUpRight size={20} strokeWidth={1.25} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <MotherCards />
          </div>
      <div className="relative flex items-center w-full" >
             <Input placeholder="Type Content Here[]" className="pl-4 border border-gray-200 "/>
          <Send size={20} strokeWidth={1} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[7px]" />
          </div>
         
        </div>

        <div   className="rounded-[15px]">
          <TabsMother/>
        </div>
      </div>
    </div>
  );
}

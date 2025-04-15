import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellDot, Send, Video, SquareArrowOutUpRight, BookOpen } from "lucide-react";
import MotherCards from "@/components/MotherCards";
import TabsMother from "@/components/mothertabs";
import MotherModal from "@/components/mothermodal";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function AskMother() {
  return (
    <div className=" flex flex-col gap-4 ">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[#28303F] text-2xl sm:text-3xl md:text-4xl font-bold">
            Ask True Mother
          </h1>
          <h3 className="text-[#28303F] text-base sm:text-lg">
            Ask questions about Dr. Hak Ja Han Moon's teachings
          </h3>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button variant="custom" className="py-3 sm:py-4 text-sm sm:text-base">
              <BellDot size={20} strokeWidth={1.25} />
              Get Daily Quotes
            </Button>
          </DialogTrigger>
          <DialogContent>
            <MotherModal />
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-2 bg-white p-4 rounded-[15px] space-y-6">
          {/* Chat Section */}
          <div className="space-y-4">
            {/* User Message */}
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-[#5E8DE5] text-lg sm:text-xl font-medium">
                  You
                </h4>
                <span className="text-[#28303F] text-sm sm:text-base">
                  What did Mother Moon say about family values?
                </span>
              </div>
            </div>

            {/* Response from True Mother */}
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#28303F] text-lg sm:text-xl font-medium">
                    True Mother
                  </h4>
                  <span className="text-[#28303F] text-sm sm:text-base">
                    Here are teachings from Dr. Hak Ja Han Moon about family values:
                  </span>
                </div>

                {/* Related Media */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm sm:text-base">Related Media Resources</span>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="text-xs sm:text-sm">
                      <Video size={18} strokeWidth={1.25} />
                      Family Value Address
                      <SquareArrowOutUpRight size={18} strokeWidth={1.25} />
                    </Button>
                    <Button variant="outline" className="text-xs sm:text-sm">
                      <BookOpen size={18} strokeWidth={1.25} />
                      Family Value Address
                      <SquareArrowOutUpRight size={18} strokeWidth={1.25} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mother Cards Section */}
          <MotherCards />

          {/* Input Field */}
          <div className="relative flex items-center w-full">
            <Input
              placeholder="Type Content Here..."
              className="pl-4 border border-gray-200 text-sm sm:text-base"
            />
            <Send
              size={18}
              strokeWidth={1}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[7px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-[15px]">
          <TabsMother />
        </div>
      </div>
    </div>
  );
}

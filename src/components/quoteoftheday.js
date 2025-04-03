import img from "@/assets/notes.svg";
import img2 from "@/assets/warning.svg";
import img3 from "@/assets/comment.svg";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

const quotes = [
  {
    name: "Dr. Hak Ja Han Moon",
    date: "March 7, 2025",
    quote:
      "The family is the school of love where we learn to love all humanity  in its wide variety.",
    question:
      "How can your family become a better school of love for yourself and others?",
  },
];

export default function QuoteOfDay() {
  return (
    <div className="bg-white rounded-[15px] p-3">
      {quotes.map((item, index) => (
        <div className="space-y-3" key={index}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <Image
                src={img}
                alt="Logo"
                width={25}
                height={25}
                className="mt-[1px]"
              />
              <div>
                <h3 className="text-xl sm:text-2xl text-[#28303F] font-medium">
                  Quote of the Day
                </h3>
                <span className="text-sm sm:text-base text-[#828282]">
                  Daily inspiration from {item.name}
                </span>
              </div>
            </div>
            <div>
              <span className="text-sm sm:text-base text-[##28303F]">
                {item.date}
              </span>
            </div>
          </div>

          <div className="bg-[#D9D9D91A] rounded-[15px] p-5 flex-col flex gap-2">
            <div className="flex">
              <span className="text-lg sm:text-xl text-[#28303F] font-semibold">
                “
              </span>
              <h2 className="text-lg sm:text-xl text-[#28303F] font-semibold pl-1">
                {item.quote}”
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-[#828282] pl-3">
              - {item.name}, International Day of Families Celebration, 2015
            </span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-start gap-2">
              <Image
                src={img2}
                alt="Logo"
                width={18}
                height={18}
                className="mt-[4px]"
              />
              <div>
                <h3 className="text-sm sm:text-base text-[#5E8DE5] font-medium">
                  Reflection Question
                </h3>
                <span className="text-xs sm:text-sm text-[#5E8DE5]">
                  {item.question}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-sm sm:text-base">
                <Share2 size={20} /> Share
              </Button>
              <Button variant="custom" className="text-sm sm:text-base">
                <Image src={img3} alt="Logo" width={20} height={20} /> Reflect
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { CircleAlert, Share2, Heart, BookmarkMinus, BookImage } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import img from "@/assets/users.svg";

const cardData = [
  {
    quote: "The family is the school of love where we learn to love all humanity in its wide variety.",
    date: "2015-05-03",
    text: "International Day of Families Celebration",
  },
  {
    quote: "When we understand that God is our parent, we realize that all people are brothers and sisters. This understanding is the foundation for building a world of peace.",
    date: "2018-02-16",
    text: "International Day of Families Celebration",
  },
  {
    quote: "The family is the school of love where we learn to love all humanity in its wide variety.",
    date: "2015-05-03",
    text: "International Day of Families Celebration",
  },
];

export default function MotherCards() {
  return (
    <div className="space-y-4">
      {cardData.map((item, index) => (
        <div key={index} className="rounded-[15px] p-4 bg-[#fbfbfb] space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-[#28303F] text-xs sm:text-sm">{item.date}</span>
            <CircleAlert size={18} strokeWidth={1.25} />
          </div>

          <div className="flex pr-4 sm:pr-10">
            <span className="text-lg sm:text-xl text-[#28303F] font-semibold">“</span>
            <h2 className="text-lg sm:text-xl text-[#28303F] font-semibold pl-1">{item.quote}”</h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-start md:justify-end">
            <Share2 size={20} strokeWidth={1.25} />
            <Button variant="outline" className="text-xs sm:text-sm">
              <BookImage size={18} />
              Create Image
            </Button>
            <Button variant="outline" className="text-xs sm:text-sm flex items-center gap-1">
              <Image src={img} alt="User" width={16} height={16} />
              Create Discussion
            </Button>
            <Button variant="outline" className="text-xs sm:text-sm">
              <Heart size={18} />
              Send a blessing
            </Button>
            <BookmarkMinus size={20} strokeWidth={1.25} />
          </div>
        </div>
      ))}
    </div>
  );
}

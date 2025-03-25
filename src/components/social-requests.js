"use client";

import {
  MoreVertical,
  XCircle,
  CheckCircle,
  UserRound,
  Check,
  X,
} from "lucide-react";
import Image from "next/image";

const friends = [
  {
    id: 1,
    name: "Jessica",
    mutualFriends: 3,
    image: "/assets/Ellipse 15.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Scarlet",
    mutualFriends: 3,
    image: "/assets/Ellipse 15.png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Mai",
    mutualFriends: 3,
    image: "/assets/Ellipse 15.png", // Replace with actual image path
  },
];

export default function FriendRequests() {
  return (
    <div className="bg-white px-4 py-6 rounded-xl  w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 w-full">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <UserRound strokeWidth={1.5} size={18} />
          <div className="flex items-start gap-2 ">
            <span className="font-[500] text-[22px] sm:text-[28px]">
              Friend Requests
            </span>
            <span className="bg-[#4AB794] text-white text-sm px-1.5 rounded-full hover:cursor-pointer ">
              {friends.length}
            </span>
          </div>
        </h2>
        {/* <MoreVertical className="text-gray-500" /> */}
      </div>

      {/* Friend Request List */}
      <div className="space-y-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center justify-between border-b pb-3 last:border-0 gap-2 w-full"
          >
            <div className="flex items-center gap-3">
              <Image
                src={friend.image}
                alt={friend.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-[500] text-[20px] sm:text-[24px]  text-[#28303F]">
                  {friend.name}
                </p>
                <p className="text-sm sm:text-[16px] font-[400] text-[#828282]">
                  {friend.mutualFriends} mutual friends
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex justify-center items-center border border-[#FA8171]">
                <X strokeWidth={2.5} size={17} className="text-[#FA8171]" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#4AB794] flex justify-center items-center">
                <Check strokeWidth={2.5} size={17} className="text-white" />
              </div>
              <MoreVertical className="text-[#28303F]" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="mt-4 w-full border border-[#28303F] py-2 rounded-lg text-black hover:bg-gray-100">
        Load More
      </button>
    </div>
  );
}

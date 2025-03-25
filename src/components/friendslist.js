"use client";
import { UserRound } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

export default function FriendsList() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <UserRound size={22} />
          <h3 className="text-2xl font-medium texr-[#28303F]">Friends List </h3>
        </div>
        <EllipsisVertical size={20} strokeWidth={1.25} />
      </div>
    </div>
  );
}

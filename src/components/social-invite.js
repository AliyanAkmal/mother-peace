"use client";
import { Mail, MessageCircleMore, Share2 } from "lucide-react";
import { useState } from "react";

export default function InviteFriends() {
  const [inviteLink] = useState("https://asktm.org/invite/johndoe");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white px-4 py-6  rounded-xl  w-full">
      {/* Header */}
      <h2 className="text-[#28303F] text-[24px] sm:text-[28px] font-[500]">
        Invite Friends
      </h2>
      <p className="text-sm sm:text-normal text-[#828282]">Grow your network</p>

      {/* Description */}
      <p className="mt-2 text-xs sm:text-sm text-[#828282]">
        Share askTrueMother with your friends and family to help spread True
        Mother’s teachings.
      </p>

      {/* Invite Link Input */}
      <div className="flex items-baseline gap-1">
        <div className="mt-3 border rounded-[7px] border-[#28303F] overflow-hidden">
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="flex-1 px-3 py-2 text-gray-700 text-sm  outline-none"
          />
        </div>
        <button
          onClick={copyToClipboard}
          className="px-3 py-2 text-sm border border-[#28303F] rounded-[7px] bg-white hover:bg-gray-100"
        >
          Copy
        </button>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 flex items-center justify-center border border-[#28303F] gap-1 rounded-lg px-3 py-1 text-sm text-black hover:bg-gray-100">
          <Mail strokeWidth={1.5} size={18} />
          Email
        </button>
        <button className="flex-1 flex items-center justify-center border rounded-lg px-3 gap-1 border-[#28303F] py-1 text-sm text-black hover:bg-gray-100">
          <MessageCircleMore strokeWidth={1.5} size={18} /> Message
        </button>
        <button className="flex-1 flex items-center justify-center border rounded-lg px-3 gap-1 border-[#28303F] py-1 text-sm text-black hover:bg-gray-100">
          <Share2 strokeWidth={1.5} size={18} /> Share
        </button>
      </div>
    </div>
  );
}

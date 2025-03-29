"use client";
import { useState } from "react";
import {Upload} from "lucide-react"
import { Button } from "./ui/button";
export default function InviteFriendsProfile() {
  const [inviteLink] = useState("https://asktm.org/invite/johndoe");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="rounded-[15px] bg-white p-4  w-full">
      <h2 className="text-[#28303F] text-[24px] sm:text-[28px] font-[500]">
        Invite Friends
      </h2>
      <p className="text-sm sm:text-normal text-[#828282]">Grow your network</p>

      <p className="mt-2 text-xs sm:text-sm text-[#828282]">
        Share askTrueMother with your friends and family to help spread True
        Mother’s teachings.
      </p>

      <div className="flex items-end gap-3">
        <div className="mt-3 border rounded-[7px] border-[#28303F] w-full overflow-hidden">
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="flex-1 px-3 py-2 text-gray-700 text-sm  outline-none"
          />
        </div>
        <Button
        variant="outline"
          onClick={copyToClipboard}
        >
            <Upload />
          Copy
        </Button>
      </div>
    </div>
  );
}

import React from "react";
import { Input } from "@/components/ui/input";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SocialHead({ nameProp }) {
  return (
    <div className="flex justify-between flex-wrap gap-4 my-4">
      <h1 className="text-[40px] font-[600]">Social Hub</h1>
      <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
        <Input
          type="text"
          placeholder="Search"
          className="outline-none text-[#A0A0A0] text-sm"
        />

        <Button className="flex items-center justify-start bg-[#5E8DE5] border border-[#F1F1F1] sm:w-[17rem]">
          <Plus className="m-0 p-0 text-white" strokeWidth={2.5} size={18} />
          <p className="text-white font-[500]">{nameProp}</p>
        </Button>
      </div>
    </div>
  );
}

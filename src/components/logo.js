'use client'

import Image from "next/image";
import logo from "@/assets/logo.png";

export default function PageLogo() {
  return (
    <div className="flex items-center space-x-6 ">
         <h1 className="text-[#28303F] text-xl font-semibold w-full">FAMILY FEDERATION</h1>
        <Image src={logo} alt="Logo" width={40} height={40} className="rounded-[7px] " />
     
     
    </div>
  );
}
  
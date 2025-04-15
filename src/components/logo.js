"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useSidebar } from "@/contexts/sidebar-context";

export default function PageLogo() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center space-x-6 p-4">
      {!isCollapsed && (
        <h1 className="text-[#28303F] text-xl font-semibold">FAMILY FEDERATION</h1>
      )}
      <button 
        onClick={toggleSidebar}
        className="focus:outline-none cursor-pointer"
        aria-label="Toggle sidebar"
      >
        <Image 
          src={logo} 
          alt="Logo" 
          width={40} 
          height={40} 
          className="rounded-[7px]" 
        />
      </button>
    </div> 
  );
}
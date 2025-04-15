"use client";
import { useSidebar } from "@/contexts/sidebar-context";

export default function ContentWrapper({ children }) {
  const { isCollapsed, isMobile } = useSidebar();
  
  return (
    <main className={`flex-1 transition-all duration-300 p-3 bg-[#F8F8F8] ${
      isCollapsed ? "ml-[70px]" : "lg:ml-[300px]"
    } ${isMobile ? "ml-0" : ""}`}>
      {children}
    </main>
  );
}
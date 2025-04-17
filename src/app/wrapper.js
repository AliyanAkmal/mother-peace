"use client";
import { useSidebar } from "@/contexts/sidebar-context";
import { usePathname } from "next/navigation";

export default function ContentWrapper({ children }) {
  const { isCollapsed, isMobile } = useSidebar();
  const path = usePathname();

  return (
    <main
      className={`flex-1 transition-all duration-300 p-3 ${
        path === "/" ? "bg-white" : "bg-[#f8f8f8]"
      } ${isCollapsed ? "ml-[70px]" : "lg:ml-[300px]"} ${
        isMobile ? "ml-0" : ""
      }`}
    >
      {children}
    </main>
  );
}

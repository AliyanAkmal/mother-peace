// app/content-wrapper.tsx
"use client";

import { useSidebar } from "@/contexts/sidebar-context";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <main className={`flex-1 transition-all duration-300 ${
      isCollapsed ? "ml-[70px]" : "ml-[300px]"
    }`}>
      {children}
    </main>
  );
}
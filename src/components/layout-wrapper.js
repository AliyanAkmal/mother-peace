"use client";

import { usePathname } from "next/navigation";
import DashboardSidebar from "@/components/sidebar";
import Header from "@/components/header";
import ContentWrapper from "@/app/wrapper";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="flex h-full">
      {pathname === "/" ? null : <DashboardSidebar />}

      <div className="flex-1 flex flex-col min-h-0">
        {pathname === "/" ? null : <Header />}
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </div>
  );
}

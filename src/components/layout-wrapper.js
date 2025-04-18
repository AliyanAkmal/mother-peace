"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardSidebar from "@/components/sidebar";
import Header from "@/components/header";
import ContentWrapper from "@/app/wrapper";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    if (typeof window !== "undefined" && !isAuthPage) {
      const user = localStorage.getItem("user");
      if (!user) {
        console.log("User not authenticated. Redirecting to login page.");
        router.push("/login");
      }
    }
  }, [isAuthPage, router]);

  if (isAuthPage) {
    return <div className="">{children}</div>;
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

"use client";
import { usePathname } from "next/navigation";
import SocialHead from "../../components/social-head";
import SocialRightContent from "../../components/social-right";

export default function SocialLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="md:px-6 bg-[#F8F8F8] md:py-2 px-2 py-4">
      <SocialHead
        nameProp={
          pathname === "/social/friends" ? "Invite Friends" : "Create Tribes"
        }
      />
      <div className="xl:mt-4 xl:flex xl:gap-6 xl:justify-between">
        <div className="w-full">{children}</div>


        <SocialRightContent />
      </div>
    </div>
  );
}

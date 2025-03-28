"use client";
import { useState } from "react";
import img from "@/assets/Subtract.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const menulist = [
  { link: "/", text: "Dashboard" },
  { link: "/asktruemother", text: "Ask True Mother" },
  {
    text: "Social",
    subMenu: [
      { link: "/social/friends", text: "Friends" },
      { link: "/social/tribes", text: "Tribes" },
      { link: "/social/activity", text: "Activity" },
    ],
  },
  {
    link: "/achievements",
    text: "Achievements",
    subMenu: [
      { link: "/achievements/allachievements", text: "All Achievements" },
      { link: "/achievements/monthlychallenges", text: "Monthly Challenges" },
      { link: "/achievements/leaderboard", text: "Leaderboard" },
    ], },
  { link: "/profile", text: "Profile", subMenu: [
      { link: "/profile/accountsrtting", text: "Account Setting" },
      { link: "/profile/privacy", text: "Privacy" },
      { link: "/profile/notification", text: "Notifications" },
    ], },
]

import PageLogo from "@/components/logo";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();
  const toggleSubmenu = (menuText) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuText]: !prev[menuText],
    }));
  };

  return (
    <div className="fixed flex flex-col items-center min-w-[300px] border-r min-h-screen p-4 ">
      <div className="flex flex-col space-y-10">
        <PageLogo />
        <div className="flex gap-4 flex-col ">
          <h1 className="text-base text-[#28303F] font-medium">Main Menu</h1>
          <SidebarProvider>
            <Sidebar className="w-full bg-white" collapsible="none">
              <SidebarContent>
                <SidebarMenu className="flex flex-col gap-5">
                  {menulist.map((menu, index) => (
                    <SidebarMenuItem key={index}>
                      {menu.subMenu ? (
                        <>
                          <SidebarMenuButton
                            onClick={() => toggleSubmenu(menu.text)}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                          >
                            <Image
                              src={img}
                              alt="Logo"
                              width={20}
                              height={20}
                            />
                            <span className="text-base text-[#828282] font-medium p-2">
                              {menu.text}
                            </span>
                            <ChevronDown
                              className={`ml-auto h-4 w-4 transition-transform ${
                                openMenus[menu.text] ? "rotate-180" : ""
                              }`}
                            />
                          </SidebarMenuButton>

                          {openMenus[menu.text] && (
                            <SidebarMenuSub className=" border-none">
                              {menu.subMenu.map((subItem, subIndex) => (
                                <SidebarMenuSubItem key={subIndex}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === subItem.link}
                                  >
                                    <a
                                      href={subItem.link}
                                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                                    >
                                      {pathname === subItem.link ? (
                                        <ChevronDown className="rotate-270" />
                                      ) : null}
                                      <span
                                        className={`${
                                          pathname === subItem.link
                                            ? "text-black"
                                            : "text-gray-500"
                                        }text-base  font-medium text-gray-500`}
                                      >
                                        {subItem.text}
                                      </span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          )}
                        </>
                      ) : (
                        <SidebarMenuButton asChild>
                          <a
                            href={menu.link}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                          >
                            <Image
                              src={img}
                              alt="Logo"
                              width={20}
                              height={20}
                            />
                            <span className="text-base text-[#828282] font-medium p-2">
                              {menu.text}
                            </span>
                          </a>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          </SidebarProvider>
        </div>
      </div>

      <div className="absolute bottom-40  ">
        <h3>© 2025 Family Federation</h3>
        <h3>Teachings of Dr. Hak Ja Han Moon</h3>
      </div>
    </div>
  );
}

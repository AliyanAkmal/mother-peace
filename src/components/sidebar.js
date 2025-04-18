"use client";
import { useState, useEffect } from "react";
import img from "@/assets/Subtract.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useSidebar } from "@/contexts/sidebar-context";
import { usePathname, useRouter } from "next/navigation";
import PageLogo from "@/components/logo";
import Link from "next/link";

const menulist = [
  { link: "/dashboard", text: "Dashboard" },
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
    text: "Achievements",
    link: "/achievements",
    subMenu: [
      { link: "/achievements/allachievements", text: "All Achievements" },
      { link: "/achievements/monthlychallenges", text: "Monthly Challenges" },
      { link: "/achievements/leaderboard", text: "Leaderboard" },
    ],
  },
  {
    text: "Profile",
    link: "/profile",
    subMenu: [
      { link: "/profile/accountsrtting", text: "Account Setting" },
      { link: "/profile/privacy", text: "Privacy" },
      { link: "/profile/notification", text: "Notifications" },
    ],
  },
];

export default function DashboardSidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();
  const router = useRouter();
  const { isCollapsed, isMobile, toggleSidebar } = useSidebar();

  const toggleSubmenu = (menuText) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuText]: !prev[menuText],
    }));
  };

  const handleMenuClick = (menu) => {
    if (menu.link) {
      router.push(menu.link);
      if (isMobile) {
        toggleSidebar();
      }
    }
    if (menu.subMenu) {
      toggleSubmenu(menu.text);
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    const newOpenMenus = {};
    menulist.forEach((menu) => {
      if (menu.subMenu) {
        const isActiveSubmenu = menu.subMenu.some(
          (subItem) =>
            pathname === subItem.link || pathname.startsWith(`${subItem.link}/`)
        );
        if (isActiveSubmenu) {
          newOpenMenus[menu.text] = true;
        }
      }
    });
    setOpenMenus(newOpenMenus);
  }, [pathname]);

  useEffect(() => {
    if (isMobile && !isCollapsed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobile, isCollapsed]);

  return (
    <div
      className={`
      fixed h-screen z-20 transition-all duration-300
      ${isCollapsed ? "w-[70px]" : "w-[300px]"}
      ${isMobile && !isCollapsed ? "inset-0 z-50 bg-white" : ""}
      border-r bg-white shadow-sm flex flex-col
    `}
    >
      <PageLogo />

      <div className={`flex-1 overflow-y-auto ${isCollapsed ? "hidden" : ""}`}>
        <div className="p-4 mt-4">
          <h2 className="text-base text-[#28303F] font-medium mb-4">
            Main Menu
          </h2>
          <nav className="flex flex-col gap-1">
            {menulist.map((menu, index) => (
              <div key={index} className="mb-1">
                {menu.subMenu ? (
                  <>
                    <button
                      onClick={() => handleMenuClick(menu)}
                      className={`
                        flex items-center w-full p-2 rounded-md hover:bg-gray-100
                        ${
                          pathname === menu.link ||
                          (menu.subMenu &&
                            menu.subMenu.some(
                              (subItem) =>
                                pathname === subItem.link ||
                                pathname.startsWith(`${subItem.link}/`)
                            ))
                            ? "bg-gray-100"
                            : ""
                        }
                      `}
                    >
                      <Image src={img} alt="" width={20} height={20} />
                      <span className="ml-3 text-[#828282] font-medium">
                        {menu.text}
                      </span>
                      <ChevronDown
                        className={`ml-auto h-4 w-4 transition-transform ${
                          openMenus[menu.text] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMenus[menu.text] && (
                      <div className="ml-10 mt-1 space-y-1">
                        {menu.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            onClick={handleLinkClick}
                            className={`
                              block p-2 rounded-md text-sm
                              ${
                                pathname === subItem.link ||
                                pathname.startsWith(`${subItem.link}/`)
                                  ? "text-black font-medium"
                                  : "text-gray-500 hover:text-black"
                              }
                            `}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.link}
                    onClick={handleLinkClick}
                    className={`
                      flex items-center p-2 rounded-md hover:bg-gray-100
                      ${pathname === menu.link ? "bg-gray-100" : ""}
                    `}
                  >
                    <Image src={img} alt="" width={20} height={20} />
                    <span className="ml-3 text-[#828282] font-medium">
                      {menu.text}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {!isCollapsed && (
        <div className="p-4 text-xs text-gray-500">
          <p>© 2025 Family Federation</p>
          <p>Teachings of Dr. Hak Ja Han Moon</p>
        </div>
      )}
    </div>
  );
}

"use client"

import { useState } from "react";
import { Home, LogOut } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    id: 1,
    name: "Profile Setting",
    link:"/profile",
  },
  {
    id: 2,
    name: "Social",
    link: "/social/friends",
  },
  {
    id: 3,
    name: "Achievements",
    link: "/achievements",
  },
  {
    id: 4,
    name: "Notifications",
    link: "/profile/notification",
  },
]

export default function ProfilePopover() {
  const [activeItem, setActiveItem] = useState(1); 

  return (
    <div className="bg-white rounded-xl w-[75vw] sm:w-[400px] md:w-[500px] shadow-sm">
      <div className="px-4 py-4 border-b-[1px]">
        <h2 className="font-medium text-xl text-gray-900">Profile</h2>
      </div>
      <div className="py-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`flex items-center gap-3 px-4 py-3 transition-colors ${
              activeItem === item.id ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Home size={18} className={activeItem === item.id ? "text-gray-800" : "text-gray-500"} />
            </div>
            <span className={activeItem === item.id ? "text-gray-800" : "text-gray-600"}>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="px-4 py-4">
        <button className="w-full border border-gray-300 py-2.5 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}
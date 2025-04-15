"use client"

import { MoreVertical, X, Check } from "lucide-react"
import Image from "next/image"

const notifications = [
  {
    id: 1,
    name: "Jessica",
    content: "3 mutual friends",
    image: "/assets/Ellipse 15.png",
    showActions: true,
  },
  {
    id: 2,
    name: "Jessica",
    content: "Send 10 blessings",
    image: "/assets/Ellipse 15.png",
    showActions: false,
  },
  {
    id: 3,
    name: "Jessica",
    content: "- Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "/assets/Ellipse 15.png",
    showActions: false,
  },
]

export default function NotificationsPopOver() {
  return (
    <div className="bg-white rounded-xl w-[75vw] sm:w-[400px] md:w-[500px]  shadow-sm absolute  right-[-40px]">
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="flex items-center gap-2">
          <span className="font-medium text-xl text-gray-900">Notifications</span>
          <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">{notifications.length}</span>
        </h2>
      </div>

      <div>
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between px-4 py-3 ">
            <div className="flex items-center gap-3">
              <Image
                src={notification.image || "/placeholder.svg"}
                alt={notification.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{notification.name}</p>
                <p className="text-sm text-gray-500">{notification.content}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {notification.showActions ? (
                <>
                  <button className="w-8 h-8 rounded-full flex justify-center items-center border border-red-400">
                    <X size={16} className="text-red-400" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-emerald-500 flex justify-center items-center">
                    <Check size={16} className="text-white" />
                  </button>
                </>
              ) : null}
              <button>
                <MoreVertical size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <button className="w-full border border-gray-300 py-2.5 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors">
          Load More
        </button>
      </div>
    </div>
  )
}


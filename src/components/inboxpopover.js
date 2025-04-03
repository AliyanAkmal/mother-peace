"use client"

import { MoreVertical } from "lucide-react"
import Image from "next/image"

const messages = [
  {
    id: 1,
    sender: "Jessica",
    content: "- Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "/assets/Ellipse 15.png",
    time: "2 days ago",
  },
  {
    id: 2,
    sender: "Jessica",
    content: "- Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "/assets/Ellipse 15.png",
    time: "2 weeks ago",
  },
  {
    id: 3,
    sender: "Jessica",
    content: "- Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "/assets/Ellipse 15.png",
    time: "5 days ago",
  },
]

export default function InboxComponent() {
  return (
    <div className="bg-white rounded-xl w-full max-w-md shadow-sm">
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="flex items-center gap-2">
          <span className="font-medium text-xl text-gray-900">Inbox</span>
          <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">{messages.length}</span>
        </h2>
      </div>

      <div>
        {messages.map((message) => (
          <div key={message.id} className="flex items-start justify-between px-4 py-3 ">
            <div className="flex items-start gap-3">
              <Image
                src={message.image || "/placeholder.svg"}
                alt={message.sender}
                width={40}
                height={40}
                className="rounded-full object-cover mt-1"
              />
              <div>
                <div className="flex items-start justify-between">
                  <p className="font-medium text-gray-900">{message.sender}</p>
                  <span className="text-xs text-gray-400 ">{message.time}</span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5 pr-4">{message.content}</p>
              </div>
            </div>

            <div className="flex items-start mt-1 gap-2">
              <button>
                <MoreVertical size={25} className="text-gray-500" />
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


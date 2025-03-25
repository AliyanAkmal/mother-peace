"use client";

import {
  CircleArrowLeft,
  CircleArrowRight,
  EllipsisVertical,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { FriendCards } from "../components/FriendCards";
import profileImg from "../../public/Ellipse 14.png";
import ProfileCard from "./profileCard";

export function FriendsContent() {
  const [startIndex, setStartIndex] = useState(0);

  const friendsData = [
    {
      image: profileImg,
      name: "Terry",
      title: "Peace Ambassador",
      level: 8,
      status: "2 hours ago",
    },
    {
      image: profileImg,
      name: "Alex",
      title: "Global Leader",
      level: 10,
      status: "5 hours ago",
    },
    {
      image: profileImg,
      name: "Sophia",
      title: "Charity Worker",
      level: 6,
      status: "1 hour ago",
    },
    {
      image: profileImg,
      name: "Daniel",
      title: "Community Builder",
      level: 9,
      status: "30 mins ago",
    },
    {
      image: profileImg,
      name: "Emma",
      title: "Social Activist",
      level: 7,
      status: "3 hours ago",
    },
    {
      image: profileImg,
      name: "John",
      title: "Volunteer",
      level: 5,
      status: "4 hours ago",
    },
    {
      image: profileImg,
      name: "Michael",
      title: "Event Organizer",
      level: 9,
      status: "6 hours ago",
    },
    {
      image: profileImg,
      name: "Sarah",
      title: "Public Speaker",
      level: 8,
      status: "1 day ago",
    },
    {
      image: profileImg,
      name: "Sarah",
      title: "Public Speaker",
      level: 8,
      status: "1 day ago",
    },
    {
      image: profileImg,
      name: "Sarah",
      title: "Public Speaker",
      level: 8,
      status: "1 day ago",
    },
    {
      image: profileImg,
      name: "Sarah",
      title: "Public Speaker",
      level: 8,
      status: "1 day ago",
    },
  ];

  const cardsPerPage = 4; // Number of cards to show at once

  const nextCards = () => {
    if (startIndex + cardsPerPage < friendsData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const prevCards = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <>
      <div className="p-6 w-full bg-white rounded-[12px] ">
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <UserRound />
              <div className="flex">
                <p className="text-[28px] font-[500] px-2">Friends List</p>
                <p className="text-[#828282] font-[500]">
                  {friendsData.length}
                </p>
              </div>
            </div>
            <div>
              <EllipsisVertical />
            </div>
          </div>

          {/* Show 4 cards at a time */}
          <div className="flex items-end lg:flex-nowrap flex-wrap">
            <div className="py-5 flex flex-wrap gap-4 w-full ">
              {friendsData
                .slice(startIndex, startIndex + cardsPerPage)
                .map((data, index) => (
                  <FriendCards key={index} {...data} />
                ))}
            </div>
            {/* Navigation Arrows */}
            <div className="flex  gap-3 pb-5 pl-5">
              <CircleArrowLeft
                size={32}
                strokeWidth={2}
                className={
                  startIndex === 0
                    ? "fill-[#828282] rounded-full text-white opacity-[0.4] cursor-not-allowed"
                    : " fill-[#828282] text-white  rounded-full cursor-pointer"
                }
                onClick={prevCards}
              />

              <CircleArrowRight
                size={32}
                strokeWidth={2}
                className={
                  startIndex + cardsPerPage >= friendsData.length
                    ? "fill-[#828282] rounded-full text-white opacity-[0.4]  cursor-not-allowed"
                    : "fill-[#828282] text-white  rounded-full cursor-pointer"
                }
                onClick={nextCards}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-[28px] font-[500]">People You May Know</h1>
        <p className="text-[#828282]">Connect with more friends</p>
      </div>

      <div className="py-4 flex flex-col gap-2">
        {friendsData.map((data, index) => (
          <ProfileCard key={index} {...data} />
        ))}
      </div>
    </>
  );
}

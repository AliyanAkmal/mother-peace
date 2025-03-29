import React from "react";
import SocialLayout from "../social-layout";
import ActivityCard from "../../../components/activity-card";
export default function Activity() {
  const activityData = [
    {
      image: "/assets/Ellipse 15.png",
      title: "Michael Lee",
      description: "shared a quote about family values",
      shareIcon: false,
    },
    {
      image: "/assets/Ellipse 15.png",
      title: "Michael Lee",
      description: "shared a quote about family values",
      shareIcon: true,
    },
    {
      image: "/assets/Ellipse 15.png",
      title: "Michael Lee",
      description: "shared a quote about family values",
      shareIcon: false,
    },
  ];
  return (
    <SocialLayout>
      <div className=" px-4 py-6 bg-white rounded-[12px]">
        <div className="mb-8">
          <h1 className="text-[24px] text-[#28303F] font-[500]">
            Friend Activity
          </h1>
          <p className="text-[#828282] text-normal">
            See what your friends are up to
          </p>
        </div>
        {activityData.map((data, index) => {
          return <ActivityCard {...data} key={index} />;
        })}
      </div>
    </SocialLayout>
  );
}

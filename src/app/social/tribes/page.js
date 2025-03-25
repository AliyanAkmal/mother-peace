import React from "react";
import SocialLayout from "../social-layout";
import TribeCard from "../../../components/tribe-card";

export default function Tribes() {
  const tribeData = [
    {
      image: "/assets/Ellipse 15.png",
      name: "Peace Builders",
      members: 28,
      description:
        "A group dedicated to sharing and discussing True Mother's teachings on peace",
      user: "Admin",
    },
    {
      image: "/assets/Ellipse 15.png",
      name: "Peace Builders",
      members: 28,
      description:
        "A group dedicated to sharing and discussing True Mother's teachings on peace",
      user: "Admin",
    },
    {
      image: "/assets/Ellipse 15.png",
      name: "Peace Builders",
      members: 28,
      description:
        "A group dedicated to sharing and discussing True Mother's teachings on peace",
      user: "Admin",
    },
  ];
  return (
    <SocialLayout>
      <>
        <h1 className="text-[20px] text-[#28303F]">Your Tribes</h1>
        <div className="my-4 flex flex-col gap-3">
          {tribeData.map((data, i) => {
            return <TribeCard {...data} key={i} />;
          })}
        </div>
      </>
    </SocialLayout>
  );
}

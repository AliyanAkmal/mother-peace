import React from "react";
import FriendRequests from "./social-requests";
import SuggestedTribes from "./social-suggest";
import InviteFriends from "./social-invite";
export default function SocialRightContent() {
  return (
    <div className="flex flex-col gap-2 xl:max-w-[24rem] md:min-w-[22rem] w-full">
      <FriendRequests />
      <SuggestedTribes />
      <InviteFriends />
    </div>
  );
}

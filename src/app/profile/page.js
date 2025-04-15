import { Button } from "@/components/ui/button";
import { SquarePen,Share2 } from "lucide-react";
import ProfileDetails from "@/components/profiledetails"
import AccountDetails from "@/components/accountdetails"
import AccountSecurity from "@/components/accountsecurity"
import InviteFriendsProfile from "@/components/invitefriends"
import FriendRequests from "@/components/social-requests"
import AccountLevel from "@/components/accountlevel"
export default function Profile() {
  return (
    <div >
      <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
           <div>
            <h1 className="text-[#28303F] text-[40px] font-semibold">Profile</h1>
           </div>
           <div className="flex items-center gap-4">
            <Share2  strokeWidth={1} absoluteStrokeWidth />
             <Button variant="custom" className="py-6">
              <SquarePen />
             Edit profile
            </Button>
           </div>
           

     </div>
       <div className="grid grid-cols-1 lg:grid-cols-26 gap-4">
        <div className=" rounded-[15px] h-fit  col-span-1 lg:col-span-6 bg-white p-4">
          <ProfileDetails/>
        </div>
         <div className="col-span-1 lg:col-span-12 space-y-4"> 
          <div className=" "><AccountDetails/></div>
          <div className=""><AccountSecurity/></div>
          <div className=""><InviteFriendsProfile/></div>
         </div>
         <div className=" col-span-1 lg:col-span-8 space-y-4"> 
          <div className="">
            <AccountLevel/>
          </div>
          <div className="  ">
             <FriendRequests/>
          </div>
         
         </div>
       </div>
    </div>
  

  );
}

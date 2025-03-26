import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FriendsList from "@/components/friendslist"
export default function Social() {
  return (
    <div className="p-3 bg-[#F8F8F8]">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
           <div>
            <h1 className="text-[#28303F] text-[40px] font-bold">Social Hub</h1>
           </div>
             <Button variant="custom" className="py-6">
             <Plus size={20} strokeWidth={1.25} className="text-[#ffff]" />

              Invite Friends
            </Button>

     </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 rounded-[15px] bg-white p-4 space-y-6">
          <FriendsList/>
        </div>

         <div className="rounded-[15px] bg-white p-4"> 

         </div>
       </div>
    </div>
  

  );
}
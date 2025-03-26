import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export default function Notifications() {
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
        
    </div>
  

  );
}

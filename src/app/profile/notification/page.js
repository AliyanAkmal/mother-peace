import { Switch } from "@/components/ui/switch"
export default function Notifications() {
  return (
     <div className="p-3 flex flex-col  gap-4 bg-[#F8F8F8] space-y-6 min-h-screen">
        <div>
            <h1 className="text-[#28303F] text-[40px] font-bold">Profile</h1>
            <span className="text-[#28303F] text-xl ">Notification</span>
        </div>
          <div className="bg-white w-full lg:max-w-[50%] p-4 rounded-[15px] space-y-6">
            <h4 className="text-[#28303F] font-medium text-[26px] ">Notification Preferences</h4>
          <div >
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Email Notifications</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">App Notifications</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your phone number</p>
              </div>
              <Switch />
            </div>
            <div  className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Daily Quote</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your birthdate</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Events & Challenges</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your recent activity</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        </div>
    </div>
  

  );
}

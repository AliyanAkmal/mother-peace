import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"

export default function AccountPrivacy() {
  return (
      <div className="p-3 flex flex-col  gap-4 bg-[#F8F8F8] space-y-6 min-h-screen">
        <div>
            <h1 className="text-[#28303F] text-[40px] font-bold">Profile</h1>
            <span className="text-[#28303F] text-xl ">Privacy</span>
        </div>
          <div className="bg-white w-full lg:max-w-[50%] p-4 rounded-[15px] space-y-6">
            <h4 className="text-[#28303F] font-medium text-[26px] ">Privacy Settings</h4>
          <div className="">
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Email Address</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Phone Number</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your phone number</p>
              </div>
              <Switch />
            </div>
            <div  className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Birthdate</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your birthdate</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Activity</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your recent activity</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        </div>
         <div className="bg-white w-full lg:max-w-[50%] p-4 rounded-[15px] space-y-6">
            <div className="flex items-center justify-between gap-3 flex-wrap md:flex-nowrap">
              <div className="break-words">
                <p className="text-[16px] font-medium text-[#28303F]">Data Export</p>
                <p className="text-[14px] text-[#828282] break-words">Download a copy of your data from askTrueNother</p>
              </div>
              <Button variant="outline" className="text-[14px] h-9 rounded-[3px] border-gray-400 px-3 py-5">
                Request Data Export
              </Button>
            </div>

            <div className="flex items-center justify-between gap-3 flex-wrap md:flex-nowrap">
              <div className="break-words">
                <p className="text-[16px] font-medium text-[#28303F]">Show Email Address</p>
                <p className="text-[14px] text-[#828282] break-words">Allow others to see your email address</p>
              </div>
              <Button variant="destructive" className="text-[14px] h-9 bg-[#EF4444] rounded-[3px] hover:bg-[#DC2626] px-3 py-5">
                Delete Account
              </Button>
            </div>
          </div>
    </div>
  

  );
}

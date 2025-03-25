import QuoteOfDay from "@/components/quoteoftheday"
import VideOfDay from "@/components/videooftheday"
import Meditation from "@/components/meditation"
import YourProfile from "@/components/yourprofile"
import YourJourney from "@/components/yourjourney"
import YourContects from "@/components/yourcontects"

export default function Dashboard() {
  return (
        <div className="p-3 pb-6 flex flex-col gap-4 bg-[#F8F8F8] ">
          <div>
            <h1 className="text-[#28303F] text-[40px] font-bold">Dashboard</h1>
            <h3 className="text-[#28303F]  text-xl">John Doe</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            
            <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <QuoteOfDay />
              <VideOfDay />
              <Meditation />
            </div>
            </div>

             <div className="rounded-lg  bg-white  p-5">
             <YourProfile />
             <YourJourney />
             <YourContects />
             </div>
          </div>
        </div>
  );
}

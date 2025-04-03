import QuoteOfDay from "@/components/quoteoftheday"
import VideOfDay from "@/components/videooftheday"
import Meditation from "@/components/meditation"
import YourProfile from "@/components/yourprofile"
import YourJourney from "@/components/yourjourney"
import YourContects from "@/components/yourcontects"

export default function Dashboard() {
  return (
    <div className="p-3 pb-6 flex flex-col gap-4 bg-[#F8F8F8] min-h-screen">
      <div className="w-full">
        <h1 className="text-[#28303F] text-2xl sm:text-3xl md:text-[40px] font-bold">Dashboard</h1>
        <h3 className="text-[#28303F] text-base sm:text-lg md:text-xl">John Doe</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="md:col-span-2 flex flex-col gap-4">
          <QuoteOfDay />
          <VideOfDay />
          <Meditation />
        </div>

        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <div className="rounded-[15px] bg-white p-4 md:p-5 flex flex-col gap-4">
            <YourProfile />
            <YourJourney />
            <YourContects />
          </div>
        </div>
      </div>
    </div>
  );
}
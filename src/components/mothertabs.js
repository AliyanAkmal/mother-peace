import { categories, history, saved } from "@/components/motherdata";
import MappingData from "@/components/mapingdata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsMother() {
  return (
    <div className="bg-white p-3 sm:p-4 h-full rounded-lg">
      <h3 className="text-lg sm:text-2xl text-[#28303F] font-medium">Your Journey</h3>
      
      <Tabs defaultValue="Achievements" className="w-full  mt-4">
        <TabsList className="flex flex-wrap h-fit gap-2 rounded-4xl p-2 sm:gap-4">
          <TabsTrigger value="Achievements" className="text-sm sm:text-base">Achievements</TabsTrigger>
          <TabsTrigger value="Challenges" className="text-sm sm:text-base">Challenges</TabsTrigger>
          <TabsTrigger value="Activity" className="text-sm sm:text-base">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="Achievements">
          <div className="flex flex-col gap-2 sm:gap-4 mt-3">
            <span className="text-[#A0A0A0] text-sm sm:text-lg">Browse by Theme</span>
            <MappingData achievements={categories} />
          </div>
        </TabsContent>

        <TabsContent value="Challenges">
          <div className="flex flex-col gap-2 sm:gap-4 mt-3">
            <span className="text-[#A0A0A0] text-sm sm:text-lg">Recent Searches</span>
            <MappingData achievements={history} />
          </div>
        </TabsContent>

        <TabsContent value="Activity">
          <div className="flex flex-col gap-2 sm:gap-4 mt-3">
            <span className="text-[#A0A0A0] text-sm sm:text-lg">All</span>
            <MappingData achievements={saved} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

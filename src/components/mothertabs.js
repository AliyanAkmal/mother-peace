import { categories, history, saved } from "@/components/motherdata"
import MappingData from "@/components/mapingdata"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsMother () {
  return (
    <div className="bg-white p-4 h-full rounded-lg">
      <h3 className="text-2xl text-[#28303F] font-medium">Your Journey</h3>
      <Tabs defaultValue="Achievements" className="w-full mt-4">
        <TabsList className="flex gap-4">
          <TabsTrigger value="Achievements">Achievements</TabsTrigger>
          <TabsTrigger value="Challenges">Challenges</TabsTrigger>
          <TabsTrigger value="Activity">Activity</TabsTrigger>
        </TabsList>
          <TabsContent value="Achievements">
            <div className="flex gap-4 flex-col mt-3">
            <span className="text-[#A0A0A0] text-lg">Browse by Theme</span>
           <MappingData achievements={categories}/>
            </div>
           
          </TabsContent>
          <TabsContent value="Challenges" className="">
            <div className="flex gap-4 flex-col mt-3">
               <span className="text-[#A0A0A0] text-lg">Recent Searches</span>
             <MappingData achievements={history}/> 
            </div>
             
          </TabsContent>
          <TabsContent value="Activity"> 
            <div className="flex gap-4 flex-col mt-3">
                 <span className="text-[#A0A0A0] text-lg">All</span>
             <MappingData achievements={saved}/>
            </div>
            
          </TabsContent>
      </Tabs>
    </div>
  );
};


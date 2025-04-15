import { SquarePen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LinkAccounts from "@/components/linkaccounts"
import ProfileForm from "@/components/profileform"
import hello from "@/assets/woman.svg"
import Image from "next/image";


export default function AccountSetting() {
  return (
    <div className=" space-y-6">
        <div>
            <h1 className="text-[#28303F] text-[40px] font-bold">Profile</h1>

            <span className="text-[#28303F] text-xl ">Account setting</span>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-4">
            <div className="space-y-6 ">

                <div className="rounded-[15px] p-4 flex gap-12 flex-col relative justify-center bg-white"> 
                     <div className="relative m-auto">
                         <Image
                         src={hello}
                           />
                        <SquarePen 
                            className="absolute cursor-pointer bottom-4 right-2 translate-x-1/2 translate-y-1/2 " 
                            size={20} 
                            strokeWidth={1.75} 
                        />
                    </div>
                    <span LinkedAccounts className="text-[#828282] text-sm mb-4 m-auto">Image max and min size discription</span>
                </div>

                <div className="rounded-[15px] p-4 bg-[#ffffff]" >
                <LinkAccounts/>
                
                </div>
         
            </div>

            <div   className="rounded-[15px] p-4 col-span-2 bg-[#ffffff]">
                <ProfileForm />
            </div>
        </div>
    </div>
  

  );
}

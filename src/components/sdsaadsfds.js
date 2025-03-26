import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
export default function ProfilePrivacy() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="px-6 py-8 max-w-3xl ">
        <h1 className="text-[32px] font-semibold text-[#28303F]">Profile</h1>
        <h3 className="text-[18px] text-[#28303F] mb-6">Privacy</h3>
        <div className="bg-white rounded-[12px] p-6 mb-6">
          <h2 className="text-[28px] font-medium text-[#28303F] mb-6">Privacy Settings</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Email Address</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
              </div>
              <Switch className=" w-10 h-4"/>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Phone Number</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your phone number</p>
              </div>
              <Switch  className=" w-10 h-4"/>
            </div>
            <div  className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Birthdate</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your birthdate</p>
              </div>
              <Switch  className=" w-10 h-4"/>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Activity</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your recent activity</p>
              </div>
              <Switch  className=" w-10 h-4"/>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[12px] p-6">
          <h2 className="text-[28px] font-medium text-[#28303F] mb-6">Data & Permissions</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Data Export</p>
                <p className="text-[14px] text-[#828282]">Download a copy of your data from askTrueNother</p>
              </div>
              <Button variant="outline" className="text-[14px] h-9 rounded-[3px] border-[#D1D5DB] px-3 py-5">
                Request Data Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[16px] font-medium text-[#28303F]">Show Email Address</p>
                <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
              </div>
              <Button variant="destructive" className="text-[14px] h-9 bg-[#EF4444] rounded-[3px] hover:bg-[#DC2626] px-3 py-5">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// import { Switch } from "@/components/ui/switch"
// import { Button } from "@/components/ui/button"
// export default function ProfilePrivacy() {
//   return (
//     <div className="min-h-screen bg-[#F5F5F7]">
//       <div className="px-6 py-8 max-w-3xl ">
//         <h1 className="text-[32px] font-semibold text-[#28303F]">Profile</h1>
//         <h3 className="text-[18px] text-[#28303F] mb-6">Notification</h3>
//         <div className="bg-white rounded-[12px] p-6 mb-6">
//           <h2 className="text-[28px] font-medium text-[#28303F] mb-6">Notification Preferences</h2>
//           <div className="space-y-8">
//             <div className="flex items-center justify-between mb-">
//               <div>
//                 <p className="text-[16px] font-medium text-[#28303F]">Email Notifications</p>
//                 <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
//               </div>
//               <Switch className=" w-10 h-4"/>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-[16px] font-medium text-[#28303F]">App Notifications</p>
//                 <p className="text-[14px] text-[#828282]">Allow others to see your phone number</p>
//               </div>
//               <Switch  className=" w-10 h-4"/>
//             </div>
//             <div  className="flex items-center justify-between">
//               <div>
//                 <p className="text-[16px] font-medium text-[#28303F]">Daily Quote</p>
//                 <p className="text-[14px] text-[#828282]">Allow others to see your birthdate</p>
//               </div>
//               <Switch  className=" w-10 h-4"/>
//             </div>
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-[16px] font-medium text-[#28303F]">Events & Challenges</p>
//                 <p className="text-[14px] text-[#828282]">Allow others to see your recent activity</p>
//               </div>
//               <Switch  className=" w-10 h-4"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }








// "use client";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { MotherCrads } from "@/components/motherCards";
// import { SwitchMotherPages } from "@/components/motherpages";
// import { Button } from "@/components/ui/button";
// import { BellDot, X } from "lucide-react";
// import { Switch } from "@/components/ui/switch";
// export function AskYourMother() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const formik = useFormik({
//     initialValues: {
//       theme: "",
//       frequency: {
//         daily: false,
//         weekly: false,
//         monthly: false,
//       },
//       notification: {
//         email: false,
//         app: false,
//         both: false,
//       },
//     },
//     validationSchema: Yup.object({
//       theme: Yup.string().required("Theme is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form Submitted", values);
//     },
//   });
//   return (
//     <div className="px-6 py-3">
// <div >
//   <div className="flex justify-between flex-row items-center mb-6 gap-7 flex-wrap">
//     <div >
//       <h1 className="text-[40px] font-bold font-Readex-Pro">Ask True Mother</h1>
//       <p className="text-[#28303F] text-[20px]">
//         Ask questions about Dr. Hak Ja Han Moon's teachings
//       </p>
//     </div>
//     <div className="flex justify-end">
//       <Button
//         onClick={() => setIsModalOpen(true)}
//         className="flex items-center bg-[#5E8DE5] text-white font-medium py-6 px-4 rounded-md w-full"
//       >
//         <BellDot className="mr-2" strokeWidth={2.5} size={18} />
//         Get Daily Quotes
//       </Button>
//     </div>
//   </div>
//   <div className="flex flex-col lg:flex-row gap-6 min-h-screen bg-gray-100">
//     <div className="lg:w-2/3 space-y-6">
//       <MotherCrads />
//     </div>
//     <div className="lg:w-1/3 flex flex-col space-y-6">
//       <div className="h-full">
//         <SwitchMotherPages />
//       </div>
//     </div>
//   </div>
// </div>
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           onClick={() => setIsModalOpen(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg max-w-lg min-w-[600px]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <form onSubmit={formik.handleSubmit}>
//               <div className="flex justify-between mb-4">
//                 <h2 className="text-[24px] font-semibold text-[#28303F]">Subscribe to Daily Quotes</h2>
//                 <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
//                   <X size={20} />
//                 </button>
//               </div>
//               <div className="mb-4">
//                 <label className="text-[#28303F] font-semibold text-[16px]">Select Theme</label>
//                 <select
//                   name="theme"
//                   className="w-full p-3 border bg-[#D9D9D91A] border-gray-300 rounded-md mt-3 text-gray-700"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.theme}
//                 >
//                   <option value="">Select</option>
//                   <option>Family Values</option>
//                   <option>Peace Initiatives</option>
//                   <option>Unification Principles</option>
//                   <option>Divine Femininity</option>
//                 </select>
//                 {formik.touched.theme && formik.errors.theme ? (
//                   <p className="text-red-500 text-sm">{formik.errors.theme}</p>
//                 ) : null}
//               </div>
//               <div className="mb-6">
//                 <label className="text-[#28303F] font-semibold text-[16px]">Frequency</label>
//                 <div className="flex flex-col mt-5 space-y-5">
//                   {Object.keys(formik.values.frequency).map((key, index) => (
//                     <label key={index} className="flex items-center gap-5">
//                       <Switch
//                         checked={formik.values.frequency[key]}
//                         onCheckedChange={() =>
//                           formik.setFieldValue(`frequency.${key}`, !formik.values.frequency[key])
//                         }
//                         className="w-10 h-4"
//                       />
//                       <span className="text-[#28303F] text-[16px] capitalize">
//                         {key.charAt(0).toUpperCase() + key.slice(1)}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="text-[#28303F] font-semibold text-[16px]">Notification Type</label>
//                 <div className="flex flex-col mt-5 space-y-5">
//                   {Object.keys(formik.values.notification).map((key, index) => (
//                     <label key={index} className="flex items-center gap-5">
//                       <Switch
//                         checked={formik.values.notification[key]}
//                         onCheckedChange={() =>
//                           formik.setFieldValue(`notification.${key}`, !formik.values.notification[key])
//                         }
//                         className="w-10 h-4"
//                       />
//                       <span className="text-[#28303F] text-[16px] capitalize">
//                         {key.charAt(0).toUpperCase() + key.slice(1)}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex justify-end">
//                 <Button type="submit" className="bg-[#5E8DE5] text-white font-medium py-2 px-4 rounded-md">
//                   Subscribe to Daily Quotes
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
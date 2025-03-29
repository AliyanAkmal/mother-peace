
const accountData = [
  { label: "First Name", value: "Jessica" },
  { label: "Last Name", value: "Methew" },
  { label: "Date of Birth", value: "10-20-2000" },
  { label: "Gender", value: "Woman" },
  { label: "Address", value: "Gilgit" },
  { label: "Phone Number", value: "0100 110 1000" },
  { label: "Website", value: <a href="https://www.xyz.com" className="text-blue-500">www.xyz.com</a> }
];

export default function AccountDetails() {
  return (
      <div className="flex rounded-[15px] bg-white p-4 gap-6  flex-col">
        <h2 className="text-2xl font-semibold ">Account Details</h2>
        <div className="space-y-5">
        {
            accountData.map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <span className="text-[#828282] text-base font-medium">{item.label}</span>
                <span className="text-[#28303F] text-base font-medium"> {item.value}</span>
              </div>
            ))
  
        }
        </div>
      </div>
  );
}

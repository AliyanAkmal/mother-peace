"use client"

import { useState } from "react"

export default function AccountSecurity() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const currentPassword = "ajmal  "
  const newPassword = "ajmalkanjut"
  const confirmPassword = "ajmalkanjut"

  return (
    <div className="w-full  rounded-[15px]  bg-white p-4 space-y-6  pb-4 lg:pb-10 ">
      <h2 className="text-[28px] font-medium text-gray-800">Account Security</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <label className="text-[#828282] text-base font-medium">Current Password</label>
          <span className="text-[#828282] text-base font-medium" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
            {showCurrentPassword ? currentPassword : "••••••"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-[#828282] text-base font-medium">New Password</label>
          <span className="text-[#828282] text-base font-medium" onClick={() => setShowNewPassword(!showNewPassword)}>
            {showNewPassword ? newPassword : "••••••••••"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-[#828282] text-base font-medium">Confirm New Password</label>
          <span className="text-[#828282] text-base font-medium" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? confirmPassword : "••••••••••"}
          </span>
        </div>
      </div>
    </div>
  )
}


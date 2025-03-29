"use client"

import { useFormik } from "formik"
import * as Yup from "yup"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProfileForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    bio: Yup.string(),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    currentPassword: Yup.string(),
    newPassword: Yup.string(),
    confirmPassword: Yup.string().oneOf([Yup.ref("newPassword")], "Passwords must match"),
  })
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phoneNumber: "",
      bio: "",
      country: "",
      city: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <h2 className="text-2xl text-[#28303F] font-medium">Personal Information</h2>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#28303F]">Account</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">First Name</h4>
            <Input
              className="h-12 mb-2"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="Enter your first name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Last Name</h4>
            <Input
              className="h-12 mb-2"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Enter your last name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Gender</h4>
            <Select
              name="gender"
              value={formik.values.gender}
              onValueChange={(value) => formik.setFieldValue("gender", value)}
            >
              <SelectTrigger className=" mb-2 w-full rounded-md p-6 text-sm">
                <SelectValue placeholder="Enter your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Email</h4>
            <Input
              className="h-12 mb-2"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="example@email.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Phone number</h4>
            <Input
              className="h-12 mb-2"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Enter your phone number"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Bio</h4>
            <Textarea
              className="mb-2 min-h-25"
              name="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              placeholder="Tell us about yourself"
            />
            {formik.touched.bio && formik.errors.bio ? (
              <div className="text-red-500 text-sm">{formik.errors.bio}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#28303F]">Address</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Country</h4>
            <Input
              className="h-12 mb-2"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              placeholder="Enter your country"
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-500 text-sm">{formik.errors.country}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">City</h4>
            <Input
              className="h-12 mb-2"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="Enter your city"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#28303F]">Security</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2  col-span-1 lg:col-span-2">
            <h4 className="text-base text-[#28303F] font-medium">Current Password</h4>
            <Input
              className="h-12 lg:w-[49%] mb-2"
              name="currentPassword"
              type="password"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.currentPassword && formik.errors.currentPassword ? (
              <div className="text-red-500 text-sm">{formik.errors.currentPassword}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">New Password</h4>
            <Input
              className="h-12 mb-2"
              name="newPassword"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div className="text-red-500 text-sm">{formik.errors.newPassword}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <h4 className="text-base text-[#28303F] font-medium">Confirm Password</h4>
            <Input
              className="h-12 mb-2"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer"
          onClick={() => {
            formik.resetForm()
          }}
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-[#4ab794] cursor-pointer hover:bg-[#498b75]">
          Save
        </Button>
      </div>
    </form>
  )
}


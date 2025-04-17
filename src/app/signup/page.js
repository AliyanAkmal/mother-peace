'use client';

import Image from "next/image";
import img from "@/assets/login.jpg";
import { Input } from "@/components/ui/input";
import {  MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";


export default function SignupComponent() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      console.log("Signup Data", values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb]">
      <div className="w-full md:w-[44%] flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[90%] max-w-[400px] bg-white rounded-xl shadow-lg p-6 space-y-5"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#000000]">Sign up</h2>
            <p className="text-sm text-[#000000]">
              You'll be up & running in 2 minutes
            </p>
          </div>

          <Button  className="w-full cursor-pointer">
            <span className="mr-2">G</span> Continue With Google
          </Button>

          <div className="flex items-center space-x-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-[#000000]">Or register with your email</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2 space-y-1">
              <h3 className="text-sm font-medium mb-2">First Name</h3>
              <Input
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-xs">{formik.errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2 space-y-1">
              <h3 className="text-sm font-medium mb-2">Last Name</h3>
              <Input
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-xs">{formik.errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-medium mb-2">Email</h3>
            <Input
              type="email"
              name="email"
              placeholder="kanjutajmal@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            )}
          </div>

          <div className="space-y-1">
             <h3 className="text-sm font-medium mb-2">Password</h3>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            )}
          </div>

          <div className="space-y-1">
             <h3 className="text-sm font-medium mb-2">Confirm Password</h3>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-xs">{formik.errors.confirmPassword}</p>
            )}
          </div>

          <p className="text-sm text-gray-500">
            We’ll email you a magic code for a password-free registration.
          </p>

          <Button type="submit" variant="outline" className="w-full cursor-pointer">
            Continue  <MoveRight size={28} strokeWidth={2.25} />
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link className="underline" href="/login">
            Click here            
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-[56%] relative">
        <Image
          src={img}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

'use client';

import Image from "next/image";
import img from "@/assets/login.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, MoveRight } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginComponent() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div className="flex  min-h-screen bg-[#f9fafb]">
      <div className="w-full md:w-[44%] flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[90%] max-w-[400px] bg-white rounded-xl shadow-lg p-6 space-y-5"
        >
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#000000]">Login</h2>
            <p className="text-sm text-gray-500">
              You'll be up & running in 2 minutes
            </p>
          </div>

          <div className="space-y2 ">
            <h3 className="text-base mb-2 font-medium text-[#28303F]">
              Enter your email
            </h3>
            <Input
              className="border border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
              name="email"
              placeholder="kanjutajmal@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <h3 className="text-base mb-2 font-medium text-[#28303F]">
              Enter your password
            </h3>
            <div className="relative">
              <Input
                className="border border-gray-300 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <EyeIcon className="w-4 h-4 absolute right-3 top-3 text-gray-400" />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                name="remember"
                checked={formik.values.remember}
                onCheckedChange={(checked) => formik.setFieldValue("remember", checked)}
              />
              <label htmlFor="remember" className="text-[#28303F]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-red-500 font-medium">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" variant="outline" className="w-full">
            Continue <MoveRight size={28} strokeWidth={2.25} />
          </Button>

          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{' '}
            <a href="#" className="font-medium underline">
              Get started here
            </a>
          </p>

          <div className="flex items-center space-x-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold text-lg">
              G
            </div>
          </div>
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
        <div className="relative z-10"></div>
      </div>
    </div>
  );
}
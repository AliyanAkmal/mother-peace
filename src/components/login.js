"use client";

import Image from "next/image";
import img from "@/assets/login.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, MoveRight } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { account } from "@/lib/appwrite";
import { useGoogleLogin } from '@react-oauth/google';

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
   
  });

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const accessToken = tokenResponse.access_token;

  //       const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error('Failed to fetch user info');
  //       }

  //       const userInfo = await res.json();
  //       console.log('✅ Google User Info:', userInfo);
  //       window.location.href = "/dashboard";
    
  //     } catch (error) {

  //       console.error('❌ Error fetching Google user info:', error);
  //     }
  //   },

  //   onError: (errorResponse) => {
  //     console.error('❌ Google login failed:', errorResponse);
  //   },
  // });
const login = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      const accessToken = tokenResponse.access_token;

      // Fetch user info from Google
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch user info');
      }

      const userInfo = await res.json();
      console.log('✅ Google User Info:', userInfo);

      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(userInfo));

      // Redirect to the dashboard
      window.location.href = "/dashboard";
    
    } catch (error) {
      console.error('❌ Error fetching Google user info:', error);
    }
  },

  onError: (errorResponse) => {
    console.error('❌ Google login failed:', errorResponse);
  },
});

  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
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
              placeholder="example@gmail.com"
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
                onCheckedChange={(checked) =>
                  formik.setFieldValue("remember", checked)
                }
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
            Don't have an account? &nbsp;
            <Link className="underline" href="/signup">
              Get Started Here
            </Link>
          </p>

          <div className="flex items-center space-x-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <Button 
            type="button" 
            onClick={login}
            className="w-full cursor-pointer"
          >
            <span className="mr-2">G</span> Continue With Google
          </Button>
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
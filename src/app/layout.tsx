import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DashboardSidebar from "@/components/sidebar";
import Header from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
   display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-start justify-between`}
      >
        <DashboardSidebar />
        <main className="w-full h-full ml-[300px] ">
          <Header />
          {children}</main>
      </body>
    </html>
  );
}

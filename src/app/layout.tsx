// app/layout.tsx
// "use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/contexts/sidebar-context";
import LayoutWrapper from "@/components/layout-wrapper"; // <- NEW component
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';



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
  title: "Family Federation App",
  description: "Official platform for Family Federation teachings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <GoogleOAuthProvider clientId="563822402638-m37lpuduuo3vcd4mdpdkmnh3seunac2a.apps.googleusercontent.com">
        <SidebarProvider>
          <LayoutWrapper>{children}</LayoutWrapper> {/* Client wrapper here */}
        </SidebarProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

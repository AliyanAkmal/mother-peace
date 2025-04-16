import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/contexts/sidebar-context";
import "./globals.css";
import DashboardSidebar from "@/components/sidebar";
import Header from "@/components/header";
import ContentWrapper from "@/app/wrapper";
import SignupComponent from "@/app/signup/page"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <SidebarProvider>
          <div className="flex h-full">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col min-h-0"> 
              {/* <SignupComponent /> */}
              <Header />
              <ContentWrapper>
                {children}
              </ContentWrapper>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
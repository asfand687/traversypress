import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traversy UI",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="flex">
          <div className="hidden md:block h-screen w-80">
            <Sidebar/>
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " 2xl:flex 2xl:justify-center "}>
        <div className="2xl:w-[55vw]">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}

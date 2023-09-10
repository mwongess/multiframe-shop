import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designer Store - Next",
  description: "Buy or sell designer clothes and shoes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "  "}>
        <div className="">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

import Swiper from "@/components/Swiper";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 min-h-screen sm:flex item s-center justify-center">
      <div className="flex  gap-[10rem]">
        {children}
        <Swiper />
      </div>
    </div>
  );
};

export default AuthLayout;

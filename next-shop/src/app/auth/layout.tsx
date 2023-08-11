import React from "react";
import Swiper from "./components/Swiper";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 min-h-screen sm:flex items-center justify-center">
      <div className="flex gap-[10rem]">
        {children}
        <Swiper />
      </div>
    </div>
  );
};

export default AuthLayout;

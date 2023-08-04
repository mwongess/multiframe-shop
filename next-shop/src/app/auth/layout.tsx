import React from "react";
import Swiper from "./components/Swiper";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-3 min-h-screen sm:flex items-center justify-center gap-[10rem]">
      {children}
      <Swiper />
    </div>
  );
};

export default AuthLayout;

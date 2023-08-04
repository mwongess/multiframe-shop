import React from "react";
import Swiper from "./components/Swiper";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-around pt-3">
      {children}
      <Swiper />
    </div>
  );
};

export default AuthLayout;

"use client";

import Link from "next/link";
import { useState } from "react";
import AuthButton from "@/components/AuthButton";
import Input from "@/components/Input";

const Login= () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });


  const inputsData = [
    {
      label: "Email",
      inputType: "email",
      className: "email",
      placeholder: "nextshop@mwongess.com",
    },
    {
      label: "Password",
      inputType: "password",
      className: "pass",
      placeholder: "****",
    },
  ];

  return (
    <>
      <div className="self-center w-full sm:w-[50%] 2xl:w-[40%]">
        <form className="w-full">
          <button className="bg-[#4065b4] text-white py-2 w-full my-3">Login with Google</button>

          {inputsData.map((data) => (
            <Input inputData={data} />
          ))}

          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p className="no-wrap">I agree with the terms and conditions</p>
          </div>
          <AuthButton text="Login Rn" type="login" />
          <p>OR</p>
          <div className="flex">
            <p>Dont have an account?</p>
            <Link className="text-blue-700 underline" href="signup">Signup here</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

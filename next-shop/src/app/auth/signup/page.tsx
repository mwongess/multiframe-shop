"use client";

import Link from "next/link";
import { useState } from "react";
import AuthButton from "../components/AuthButton";
import Input from "../components/Input";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const onSignup = () => { };

  const inputsData = [
    {
      label: "Full Name",
      inputType: "text",
      placeholder: "Next Shop",
    },
    {
      label: "Email",
      inputType: "email",
      placeholder: "nextshop@mwongess.com",
    },
    {
      label: "Password",
      inputType: "password",
      placeholder: "****",
    },
  ];

  return (
    <>
      <div className="w-full sm:w-[50%] 2xl:w-[40%]">
        <form className="w-full">
          <button className="bg-[#4065b4] text-white py-2 w-full my-3">Login with Google</button>

          {inputsData.map((data) => (
            <Input inputData={data} />
          ))}

          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <p className="no-wrap">I agree with the terms and conditions</p>
          </div>
          <AuthButton text="Get Started" />
          <p>OR</p>
          <div className="flex">
            <p>Have an account?</p>
            <Link className="text-blue-700 underline" href="login">login here</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

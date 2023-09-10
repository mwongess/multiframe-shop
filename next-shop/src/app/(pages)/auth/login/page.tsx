"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthButton from "@/components/AuthButton";
import Input from "@/components/Input";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputsData = [
    {
      label: "Email",
      inputType: "email",
      className: "email",
      name: "email",
      placeholder: "nextshop@mwongess.com",
      value: formData.email

    },
    {
      label: "Password",
      inputType: "password",
      className: "pass",
      name: "password",
      placeholder: "****",
      value: formData.password
    },
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="self-center w-full sm:w-[50%] 2xl:w-[40%]">
        <form className="w-full" onSubmit={login}>
          <button className="bg-[#4065b4] text-white py-2 w-full my-3">Login with Google</button>

          {inputsData.map((data, index) => (
            <Input key={index} inputData={data} onChange={handleInputChange} />
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

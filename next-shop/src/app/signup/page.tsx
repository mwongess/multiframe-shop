"use client";

import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const onSignup = () => {};

  return (
    <>
      <div>
        <form action="">
          <button>Continue with Google</button>
          <div>
            <label htmlFor="">Full Name</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Email here"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              className="border rounded p-2"
              type="email"
              placeholder="nextshop@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="*****"
            />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <p>I agree with the terms and conditions</p>
          </div>
          <button>Get Started</button>
        </form>
      </div>
    </>
  );
};

export default Signup;

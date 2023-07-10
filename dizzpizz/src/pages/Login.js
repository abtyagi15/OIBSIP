import React, { useState } from "react";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [password, setPassword] = useState("hidden");

  return (
    <div className="flex">
      <div className="bg-white text-black">
        <form>
          <input type="email" name="email" placeholder="Email" />
          <div>
            <input
              type={password === "hidden" ? "password" : "text"}
              name="password"
              placeholder="Password"
            />
            {password === "hidden" ? (
              <AiOutlineEye
                onClick={() =>
                  setPassword("visible")
                }
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() =>
                  setPassword("hidden")
                }
                className="cursor-pointer"
              />
            )}
          </div>
          <p>Forgot Password?</p>
          <button>Sign In</button>
        </form>
      </div>
      <div className="bg-[#fac564]">
        <p>New Here?</p>
        <p>Sign Up!</p>
      </div>
    </div>
  );
};

export default Login;

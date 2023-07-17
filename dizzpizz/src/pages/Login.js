import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("hidden");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [responseMessage,setResponseMessage] = useState("");
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

  };
  const responseMessageHandler = (message) => {
    setResponseMessage(message);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:4500/abtyagi15/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data)=>{
        responseMessageHandler(data.message);
        if(data.role === "User"){
          navigate("/user");
        }
        else if(data.role === "Admin"){
          navigate("/admin");
        }
      } )
      .catch((error) =>
        console.log("Error in sending request to backend: " + error)
      );
  };

  return (
    <div className="flex w-full h-[500px] rounded-[50px]">
      <div className="bg-white text-black rounded-l-[10px] w-[64%] flex flex-col items-center h-full justify-center">
        <h1 className="text-[2em] font-bold m-[0.67em] text-[#000000d9]">
          Login to Your Account
        </h1>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
            className="text-[14px] my-[5px] p-[15px] w-[53%] bg-[#edf5f3] rounded-[10px] required overflow-visible outline-none border-none"
          />
          {
            (responseMessage === "Please!! Signup first, no account exist with this email") && 
            <p>{responseMessage}</p>
          }
          <div className="w-[53%] flex items-center bg-[#edf5f3] rounded-[10px] my-[5px] p-0">
            <input
              type={password === "hidden" ? "password" : "text"}
              name="password"
              placeholder="Password"
              className="w-full text-[14px] py-[15px] pl-[15px]  bg-[#edf5f3] outline-none border-none rounded-l-[10px]"
              value={formData.password}
              onChange={changeHandler}
              required
            />
            {password === "hidden" ? (
              <AiOutlineEye
                onClick={() => setPassword("visible")}
                className="cursor-pointer mr-[15px]"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setPassword("hidden")}
                className="cursor-pointer mr-[15px]"
              />
            )}
          </div>
          {
            (responseMessage==="Invalid Password") && <p>{responseMessage}</p>
          }
          <p>Forgot Password?</p>
          <button className="bg-[#fac564] m-[10px] rounded-[20px] text-[20px] font-bold py-[12px] w-[180px] text-center">
            Sign In
          </button>
        </form>
      </div>
      <div className="bg-[#fac564] w-[36%] rounded-r-[10px] flex flex-col items-center justify-center">
        <h1 className="text-[#fff] text-[2em] font-bold m-[0.67em]">
          New Here?
        </h1>
        <Link to="/signup">
          <p className="bg-white rounded-[20px] text-[20px] font-bold py-[12px] w-[180px] text-center">
            Sign Up!
          </p>
        </Link>
        {
          (responseMessage==="Unable to login" || responseMessage==="Please Enter details carefully") &&
          <p>{responseMessage}</p>
        }
      </div>
    </div>
  );
};

export default Login;

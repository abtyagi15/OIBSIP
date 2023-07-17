import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [css, setCss] = useState({
    userButton: "bg-[#edf5f3] border-b-[ #1abc9c] border-b-4",
    adminButton: "bg-[#cfe6de]",
  });
  const [passwords, setPasswords] = useState(["hidden", "hidden"]);
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(formData.fullName);
  };
  const responseMessageHandler = (message) => {
    setResponseMessage(message);
    console.log("This is message"+message);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { confirmPassword, ...updatedFormData } = formData;
    setFormData(updatedFormData);

    fetch("http://127.0.0.1:4500/abtyagi15/v1/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseMessageHandler(data.message);
        if (data.message === "Entry created successfully") {
          const role = data.role;
          if (role === "User") {
            navigate("/user");
          } else if (role === "Admin") {
            navigate("/admin");
          }
        }
      })
      .catch((error) => {
        console.log("Error in sending message to backend" + error);
      });
  };

  return (
    <div className="flex w-full h-[600px] rounded-[50px]">
      <div className="bg-[#fac564] w-[35%] flex flex-col items-center justify-center">
        <h1 className="text-[2em] font-bold m-[0.67em] text-[#fff]">
          Welcome Back
        </h1>
        <Link to="/login">
          <button className="border-none rounded-[20px] text-[20px] font-bold outline-none py-[12px] w-[180px] bg-[#fff]">
          Sign in
        </button>
        </Link>
        
      </div>
      <div className="bg-white w-[65%] flex flex-col items-center justify-center">
        <h1 className="text-[#000000d9] leading-[1.2] text-[2em] font-bold m-[0.67em]">
          Create Account
        </h1>
        <form onSubmit={submitHandler} className="w-full flex flex-col items-center">
          <div className="flex items-center rounded-[5px] mb-[0.4em]  p-[5px] ">
            <p
              onClick={() => {
                setFormData((prevData) => {
                  return {
                    ...prevData,
                    role: "User",
                  };
                });
                setCss({
                  userButton: "bg-[#edf5f3] border-b-[ #1abc9c] border-b-4",
                  adminButton: "bg-[#cfe6de] ",
                });
              }}
              className={`cursor-pointer ${css.userButton} py-[8px] px-[16px]`}
            >
              User
            </p>
            <p
              onClick={() => {
                setFormData((prevData) => {
                  return {
                    ...prevData,
                    role: "Admin",
                  };
                });
                setCss({
                  userButton: "bg-[#cfe6de]",
                  adminButton: "bg-[#edf5f3] border-b-[ #1abc9c] border-b-4",
                });
              }}
              className={`cursor-pointer py-[8px] px-[16px] ${css.adminButton} `}
            >
              Admin
            </p>
          </div>
          <div className="flex flex-col w-full items-center">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={changeHandler}
              required
              className="bg-[#edf5f3]  border-none outline-none rounded-[10px] text-[14px] my-[5px] p-[15px] w-[65%]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="bg-[#edf5f3] border-none outline-none rounded-[10px] text-[14px] my-[5px] p-[15px] w-[65%]"
            />
            <p className="text-black bg-white">
              {responseMessage ===
                "User already exist, try with different mail" &&
                `${responseMessage}`}
            </p>
            
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={changeHandler}
                required
                className="bg-[#edf5f3] border-none outline-none rounded-[10px] text-[14px] my-[5px] p-[15px] w-[65%]"
              />
            
            <div className=" flex items-center p-0 my-[5px] rounded-[10px] bg-[#edf5f3]  w-[65%]">
              <input
                type={passwords[0] === "hidden" ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={formData.Password}
                onChange={changeHandler}
                required
                className="bg-[#edf5f3] border-none outline-none rounded-[10px] text-[14px]  py-[15px] pl-[15px] w-full"
              />
              {passwords[0] === "hidden" ? (
                <AiOutlineEye
                  onClick={() =>
                    setPasswords((prev) => {
                      const updatedPasswords = [...prev];
                      updatedPasswords[0] = "visible";
                      return updatedPasswords;
                    })
                  }
                  className="cursor-pointer mr-[15px]"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() =>
                    setPasswords((prev) => {
                      const updatedPasswords = [...prev];
                      updatedPasswords[0] = "hidden";
                      return updatedPasswords;
                    })
                  }
                  className="cursor-pointer mr-[15px]"
                />
              )}
            </div>
            <div className=" flex items-center p-0 my-[5px] rounded-[10px] bg-[#edf5f3]  w-[65%]">
              <input
                type={passwords[1] === "hidden" ? "password" : "text"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={changeHandler}
                required
                className="bg-[#edf5f3] border-none outline-none rounded-[10px] text-[14px]  py-[15px] pl-[15px] w-full"
              />
              {passwords[1] === "hidden" ? (
                <AiOutlineEye
                  onClick={() =>
                    setPasswords((prev) => {
                      const updatedPasswords = [...prev];
                      updatedPasswords[1] = "visible";
                      return updatedPasswords;
                    })
                  }
                  className="cursor-pointer mr-[15px]"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() =>
                    setPasswords((prev) => {
                      const updatedPasswords = [...prev];
                      updatedPasswords[1] = "hidden";
                      return updatedPasswords;
                    })
                  }
                  className="cursor-pointer mr-[15px]"
                />
              )}
            </div>
            {formData.password !== formData.confirmPassword && (
              <p>Password does not match</p>
            )}
          </div>

          <button className="border-none bg-[#fac564] rounded-[20px] text-[20px] font-bold outline-none py-[12px] w-[180px] my-[0.67em]">
            Sign Up
          </button>
          <p className="text-black bg-white">
            {responseMessage === "Unable to signup, try again later" && `${
              responseMessage
            }`}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

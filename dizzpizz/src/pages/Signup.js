import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

const Signup = () => {
  const [role, setRole] = useState("User");
  const [passwords,setPasswords] = useState(["hidden","hidden"]);
  return (
    <div className="flex justify-center border">
      <div>
        <p>Welcome Back</p>
        <button>Sign in</button>
      </div>
      <div>
        <p>Create Account</p>
        <form>
          <div className="flex">
            <p
              onClick={() => setRole("User")}
              className="cursor-pointer hover:text-[white]"
            >
              User
            </p>
            <p
              onClick={() => setRole("Admin")}
              className="cursor-pointer hover:text-[white]"
            >
              Admin
            </p>
          </div>
          <input type="text" name="fullName" placeholder="Full Name" />
          {role === "User" && (
            <input type="text" name="address" placeholder="Address" />
          )}
          <div className="bg-white flex items-center">
            <input type={passwords[0] === "hidden" ? "password" : "text"} name="password" placeholder="Password"  />
            {
             (passwords[0]==="hidden") ? 
                (<AiOutlineEye 
                    onClick={()=>setPasswords(
                    (prev) => {
                        const updatedPasswords = [...prev];
                        updatedPasswords[0]="visible";
                        return updatedPasswords;
                    }
                )} className="cursor-pointer"/>)
             :  
                <AiOutlineEyeInvisible
                onClick={()=>setPasswords(
                    (prev) => {
                        const updatedPasswords = [...prev];
                        updatedPasswords[0]="hidden";
                        return updatedPasswords;
                    }
                )} className="cursor-pointer"/>    
            }
          </div>
          <div className="bg-white flex items-center">
            <input type={passwords[1] === "hidden" ? "password" : "text"} name="password" placeholder="Password"  />
            {
             (passwords[1]==="hidden") ? 
                (<AiOutlineEye 
                    onClick={()=>setPasswords(
                    (prev) => {
                        const updatedPasswords = [...prev];
                        updatedPasswords[1]="visible";
                        return updatedPasswords;
                    }
                )} className="cursor-pointer"/>)
             :  
                <AiOutlineEyeInvisible
                onClick={()=>setPasswords(
                    (prev) => {
                        const updatedPasswords = [...prev];
                        updatedPasswords[1]="hidden";
                        return updatedPasswords;
                    }
                )} className="cursor-pointer"/>    
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

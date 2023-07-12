import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [passwords,setPasswords] = useState(["hidden","hidden"]);
  const [responseMessage,setResponseMessage] = useState('');
  const [formData,setFormData] = useState({
    fullName: "",
    email:"",
    address:"",
    password:"",
    confirmPassword:"",
    role:"User"
  })
  const changeHandler = (event) =>{
    const {name,value} = event.target;
    setFormData((prevData)=>{
      return{
        ...prevData,
           [name] : value
      }
    });
    
  }
  const responseMessageHandler = (message) =>{
    setResponseMessage(message);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form is successfully submitted.............");
    const {confirmPassword,...updatedFormData} = formData;
    setFormData(updatedFormData);

    fetch("http://127.0.0.1:4500/abtyagi15/v1/signup",{
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((response)=> response.json())
    .then((data)=>{
      responseMessageHandler(data.message);
      if(data.message==="Entry created successfully"){
        const role = data.role;
        if(role==="User"){
          navigate("/user");
        }
        else if(role==="Admin"){
          navigate("/admin");
        }  
      
      }
    })
    .catch((error)=>{
      console.log("Error in sending message to backend"+error);
    })

  }

  return (
    <div className="flex justify-center border">
      <div>
        <p>Welcome Back</p>
        <button>Sign in</button>
      </div>
      <div>
        <p>Create Account</p>
        <form onSubmit={submitHandler}>
          <div className="flex">
            <p
              onClick={() => setFormData((prevData)=>{
                return{
                  ...prevData,
                     role : "User"
                }
              })}
              className="cursor-pointer hover:text-[white]"
            >
              User
            </p>
            <p
              onClick={() => setFormData((prevData)=>{
                return{
                  ...prevData,
                     role : "Admin"
                }
              })}
              className="cursor-pointer hover:text-[white]"
            >
              Admin
            </p>
          </div>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={changeHandler}/>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler}/>
          {responseMessage !== "Entry created successfully" && <p className="text-black bg-white">{responseMessage}</p>}
          
          {formData.role === "User" && (
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={changeHandler}/>
          )}
          <div className="bg-white flex items-center">
            <input type={passwords[0] === "hidden" ? "password" : "text"} name="password" placeholder="Password" value={formData.Password}
            onChange={changeHandler}  />
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
            <input type={passwords[1] === "hidden" ? "password" : "text"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword}
              onChange={changeHandler} />
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
          { 
            (formData.password!==formData.confirmPassword) && <p>Password does not match</p>
          }
          
          
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

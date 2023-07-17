const AuthModel = require("../models/AuthModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { fullName, email, address, password, role } = req.body;
    const existingUser = await AuthModel.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exist, try with different mail",
      });
    }
    //hashing the password
    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      res.json({
        success: false,
        message: "Unable to hash the password",
      });
    }

    //create entry in db
    const dbEntry = await AuthModel.create({
      fullName,
      email,
      address,
      password: hashPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "Entry created successfully",
      role: role,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Unable to signup, try again later",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //person entering email and password
    if(!email || !password){
      return res.json({
        success:false,
        message:"Please Enter details carefully"
      })
    }

    //account does not exist thing
    const account = await AuthModel.findOne({email});
    if(!account){
      return res.json({
        success:false,
        message:"Please!! Signup first, no account exist with this email"
      })
    }

    //verification
    if(await bcrypt.compare(password,account.password)){
      return res.json({
        success:true,
        message: "Successfully loged in",
        role: account.role
      })

    }
    else{
      return res.status(401).json({
        success:false,
        message:"Invalid Password"
      })
    }

    

   
  } catch (error) {
    res.json({
      success:false,
      message: "Unable to login"
    })
  }
};

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
      password:hashPassword,
      role,
    });

    return res.status(200).json({
        success:true,
        message:"Entry created successfully"
    })
  } catch (error) {
    res.json({
      success: false,
      message: "Unable to signup, try again later",
    });
  }
};

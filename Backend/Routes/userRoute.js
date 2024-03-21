const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../Middlewares/authMiddleware")

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    console.log(newUser);
    res
      .status(200)
      .send({ message: "User Created Succesfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating user", success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return res
        .status(200)
        .send({
          message: "User Verified & Login Successful",
          success: true,
          data: token,
        });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error logginf in", success: false, error });
  }
});

router.post("/get-user-info-by-id" , authMiddleware, async(req,res) =>{
  try{
    const user = await User.findOne({_id: req.body.userId});
    if(!user){
      return res.status(200).send({message: "User does not exist", success:false});
    }else{
      res.status(200).send({message:"user found", success:true , data: {
        name:user.name,
        email:user.email,
      }})
    }
  }
  catch(error){
    return res.status(500).send({message: "Error getting in the backend" , success:false ,error})
  }
});



module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../Middlewares/authMiddleware");
const Doctor = require("../Models/DoctorModel")

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
        .status(404)
        .send({ message: "Password is incorrect", success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return res.status(200).send({
        message: "User Verified & Login Successful",
        success: true,
        data: token,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error logging in", success: false, error });
  }
});

router.post("/get-user-info-by-id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User does not exist", success: false });
    } else {
      res.status(200).send({
        message: "user found",
        success: true,
        data: {
          name: user.name,
          email: user.email,
          isdoctor: user.isdoctor,
          isadmin: user.isadmin,
          seenNotifications: user.seenNotifications,
          unseenNotifications: user.unseenNotifications,
        },
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error getting in the backend", success: false, error });
  }
});

router.post("/apply-doctor-account", authMiddleware, async (req, res) => {
  try {
    const newdoctor = new Doctor({ ...req.body, status: "pending" });
    console.log(newdoctor)
    await newdoctor.save();
    const adminUser = await User.findOne({ isadmin: true });  

    const unseenNotifications = adminUser.unseenNotifications;
    unseenNotifications.push(
      {
        type: 'Doctor-Approval-Pending',
        message: `${newdoctor.firstname} ${newdoctor.lastname} has applied for a doctor account`,
        data: {
          doctorId: newdoctor._id,
          name: newdoctor.firstname + " " + newdoctor.lastname,
        },
        onClickPath: '/admin/doctors'
      })
      await User.findByIdAndUpdate(adminUser._id, {unseenNotifications});
      res.status(200).send({message:"Doctor Application Submitted Successfully",success: true});

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error Applying as a Doctor", success: false });
  }
});


module.exports = router;

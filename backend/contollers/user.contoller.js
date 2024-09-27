import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
      const { fullname, email, phoneNumber, password, role } = req.body;
      if (!fullname || !email || !phoneNumber || !password || !role) {
          return res.status(400).json({
              message: "Something is missing",
              success: false,
          });
      }

      const file = req.file;
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      
      const user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({
              message: "User already exists with this email.",
              success: false,
          });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
          fullname,
          email,
          phoneNumber,
          password: hashedPassword,
          role,
          profile: {
              profilePhoto: cloudResponse.secure_url,
          }
      });

      return res.status(201).json({
          message: "Account created successfully",
          success: true,
      });
  } catch (err) {
      console.log(err);
      return res.status(500).json({
          message: "An error occurred while creating an account.",
          success: false,
      });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect Credentials.",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect Credentials.",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "Account does not exist with current role,",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSize: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged Out Successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateProfile = async (req, res) => {
  try {
      const { fullname, email, phoneNumber, bio, skills } = req.body;
      const userId = req.id; // middleware authentication
      let user = await User.findById(userId);

      if (!user) {
          return res.status(400).json({
              message: "User not found.",
              success: false,
          });
      }

      // Updating user details
      if (fullname) user.fullname = fullname;
      if (email) user.email = email;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (bio) user.profile.bio = bio;

      // Updating skills
      if (skills) {
          user.profile.skills = skills.split(",").map(skill => skill.trim());
      }

      // Handle resume upload if provided
      if (req.files && req.files.file) {
          const fileUri = getDataUri(req.files.file[0]); // Access the first file
          const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
          user.profile.resume = cloudResponse.secure_url; // Save the Cloudinary URL
          user.profile.resumeOriginalName = req.files.file[0].originalname; // Save the original file name
      }

      // Handle profile photo upload if provided
      if (req.files && req.files.profilePhoto) {
          const profilePhotoUri = getDataUri(req.files.profilePhoto[0]); // Access the first file
          const cloudResponse = await cloudinary.uploader.upload(profilePhotoUri.content);
          user.profile.profilePhoto = cloudResponse.secure_url; // Update the profile photo URL
      }

      await user.save();

      user = {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          profile: user.profile,
      };

      return res.status(200).json({
          message: "Profile updated successfully.",
          user,
          success: true,
      });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          message: "An error occurred while updating the profile.",
          success: false,
      });
  }};
import { response } from "express";
import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../middlewares/sendmail.js";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: "ravikumarjha059@gmail.com" });

    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  // Updating User Information
  try {
    const user = await User.findById(req.user._id);
    const { name, email, password, skill } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    if (skill) {
      if (skill.image) {
        const myCloud = await cloudinary.v2.uploader.upload(skill.image, {
          folder: "portfolio",
        });
        user.skills.push({
          title: skill.type,
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
        });
      }
    }
    user.save();
    res.status(200).json({
      success: true,
      message: "User Updated Succefully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    const { title, url, image, description, techStack } = req.body;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "protfolio",
    });

    user.projects.unshift({
      url,
      title,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      description,
      techStack,
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "New Project Added",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    const project = user.projects.find((pro) => pro._id == id);

    await cloudinary.v2.uploader.destroy(project.image.public_id); // Project Image From cloudinary

    const newProjectArr = user.projects.filter((item) => {
      item._id != id;
    });
    user.projects = newProjectArr;
    await user.save();

    res.status(200).json({
      success: true,
      message: "A project is deleted from Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Greetings, my name is ${name}, and I wanted to take a moment to introduce myself ${email}. My message is as follows: ${message}.`;

    await sendMail(userMessage);
    res.status(200).json({
      success: true,
      message: "Message sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

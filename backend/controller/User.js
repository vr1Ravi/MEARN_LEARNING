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
    const user = await User.findOne().select("-password -email");

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
    const { name, email, password, skills, about } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    if (skills) {
      if (skills.image1) {
        const skillsImageId = user.skills.image1.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image2) {
        const skillsImageId = user.skills.image2.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image3) {
        const skillsImageId = user.skills.image3.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image4) {
        const skillsImageId = user.skills.image4.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image5) {
        const skillsImageId = user.skills.image5.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image6) {
        const skillsImageId = user.skills.image6.public_id;

        await cloudinary.v2.uploader.destroy(skillsImageId); // destroying Previous Skill Image from Cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          // uploading new skill Image
          folder: "portfolio",
        });

        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }
    if (about) {
      const userAbout = user.about;
      if (about.name) userAbout.name = about.name;
      if (about.title) userAbout.title = about.title;
      if (about.subTitle) userAbout.subTitle = about.subTitle;
      if (about.description) userAbout.description = about.description;
      if (about.quote) userAbout.quote = about.quote;

      if (about.avatar) {
        const avatarId = user.skills.avatar.public_id;
        await cloudinary.v2.uploader.destroy(avatarId);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "protfolio",
        });

        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.url,
        };
      }
    }

    user.save();
    res.status(200).json({
      success: true,
      message: "User Updated Succefully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addTimeline = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const id = req.user._id;
    const user = await User.findById(id);

    user.timeline.unshift({
      title,
      description,
      date,
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "Timeline updated",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const newTimelineArr = user.timeline.filter((item) => {
      return item._id != id;
    });

    user.timeline = newTimelineArr;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted From timeline",
    });
  } catch (error) {
    return res.status(400).json({
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

    const project = user.projects.find((pro) => {
      pro._id == id;
    });
    await cloudinary.vr.uploader.destroy(project.image.public_id); // Project Image From cloudinary

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

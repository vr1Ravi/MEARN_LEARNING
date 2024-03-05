import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please Enter Password"],
  },
  skills: [
    {
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],
  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],
  about: String,
});

export const User = mongoose.model("User", userSchema); // model = tool to organise  schema

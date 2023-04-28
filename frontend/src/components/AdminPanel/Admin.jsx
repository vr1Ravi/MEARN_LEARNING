import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../actions/user";
import { useAlert } from "react-alert";

const Admin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, loading } = useSelector((state) => state.update);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));
  };
  const logoutHandler = (e) => {
    dispatch(logout());
  };

  const hamdleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    };
  }; // Handle About Image:

  const handleImages = (e, val) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val === 1) {
          setSkills({ ...skills, image1: Reader.result });
        }
        if (val === 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (val === 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (val === 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (val === 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (val === 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    };
  };
  useEffect(() => {
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }

    if (loginMessage) {
      alert.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, message, error, loginMessage, dispatch]);

  return (
    <div className="adminContainer">
      <div className="adminBox">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>
          <p>O</p>
          <p>N</p>
          <p>L</p>
          <p>Y</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            className="adminInputs"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="adminInputs"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="adminInputs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="adminSkills">
            <div>
              <Typography>Skill 1</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 1);
                }}
              />
            </div>
            <div>
              <Typography>Skill 2</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 2);
                }}
              />
            </div>
            <div>
              <Typography>Skill 3</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 3);
                }}
              />
            </div>
            <div>
              <Typography>Skill 4</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 4);
                }}
              />
            </div>
            <div>
              <Typography>Skill 5</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 5);
                }}
              />
            </div>
            <div>
              <Typography>Skill 6</Typography>
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e, 6);
                }}
              />
            </div>
          </div>

          <div className="adminAbout">
            <fieldset>
              <legend>About</legend>
              <input
                className="adminInputs"
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => {
                  setAbout({ ...about, name: e.target.value });
                }}
              />
              <input
                className="adminInputs"
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => {
                  setAbout({ ...about, title: e.target.value });
                }}
              />
              <input
                className="adminInputs"
                type="text"
                placeholder="Subtitle"
                value={about.subtitle}
                onChange={(e) => {
                  setAbout({ ...about, subtitle: e.target.value });
                }}
              />
              <input
                className="adminInputs"
                type="text"
                placeholder="Description"
                value={about.description}
                onChange={(e) => {
                  setAbout({ ...about, description: e.target.value });
                }}
              />
              <input
                className="adminInputs"
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => {
                  setAbout({ ...about, quote: e.target.value });
                }}
              />
              <input
                className="adminFileUpload"
                type="file"
                placeholder="Choose Avatar"
                onChange={hamdleAboutImage}
                accept="image/*"
              />
            </fieldset>
          </div>

          <Link to="/timeline">
            TIMELINE <MdTimeline />
          </Link>
          <Link to="/project">
            PROJECTS <AiOutlineProject />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Update
          </Button>
        </form>

        <Button
          variant="contained"
          color="error"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Admin;

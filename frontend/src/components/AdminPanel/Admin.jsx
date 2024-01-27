import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
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
  const [type, setType] = useState("");
  const [skill, setSkill] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skill));
  };
  const logoutHandler = (e) => {
    dispatch(logout());
  };

  const handleImages = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setSkill({ type: type, image: Reader.result });
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
          <p>M</p>
          <p style={{ marginRight: "1vmax" }}>E</p>
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
              <Typography>Skill </Typography>
              <input
                id="skillName"
                type="text"
                value={type}
                placeholder="Skill-Type"
                onChange={(e) => setType(e.target.value)}
              />
              <input
                className="adminFileUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImages(e);
                }}
              />
            </div>
          </div>
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

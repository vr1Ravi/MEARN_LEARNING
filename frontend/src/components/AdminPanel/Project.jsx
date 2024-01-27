import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../actions/user";
import { ProjectCard } from "../Projects/Project";

const Project = () => {
  const { error, message } = useSelector((state) => state.update); //----> hook to get entity from redux store;
  const { user } = useSelector((state) => state.user);
  const { message: loginMessage } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const alert = useAlert();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const subMitHandler = async (e) => {
    e.preventDefault();
    dispatch(addProject(title, url, image, description, techStack));
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
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
  }, [dispatch, alert, loginMessage, error, message]);
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

        <form onSubmit={subMitHandler}>
          <input
            className="adminInputs"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            className="adminInputs"
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <input
            className="adminInputs"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="adminInputs"
            type="text"
            placeholder="TechStack"
            value={techStack}
            onChange={(e) => {
              setTechStack(e.target.value);
            }}
          />
          <input
            className="adminFileUpload"
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
          <Button type="submit" variant="contained">
            ADD
          </Button>
          <div className="adminPanelTimeline">
            {user &&
              user.projects &&
              user.projects.map((item) => (
                <ProjectCard
                  id={item._id}
                  key={item._id}
                  url={item.url}
                  projectImage={item.image.url}
                  projectTitle={item.title}
                  description={item.description}
                  technologies={item.techStack}
                  isAdmin={true}
                />
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;

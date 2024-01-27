import { Button, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";

export const ProjectCard = ({
  id,
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <div className="projectCard">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
          <a className="projectCardLink" href={url}>
            VIEW DEMO
          </a>
        </div>
      </div>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h4">
        Projects <AiOutlineProject /> <FaRegSmileWink />
      </Typography>

      <div className="projectWrapper">
        {projects &&
          projects.map((project, idx) => (
            <ProjectCard
              id={project._id}
              key={project._id}
              url={project.url}
              projectImage={project.image.url}
              projectTitle={project.title}
              technologies={project.techStack}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;

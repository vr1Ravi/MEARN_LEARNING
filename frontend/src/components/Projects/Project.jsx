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
      <a className="projectCard" href={url} target="black">
        <div className="upperPart">
          <img src={projectImage} alt="" />
        </div>
        <div className="lowerPart">
          <h3>{projectTitle}</h3>
          <p>{technologies}</p>
        </div>
      </a>

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
        <div className="prejectWrapperHelper">
          {projects &&
            projects.map((project) => (
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
    </div>
  );
};

export default Projects;

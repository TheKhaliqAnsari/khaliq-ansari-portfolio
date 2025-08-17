import React from "react";
import "./SingleProject.css";

const SingleProject = ({ project }) => {
  const {
    name,
    date,
    category,
    thumbnail,
    images,
    desc,
    features,
    skills,
    demo,
    github,
    youtube,
  } = project;

  

  return (
    <div className="project">
      <h3>{name}</h3>
      <img src={thumbnail} alt={name} className="project-img" />
      <p>{desc}</p>
      <div className="project-skills">
        {skills.map((skill) => {
          return <div className="project-skill">{skill}</div>;
        })}
      </div>
      {/* <!-- Buttons for more details --> */}
      <div className="project-buttons">
        <a href={demo} target="_blank" rel="noreferrer">
          <button className="demo-link-btn">Demo</button>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <button className="project-link-btn">More Details</button>
        </a>
      </div>
    </div>
  );
};

export default SingleProject;

import React from "react";
import "./Skills.css";
import { skills } from "../utils/constants";

export default function Skills() {
  return (
    <section id="skill-section">
      <div id="skill-section-inner">
        <div className="section-heading">
          <h2>Skills Acquired</h2>
        </div>
        <div id="skills">
          {/* Different Skills  */}
          {skills.map((skill) => {
            let { name, image } = skill;
            return (
              <div className="skill">
                <img src={image} alt={name} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

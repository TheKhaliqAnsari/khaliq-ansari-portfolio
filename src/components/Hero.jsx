import React, { useEffect, useState } from "react";
import "./Hero.css";
import axios from "axios";

export default function Hero() {
  const [totalSolved, setTotalSolved] = useState(280);

  const getLeetcodeData = async () => {
    let res = await axios.get(
      "https://leetcode-stats-api.herokuapp.com/thekhaliqansari"
    );
    let data = await res.data;
    setTotalSolved(data.totalSolved);
  };

  useEffect(() => {
    getLeetcodeData();
  }, []);

  return (
    <section id="hero">
      {/* Hero Left */}
      <div id="hero-left">
        <div>
          <p id="hero-before-heading">Hi, my name is</p>
          <h1 id="hero-heading">Khaliq Ansari</h1>
          <p id="hero-text">
            I have built many industry grade projects from scratch and am armed
            with many technological skills useful for tech projects. Check out
            my projects below. :)
          </p>
        </div>

        <div id="hero-data">
          <div className="hero-data-single">
            <span className="hero-data-heading">10+</span>
            <p className="hero-data-text">VERIFIED SKILLS</p>
          </div>
          <div className="hero-data-single">
            <span className="hero-data-heading">5+</span>
            <p className="hero-data-text">PROFESSIONAL PROJECTS</p>
          </div>
          <div className="hero-data-single">
            <span className="hero-data-heading">
              {parseInt(totalSolved / 10) * 10}+
            </span>
            <p className="hero-data-text">DSA PROBLEMS SOLVED</p>
          </div>
        </div>
        <div className="check-resume">
          <a
            href="https://drive.google.com/file/d/1RIK-33z7uLUUs4Ihl3NECHODq7MmJ_cL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="check-resume-btn">Check Resume</button>
          </a>
        </div>
      </div>
      {/* Hero Right  */}
      <div id="hero-right">
        <img src="khaliq.jpeg" alt="khaliq ansari" id="hero-img" />
      </div>
    </section>
  );
}

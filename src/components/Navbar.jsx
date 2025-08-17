import React from "react";

import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div id="site-tittle">
          <a href="#hero">Khaliq Ansari</a>
        </div>
        <div>
          <ul>
            <li>
              <a href="#skill-section">Skills</a>
            </li>
            <li>
              <a href="#project-section">Projects</a>
            </li>
            <li>
              <a href="#links">Links</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

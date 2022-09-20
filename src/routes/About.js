import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  
  return (
    <main className="container">
      <div className="profileImg">
        <div className="homesNav">
            <Link to="/"></Link>
        </div>
        <div className="projectsNav">
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </main>
      );
}

export default Profile;
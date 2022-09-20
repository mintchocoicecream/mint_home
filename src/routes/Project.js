import React from "react";
import { Link } from "react-router-dom";

function Project() {

  return (
    <main className="container">
      <div className="projectImg">
        <div className="homesNav">
            <Link to="/"></Link>
        </div>
        <div className="projectsNav">
          <Link to="/Profile">Profile</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="projects">
          <div className="project">
            <div className="projectYear">2022</div>
            <div className="folders">
              <div className="foldersContent">
              <div className="projFolder">
                <span></span>
                <p>CSS Layout Challenges</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>Doodling</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>Twitter Clone</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>KakaoTalk Clone</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>Zoom Clone</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>React Movie App</p>
              </div>
              <div className="projFolder">
                <span></span>
                <p>VanillaJS Chrome App</p>
              </div>
              </div>
              
          </div>
          </div>
          <div className="project">
            <div className="projectYear">2021</div>
            <div className="folders">
              <div className="foldersContent">
                <div className="projFolder">
                  <span></span>
                  <p>(주)리안 R&D 연구원</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectYear">2020</div>
            <div className="folders">
              <div className="foldersContent">
                <div className="projFolder">
                  <span></span>
                  <p>SoulMovie Team Project</p>
                </div>
                <div className="projFolder">
                  <span></span>
                  <p>Python Team Project</p>
                </div>
                <div className="projFolder">
                  <span></span>
                  <p>DL Team Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}

export default Project;
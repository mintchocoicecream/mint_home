import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/Home.module.css";

function Home() {
  React.useEffect(() => {
    const navHome = document.getElementById("home");
    const navProj = document.getElementById("project");
    const navBoard = document.getElementById("board");
    const navProf = document.getElementById("profile");
    const navCont = document.getElementById("contact");
    navProj.style.color = "#5a5a5a";
    navBoard.style.color = "#5a5a5a";
    navProf.style.color = "#5a5a5a";
    navCont.style.color = "#5a5a5a";
    navHome.style.color = "#20c997";
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.griditem}>
          <Link to="/Project">Project</Link>
        </div>
        <div className={styles.griditem}>
          <Link to="/Profile">Profile</Link>
        </div>
        <div className={styles.griditem}>
          <Link  to="/Board">Board</Link>
        </div>
        <div className={styles.griditem}>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

        
    </div>
    );
}

export default Home;
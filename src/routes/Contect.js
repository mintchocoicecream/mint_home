import React from "react";
import styles from "../css/About.module.css";

function Contact() {
  React.useEffect(() => {
    const navHome = document.getElementById("home");
    const navProj = document.getElementById("project");
    const navBoard = document.getElementById("board");
    const navProf = document.getElementById("profile");
    const navCont = document.getElementById("contact");
    navProj.style.color = "#5a5a5a";
    navBoard.style.color = "#5a5a5a";
    navProf.style.color = "#5a5a5a";
    navCont.style.color = "#20c997";
    navHome.style.color = "#5a5a5a";
  }, []);

  return (
    <div className={styles.container}>
            <div id={styles.title}>
        <h2>Contact</h2>
      </div>
      <div id={styles.info}>
        <div className={styles.content}>
          <h3>페이지 작업 중...</h3>
        </div>
      </div>    
    </div>
      );
}

export default Contact;
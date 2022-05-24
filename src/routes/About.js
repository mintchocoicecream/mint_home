import React from "react";
import styles from "../css/About.module.css";

function Profile() {
  React.useEffect(() => {
    const navHome = document.getElementById("home");
    const navProj = document.getElementById("project");
    const navBoard = document.getElementById("board");
    const navProf = document.getElementById("profile");
    const navCont = document.getElementById("contact");
    navProj.style.color = "#5a5a5a";
    navBoard.style.color = "#5a5a5a";
    navProf.style.color = "#20c997";
    navCont.style.color = "#5a5a5a";
    navHome.style.color = "#5a5a5a";
  }, []);
  
  return (
    <main className={styles.container}>
      <div id={styles.title}>
        <h2>Profile</h2>
      </div>
      <div id={styles.info}>
        <div className={styles.content}>
          <h3>서현정 (Seo Hyunjeong)</h3>
          <h3>skill</h3>
          <ul>
            <li>Python, Javascript, React, Html, CSS, Oracle</li>
          </ul>
          <h3>좋아하는 것</h3>
          <ul>
            <li>여행, 독서, 사진</li>
          </ul>
          <h3>Contact</h3>
          <ul>
            <li>sxxhnjng@gmail.com</li>
          </ul>
        </div>
      </div>
        
    </main>
      );
}

export default Profile;
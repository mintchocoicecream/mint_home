import React from "react";
import styles from "../css/About.module.css";

function Profile() {
    const homeNav = document.getElementById("homeNav");
    const profileNav = document.getElementById("profileNav");
    const homeactive = homeNav.querySelector("a");
    const profileactive = profileNav.querySelector("a");
    homeactive.classList.remove("active");
    profileactive.classList.add("active");

  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h2>Profile</h2>
      </div>
      <div id={styles.info}>
        <div className={styles.content}>
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
        
    </div>
      );
}

export default Profile;
import React from "react";
import styles from "../css/About.module.css";

function Profile() {

  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h2>Profile</h2>
      </div>
      <div id={styles.info}>
        <div className={styles.content}>
          <h3>서현정 Seo Hyunjeong</h3>
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
        
    </div>
      );
}

export default Profile;
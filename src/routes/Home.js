import React from "react";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.griditem}>
          <a>Project</a>
        </div>
        <div className={styles.griditem}>
          <a>Profile</a>
        </div>
        <div className={styles.griditem}>
          <a>Board</a>
        </div>
        <div className={styles.griditem}>
          <a>Contact</a>
        </div>
      </div>

        
    </div>
    );
}

export default Home;
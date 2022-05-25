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
          <div className={styles.contentPart}>
            <div className={styles.profile}></div>
            <p>
              나는 그 텅 빈 방을 우리가 언제나 계획하고 꿈꿔왔던 실험실과
              비교하지 않고, 그 자체로 받아들이고, 열심히 노력하면 얼마든지 바꿀 수 있는 가능성을 본 빌의 눈에 감탄했다.
              과거의 꿈과 현재의 현실 사이에 커다란 격차가 있었지만 그는 우리의 새 삶을 사랑할 준비가 되어 있었다.
              나도 그 삶을 사랑하기 위해 노력해보겠다고 결심했다.<br/>
              - Lab Girl 中, Hope Jahren
            </p>
          </div>
          <div className={styles.contentPart}>
            <h3>Name</h3>
            <ul>
              <li>서현정 (Hyunjeong Seo)</li>
            </ul>
            <h3>Skills</h3>
            <ul>
              <li>Python, Javascript, React, CSS3, Oracle</li>
            </ul>
            <h3>Favorites</h3>
            <ul>
              <li>여행, 레고조립, 필름사진, 독서</li>
            </ul>
            <h3>Contact</h3>
            <ul>
              <li>myminticecreamisthebest @ gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
        
    </main>
      );
}

export default Profile;
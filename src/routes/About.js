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
              자기 소개란<br/>
              가나다라마바사아자차카타파하아야어여오요우유으이
              가갸거겨고교구규그기나냐너녀노뇨누뉴느니
              다댜더뎌도됴두듀드디라랴러려로료루류르리
              마먀머며모묘무뮤므미가나다라마바사아자차카타파
              자기소개 여기까지 쓰기!
            </p>
          </div>
          <div className={styles.contentPart}>
            <h3>Name</h3>
            <ul>
              <li>서현정 (Hyunjeong Seo)</li>
            </ul>
            <h3>Skill</h3>
            <ul>
              <li>Python, Javascript, React, CSS, Oracle</li>
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
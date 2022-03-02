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
          <form className={styles.contactForm}>
            <div className={styles.email}>
              <label>보내는 사람 이메일</label>
              <input type="email" placeholder="이메일주소@email.com" required/>
            </div>
            <div className={styles.msg}>
              <label>제목</label>
              <input type="text" placeholder="제목" required></input>
              <label>내용</label>
              <textarea placeholder="내용" rows="10" required></textarea>
            </div>
            <button type="submit">보내기</button>
          </form>
        </div>
      </div>  
      <h3>페이지 작업 중...</h3>  
    </div>
      );
}

export default Contact;
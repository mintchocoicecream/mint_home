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
  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <main className={styles.container}>
            <div id={styles.title}>
        <h2>Contact</h2>
      </div>
      <h3>페이지 작업 중...</h3>  
      <div id={styles.info}>
        <div className={styles.content}>
          <form className={styles.contactForm}>
            <div className={styles.email}>
              <label>받는 사람 이메일 (To)</label>
              <input type="email" value="myminticecreamisthebest@gmail.com" disabled/>
              <label for="email">보내는 사람 이메일 (From) </label>
              <input id="email" type="email" placeholder="example@email.com" required/>
            </div>
            <div className={styles.msg}>
              <label for="title">제목 (Title)</label>
              <input id="title" type="text" placeholder="Hello:)" required></input>
              <label>파일 첨부 (Attatchment)</label>
              <input type="file" />
              <label for="content">내용 (Write)</label>
              <textarea id="content" placeholder="내용(1,000자 제한)" rows="10" minLength="10" maxLength="1000" required></textarea>
            </div>
            <input id={styles.submit} onSubmit={onSubmit} type="submit" value="보내기"/>
          </form>
        </div>
      </div>  
    </main>
      );
}

export default Contact;
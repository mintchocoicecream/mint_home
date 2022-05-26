import React from "react";
import emailjs from '@emailjs/browser';
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

  const inputs = document.getElementsByTagName("input");
  const messages = document.getElementById("content");
  const inputLi = []
  inputLi.push(inputs[1], inputs[2], inputs[3], messages);

  const SendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_pz6ou8j', 'template_rg2uug3', e.target, 'rUsmjHcmBH5XqZ_--')
      .then((result) => {
        // console.log(result.text);
        inputLi.forEach(letter => letter.value = "");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <main className={styles.container}>
            <div id={styles.title}>
        <h2>Contact</h2>
      </div> 
      <div id={styles.info}>
        <div className={styles.content}>
          <form className={styles.contactForm} onSubmit={SendEmail}>
            <div className={styles.email}>
              <label>받는 사람 이메일 (To)</label>
              <input type="email" value="myminticecreamisthebest@gmail.com" disabled/>
              <label for="email">보내는 사람 이메일 (From) </label>
              <input id="email" type="email" name="email" placeholder="example@email.com" required/>
            </div>
            <div className={styles.msg}>
              <label for="name">보내는 분 성함 (Name)</label>
              <input id="name" type="text" name="name" placeholder="my name is..." />
              <label for="title">제목 (Title)</label>
              <input id="title" type="text" name="title" placeholder="Hello:)" required></input>
              <label for="content">내용 (Write)</label>
              <textarea id="content" name="message" placeholder="내용(1,000자 제한)" rows="10" minLength="10" maxLength="1000" required></textarea>
            </div>
            <input id={styles.submit} type="submit" value="보내기"/>
          </form>
        </div>
      </div>  
    </main>
      );
}

export default Contact;
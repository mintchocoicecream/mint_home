import React from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

function Contact() {

  const inputs = document.getElementsByTagName("input");
  const messages = document.getElementById("content");
  const successM = document.getElementById("success");
  const inputLi = []
  inputLi.push(inputs[1], inputs[2], inputs[3], messages);

  const SendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_pz6ou8j', 'template_rg2uug3', e.target, 'rUsmjHcmBH5XqZ_--')
      .then((result) => {
        // console.log(result.text);
        inputLi.forEach(letter => letter.value = "");
        successM.style.display = "flex";
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <main className="container">
      <div className="contactImg">
        <div className="homesNav">
            <Link to="/"></Link>
        </div>
        <div className="projectsNav">
          <Link to="/Projects">Projects</Link>
          <Link to="/Profile">Profile</Link>
        </div>
        <div className="info">
          <div className="profile_content">
            <form className="contactForm" onSubmit={SendEmail}>
              <div className="email">
                <label for="email">보내는 분 이메일</label>
                <input id="email" type="email" name="email" placeholder="example@email.com" required/>
              </div>
              <div className="msg">
                <label for="name">보내는 분 성함</label>
                <input id="name" type="text" name="name" placeholder="my name is..." />
                <label for="title">제목</label>
                <input id="title" type="text" name="title" placeholder="hello:)" required></input>
                <label for="content">내용</label>
                <textarea id="content" name="message" placeholder="내용(1,000자 제한)" rows="10" minLength="10" maxLength="1000" required></textarea>
              </div>
              <input id="submit" type="submit" value="보내기"/>
            </form>
            <div id="success" className="success">
              <span>메일이 성공적으로 발송되었습니다😊</span>
            </div>
          </div>
        </div>
      </div>
  
    </main>
      );
}

export default Contact;
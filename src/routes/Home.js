import React from "react";
import styles from "../css/Home.module.css";

function Home() {
  let toggle = false;
  function myFunction() {
    const showDiv = document.getElementById("togglediv");
    if(toggle===false){
      showDiv.style.display = "block";
      showDiv.classList.add("togglestyle");
      toggle = true;
    } else{
      showDiv.style.display = "none";
      toggle = false;
    }
 }
  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h2>Project</h2>
      </div>
      <div id={styles.resume}>
        <div className={styles.content} id="2022">
          <h3>2022</h3>
          <ul>
            <li>2022.02.14 ~ 2022.02.21
              <p onClick={myFunction} id="toggleSpan">zoom clone</p>
              <div className={styles.togglediv} id="togglediv">
                <a href="https://github.com/mintchocoicecream/zoom-clone.git">github</a>
                <a href="https://9gr9qe.sse.codesandbox.io/">result</a>
              </div>
            </li>
            <li>2022.02.07 ~ 2022.02.13
              <a href="https://github.com/mintchocoicecream/WorkHardTravelHardApp.git">React Native Weather & Todolist 만들기</a>
            </li>
            <li>2022.01.24 ~ 2022.02.08
              <a href="https://github.com/mintchocoicecream/ReactMovieApp.git">React Movie App</a>
            </li>
            <li>2022.01.10 ~ 2022.01.23
              <a href="https://github.com/mintchocoicecream/mintchocoicecream.github.io.git">VanillaJS Chrome App Challenge</a>
            </li>
          </ul>
        </div>
        <div className={styles.content} id="2021">
          <h3>2021</h3>
          <ul>
            <li>2021.04.19 ~ 2021.06.30
              <span>(주)리안 R&D 연구개발 연구원</span>
              <a href="#">실시간 인공지능 IP카메라 NVR 프로그램 개발</a>
            </li>
          </ul>
        </div>
        <div className={styles.content} id="2020">
          <h3>2020</h3>
          <ul>
            <li>2020.05 ~ 2020.11
              <span>2020 혁신성장 청년인재 양성 교육 과정 수료</span>
            </li>
            <a href="https://github.com/mintchocoicecream/SOULMOVIE.git">SpringFramework을 이용한 웹 서비스 개발 프로젝트</a>
            <a href="https://github.com/mintchocoicecream/2020KBO.git">Python을 활용한 데이터 분석 프로젝트</a>
            <a href="https://github.com/mintchocoicecream/AnoGAN-.git">산학협력 프로젝트</a>
          </ul>
        </div>
      </div>
        
    </div>
    );
}

export default Home;
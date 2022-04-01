import React from "react";
import styles from "../css/Project.module.css";

function Project() {
  React.useEffect(() => {
    const navHome = document.getElementById("home");
    const navProj = document.getElementById("project");
    const navBoard = document.getElementById("board");
    const navProf = document.getElementById("profile");
    const navCont = document.getElementById("contact");
    navProj.style.color = "#20c997";
    navBoard.style.color = "#5a5a5a";
    navProf.style.color = "#5a5a5a";
    navCont.style.color = "#5a5a5a";
    navHome.style.color = "#5a5a5a";
  }, [])

  return (
    <main className={styles.container}>
      <div id={styles.title}>
        <h2>Project</h2>
      </div>
      <div id={styles.resume}>
        <div className={styles.content} id="2022">
          <h3>2022</h3>
          <ul>
            <li>2022.03.04 ~ 2022.04.01
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                    <span className={styles.dropbtn}>- Twitter clone</span>
                    <div className={styles.dropdownContent}>
                      <a href="https://github.com/mintchocoicecream/mintwitter">github</a>
                      <a href="https://mintchocoicecream.github.io/mintwitter">web</a>
                    </div>
                  </div>
              </div>
            </li>
            <li>2022.03.11 ~ 2022.03.28
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                    <span className={styles.dropbtn}>- KakaoTalk clone</span>
                    <div className={styles.dropdownContent}>
                      <a href="https://github.com/mintchocoicecream/chat-clone">github</a>
                      <a href="https://mintchocoicecream.github.io/chat-clone">web</a>
                    </div>
                  </div>
              </div>
            </li>
            <li>2022.02.14 ~ 2022.02.21
            <div className={styles.dropstyle}>
              <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- Zoom clone</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/zoom-clone.git">github</a>
                    <a href="https://9gr9qe.sse.codesandbox.io/">web</a>
                  </div>
                </div>
            </div>

            </li>
            <li>2022.02.07 ~ 2022.02.13
            <div className={styles.dropstyle}>
              <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- React Native Weather & Todolist 만들기</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/WorkHardTravelHardApp.git">github</a>
                    <a href="">App</a>
                  </div>
              </div>
            </div>
            </li>
            <li>2022.01.24 ~ 2022.02.08
            <div className={styles.dropstyle}>
              <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- React Movie App</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/ReactMovieApp.git">github</a>
                    <a href="#">web</a>
                  </div>
                </div>
              </div>
            </li>
            <li>2022.01.10 ~ 2022.01.23
            <div className={styles.dropstyle}>
              <div className={styles.dropdown}>
                <span className={styles.dropbtn}>- VanillaJS Chrome App Challenge</span>
                <div className={styles.dropdownContent}>
                  <a href="https://github.com/mintchocoicecream/mintchocoicecream.github.io.git">github</a>
                  <a href="#">web</a>
                </div>
              </div>
            </div>
            </li>
          </ul>
        </div>
        <div className={styles.content} id="2021">
          <h3>2021</h3>
          <ul>
            <li>2021.04.19 ~ 2021.06.30
              <p>(주)리안 R&D 연구개발 연구원</p>
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- 실시간 인공지능 IP카메라 NVR 프로그램 개발</span>
                  <div className={styles.dropdownContent}>
                    <a href="#">ppt</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.content} id="2020">
          <h3>2020</h3>
          <ul>
            <li>2020.05 ~ 2020.11
              <p>2020 혁신성장 청년인재 양성 교육 과정 수료</p>
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- SpringFramework을 이용한 웹 서비스 개발 프로젝트</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/SOULMOVIE.git">github</a>
                    <a href="https://drive.google.com/file/d/172TDUcDLfQ7XBLwc3t12CFtuXJ5UKhUB/view?usp=sharing">ppt</a>
                  </div>
                </div>
              </div>
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- Python을 활용한 데이터 분석 프로젝트</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/2020KBO.git">github</a>
                    <a href="https://drive.google.com/file/d/1YIvdYp78byZomewLop-tBXy5olrUv6jW/view?usp=sharing">ppt</a>
                  </div>
                </div>
              </div>
              <div className={styles.dropstyle}>
                <div className={styles.dropdown}>
                  <span className={styles.dropbtn}>- 딥러닝을 활용한 시스템 개발 프로젝트</span>
                  <div className={styles.dropdownContent}>
                    <a href="https://github.com/mintchocoicecream/AnoGAN-.git">github</a>
                    <a href="https://drive.google.com/file/d/1cGhJvBldiP4HsT5CWcmAA8b76EMv564m/view?usp=sharing">ppx</a>
                  </div>
                </div> 
              </div>
            </li>
          </ul>
        </div>
      </div>
        
    </main>
    );
}

export default Project;
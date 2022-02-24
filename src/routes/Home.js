import React from "react";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h2>Project</h2>
      </div>
      <div id={styles.resume}>
        <div className={styles.content}>
          <h3>2022</h3>
          <ul>
            <li>zoom clone</li>
            <li>React Movie App</li>
            <li>React Native</li>
            <li>VanillaJS TodoList</li>
          </ul>
        </div>
        <div className={styles.content}>
          <h3>2021</h3>
          <ul>
            <li>2021.04.19 ~ 2021.06.30
              <p>(주)리안 R&D 연구개발 연구원</p>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h3>2020</h3>
          <ul>
            <li>2020.05 ~ 2020.11
              <p>2020 혁신성장 청년인재 양성 교육 과정 수료</p>
            </li>
            <li>SpringFramework을 이용한 웹 서비스 개발 프로젝트</li>
            <li>Python을 활용한 데이터 분석 프로젝트</li>
            <li>산학협력 프로젝트</li>
          </ul>
        </div>
      </div>
        
    </div>
    );
}

export default Home;
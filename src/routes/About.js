import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  
  return (
    <main className="only_container">
      <div className="title">
        <h2>Profile</h2>
      </div>
      <div className="info">
        <div className="profile_content">
          <div className="contentPart">
            <div className="profile"></div>
            <div className="profile_write">
              <p>
                나는 그 텅 빈 방을 우리가 언제나 계획하고 꿈꿔왔던 실험실과
                비교하지 않고, 그 자체로 받아들이고, 열심히 노력하면 얼마든지 바꿀 수 있는 가능성을 본 빌의 눈에 감탄했다.
                과거의 꿈과 현재의 현실 사이에 커다란 격차가 있었지만 그는 우리의 새 삶을 사랑할 준비가 되어 있었다.
                나도 그 삶을 사랑하기 위해 노력해보겠다고 결심했다.
              </p>
              <span>- Lab Girl 中, Hope Jahren</span>
            </div>
            
          </div>
          <div className="contentPart">
            <h3>Name</h3>
            <ul>
              <li>서현정 (Hyunjeong Seo)</li>
            </ul>
            <h3>Skills</h3>
            <ul>
              <li>Javascript, Python, React, NextJS, CSS3, Oracle</li>
            </ul>
            <h3>Favorites</h3>
            <ul>
              <li>여행, 레고조립, 필름사진, 독서</li>
            </ul>
            <h3>Links</h3>
            <ul className="links">
              <li>
                <div className="links_link">
                  <a href="https://github.com/mintchocoicecream">
                    <span>Github</span>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.notion.so/mintchocoicecream/Dev-133e8a6d037449aeb49f616cc9836f78">
                    <span>Notion</span>
                    <div className="notion"></div>
                  </a>
                </div>
                
              </li>
            </ul>
            <h3>Contact</h3>
            <ul>
              <li>myminticecreamisthebest@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
        
    </main>
      );
}

export default Profile;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [clicked, setClicked] = useState(false);
  const [proj, setProj] = useState("");

  const onFolder = (e) => {
    e.preventDefault();
    setClicked(true);
    setProj(e.target.id);
  }

  const offFolder = () => {
    setClicked(false);
    setProj("");
  }

  return (
    <main className="container">
      <div className="projectImg">
        <div className="roof">
          Projects
        </div>
        <div className="navhome">
            <Link to="/">
              <span className="mobileNav">
                <div></div>
                mintchoco<br/>icecream
              </span>
            </Link>
        </div>
        <div className="projectsNav">
          <Link to="/Profile">Profile</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="projects">
          <div className="project">
            <div className="projectYear">2022</div>
            <div className="folders">
              <div className="foldersContent">
                <div className="projFolder">
                  <span id="cssLayout" onClick={onFolder}></span>
                  <p>CSS Layout Challenges</p>
                </div>
                <div className="projFolder">
                  <span id="doodling" onClick={onFolder}></span>
                  <p>GreenE</p>
                </div>
                <div className="projFolder">
                  <span id="twitter" onClick={onFolder}></span>
                  <p>Twitter Clone</p>
                </div>
                <div className="projFolder">
                  <span id="katalk" onClick={onFolder}></span>
                  <p>KakaoTalk Clone</p>
                </div>
                <div className="projFolder">
                  <span id="zoom" onClick={onFolder}></span>
                  <p>Zoom Clone</p>
                </div>
                <div className="projFolder">
                  <span id="react" onClick={onFolder}></span>
                  <p>React Movie App</p>
                </div>
                <div className="projFolder">
                  <span id="chrome" onClick={onFolder}></span>
                  <p>VanillaJS Chrome App</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectYear">2021</div>
            <div className="folders">
              <div className="foldersContent">
                <div className="projFolder">
                  <span id="rian" onClick={onFolder}></span>
                  <p>(주)리안 R&D 연구원</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectYear">2020</div>
            <div className="folders">
              <div className="foldersExp">
              - ML 개발자 양성 교육 과정 수료 (2020.05.19 ~ 2020.11.22)
              </div>
              <div className="foldersContent">
                <div className="projFolder">
                  <span id="soulmovie" onClick={onFolder}></span>
                  <p>SoulMovie Team Project</p>
                </div>
                <div className="projFolder">
                  <span id="python" onClick={onFolder}></span>
                  <p>Python Team Project</p>
                </div>
                <div className="projFolder">
                  <span id="anogan" onClick={onFolder}></span>
                  <p>DL Team Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {clicked === true &&(
                    <div className="projInfos">
                      <div className="infoBtn">
                        <button onClick={offFolder}>close X</button>
                      </div>
                      {proj === "cssLayout" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>css layout challenges</h3>
                            <p>🕒 2022.08.10 ~ 2022.09.07</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://i.imgur.com/qCE91Kf.gif" alt="project Imgage"/>
                            </div>
                            <p>css 기법을 익히기 위한 클론 코딩 프로젝트. 먼저 scss로 작성한 다음, gulp를 활용하여 css로 변환하는 방식으로 작업했습니다. 5개의 포스터와 10개의 웹 사이트 레이아웃을 flexbox와 grid를 사용해서 반응형 웹으로 구현했습니다.</p>
                          </div>
                          <div className="projBtns">
                              <a href="https://mintchocoicecream.github.io/CSSLayoutCollection/">web</a>
                          </div>
                        </div>
                      )}
                      {proj === "doodling" &&(
                        <div className="introInfo">
                        <div className="infoTitle">
                          <h3>"GreenE": Vanilla JS 그림판 만들기</h3>
                          <p>🕒 2022.05.03 ~ 2022.05.21 (2022.07.27 ~ 2022.08.05 Update)</p>
                        </div>
                        <div className="infoMain">
                          <div>
                            <img src="https://user-images.githubusercontent.com/64584574/182799141-4478206b-d7b6-4471-a8e5-649811d18cb7.gif" alt="project Imgage"/>
                          </div>
                          <p>Javascript canvas API를 이용한 그림판 만들기 프로젝트. 바닐라 자바스크립트를 이용해서 간단한 웹 서비스를 구현하였고, 이를 통해 자바스크립트의 기본기뿐 아니라 인터렉티브한 기능에 대해 이해할 수 있게 되었습니다. 주요 기능으로 펜 그리기, 도형(사각형, 원형) 그리기, 색 채우기, 지우개, 이미지 추가, 텍스트 추가, 그림 저장이 있습니다.</p>
                        </div>
                        <div className="projBtns">
                          <a href="https://github.com/mintchocoicecream/paintingJS">github</a>
                            <a href="https://mintchocoicecream.github.io/paintingJS/">web</a>
                        </div>
                      </div>
                      )}
                      {proj === "twitter" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>Twitter Clone Coding</h3>
                            <p>🕒 2022.03.04 ~ 2022.04.01</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://user-images.githubusercontent.com/64584574/170199016-a4dfd52f-84bf-448a-bb38-57b6272cc538.gif" alt="project Imgage"/>
                            </div>
                            <p>ReactJS와 Firebase를 활용한 트위터 클론 코딩 프로젝트. ReactJS를 사용하면서 React Hooks와 React Router를 다루는 방식에 대해 익힐 수 있었습니다. 그리고 Firebase를 이용하여 realtime CRUD와 유저 인증을 진행하는 방법을 알게 되었습니다. 또한 Firestore를 사용해서 파일을 업로드하는 기능을 구현했습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/mintwitter">github</a>
                            <a href="https://mintchocoicecream.github.io/mintwitter">web</a>
                          </div>
                        </div>
                      )}
                      {proj === "katalk" &&(
                        <div className="introInfo">
                        <div className="infoTitle">
                          <h3>KakaoTalk Clone Coding</h3>
                          <p>🕒 2022.03.11 ~ 2022.03.28</p>
                        </div>
                        <div className="infoMain">
                          <div className="imgKat">
                            <img src="https://user-images.githubusercontent.com/64584574/170182098-63571285-905d-4b6b-b548-1f9d0f8a0d79.gif" alt="project Imgage"/>
                          </div>
                          <p>카카오톡 프론트엔드 클론 코딩 프로젝트. HTML5, CSS3, JavaScript만을 활용하여 기초적인 웹 서비스 구현에 대해 이해할 수 있었습니다. animation과 transition을 사용하고 flexbox로 display를 구성함으로써 기초적인 반응형 웹을 만드는 경험을 했습니다. </p>
                        </div>
                        <div className="projBtns">
                          <a href="https://github.com/mintchocoicecream/chat-clone">github</a>
                          <a href="https://mintchocoicecream.github.io/chat-clone">web</a>
                        </div>
                      </div>
                      )}
                      {proj === "zoom" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>Zoom Clone Coding</h3>
                            <p>🕒 2022.02.14 ~ 2022.02.21</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://user-images.githubusercontent.com/64584574/170047438-3ae24e30-3913-47cc-81f2-958d42fa07b0.JPG" alt="project Imgage"/>
                            </div>
                            <p>NodeJS와 WebRTC를 활용한 줌 클론 코딩 프로젝트. SocketIO, WebRTC를 사용해서 영상 공유와 채팅 기능을 구현했습니다. 이 프로젝트를 통해 실시간 양방향 통신 기능을 구축하는 과정에 대해 알아갈 수 있었습니다. </p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/zoom-clone">github</a>
                            <a href="https://9gr9qe.sse.codesandbox.io/">web</a>
                          </div>
                        </div>
                      )}
                      {proj === "react" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>React Movie App</h3>
                            <p>🕒 2022.01.24 ~ 2022.02.08</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://user-images.githubusercontent.com/64584574/170031933-4a048159-86bb-4dab-af9f-644e621f484e.JPG" alt="project Imgage"/>
                            </div>
                            <p>React를 활용한 영화 정보 웹 서비스 구현 프로젝트. 영화 정보 api를 불러와서 data fetching을 하고, useState와 JSX를 사용해서 화면을 구성하는 방법을 익혔습니다. 이 과정을 통해 리액트의 기본기에 대해 이해할 수 있게 되었습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/ReactMovieApp">github</a>
                            <a href="https://mintchocoicecream.github.io/ReactMovieApp/">web</a>
                          </div>
                        </div>
                      )}
                      {proj === "chrome" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>Chrome App</h3>
                            <p>🕒 2022.01.10 ~ 2022.01.23</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://user-images.githubusercontent.com/64584574/169957553-87be53d9-99d9-4421-b8f2-6d9f0500c931.JPG" alt="project Imgage"/>
                            </div>
                            <p>Vanilla JS를 활용한 크롬 앱 만들기 프로젝트. localStorage를 사용해서 array와 object로 이루어진 간단한 DB를 구성했습니다. 그리고 이에 저장된 정보에서 필요한 요소를 불러와 화면에 나타냈습니다. 또한 DOM을 이용해서 html에 접근하여 elements를 다루는 방법에 대해 익힐 수 있었습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/chromeApp">github</a>
                            <a href="mintchocoicecream.github.io/chromeApp/">web</a>
                          </div>
                        </div>
                      )}
                      {proj === "rian" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>실시간 인공지능 IP카메라 NVR 프로그램 개발</h3>
                            <p>🕒 2021.04.19 ~ 2021.06.15</p>
                          </div>
                          <div className="infoMain">
                            <div></div>
                            <p>개발팀 R&D 연구원. 실시간으로 움직이는 사람을 감지하는 IP카메라 NVR 프로그램 개발을 담당했습니다. IP카메라에서 실시간으로 촬영중인 영상은 openCV를 활용해서 불러온 뒤 자세 추정 오픈 소스를 적용시켰고, 이를 NVR 프로그램 화면에 띄웠습니다. NVR 프로그램은 윈도우 프로그램으로, Python과 pyQt5를 활용하여 UI를 구성했습니다. 그리고 실시간으로 녹화되는 영상은 mariaDB를 사용해서 적재했습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://drive.google.com/file/d/1DnFW1Fmng9-gqWjCH63zXi-6P4HYsvnm/view?usp=sharing">ppt</a>
                          </div>
                        </div>
                      )}
                      {proj === "soulmovie" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>SoulMovie Team Project</h3>
                            <p>🕒 2020.06.16 ~ 2020.07.04</p>
                          </div>
                          <div className="infoMain">
                            <div>
                              <img src="https://user-images.githubusercontent.com/64584574/102320528-c1f08180-3fbf-11eb-866b-c6f6ed49a62e.jpg" alt="project Imgage"/>
                            </div>
                            <p>SpringFramework을 이용한 영화 공유 웹 서비스 "SoulMovie" 만들기 팀 프로젝트. 총 6인으로 이루어진 팀에서 저는 UI 설계와 로그인 및 회원가입 기능 구현을 담당했습니다. 웹 페이지의 디자인은 오픈 소스인 Bootstrap에서 무료 탬플릿을 불러와 구현 중인 서비스의 전체적인 테마와 어울릴 수 있도록 jsp와 css를 변경하여 구성했습니다. 그리고 회원가입시 input을 통해 받은 회원 정보는 OracleDB에 저장하였고, 로그인시 입력 정보와 DB에 적재된 정보 사이의 일치 여부를 확인한 뒤 다음 과정으로 넘어갈 수 있도록 진행했습니다. 무엇보다 협업 프로젝트를 github desktop로 관리하면서 git으로 코드를 공유하고 활용하는 방법에 대해 익힐 수 있었습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/SOULMOVIE">github</a>
                            <a href="https://drive.google.com/file/d/172TDUcDLfQ7XBLwc3t12CFtuXJ5UKhUB/view?usp=sharing">ppt</a>
                          </div>
                        </div>
                      )}
                      {proj === "python" &&(
                        <div className="introInfo">
                          <div className="infoTitle">
                            <h3>Python Data Analysis Team Project</h3>
                            <p>🕒 2020.07.24 ~ 2020.07.31</p>
                          </div>
                          <div className="infoMain">
                            <p>Python을 활용한 데이터 분석 "2020년도 한국 프로 야구 최종 승률 예측" 팀 프로젝트. 총 3인으로 구성된 팀에서 저는 데이터 수집과 전처리, 그리고 데이터 분석 및 ppt 제작을 담당했습니다. 가장 먼저 데이터 수집을 위해 구단 사이트에 게시된 경기 기록과 선수 기록을 BeautifulSoup와 Selenium을 사용해서 크롤링하여 수집했습니다. 그리고 구단 이름, 데이터 타입 변경, 결측치 처리와 같은 데이터 전처리 과정을 거쳤습니다. 단순회귀분석을 통해 전처리 과정을 거친 모든 데이터 컬럼과 팀 승률 사이의 상관계수를 측정했습니다.</p>
                          </div>
                          <div className="projBtns">
                            <a href="https://github.com/mintchocoicecream/2020KBO">github</a>
                            <a href="https://drive.google.com/file/d/1YIvdYp78byZomewLop-tBXy5olrUv6jW/view?usp=sharing">ppt</a>
                          </div>
                        </div>
                      )}
                      {proj === "anogan" &&(
                        <div className="introInfo">
                        <div className="infoTitle">
                          <h3>AnoGAN Team Project</h3>
                          <p>🕒 2020.10.22 ~ 2020.11.20</p>
                        </div>
                        <div className="infoMain">
                          <div>
                              <img src="https://user-images.githubusercontent.com/64584574/192471007-f1966ea9-ca8f-4510-9b69-bb6a6c365934.PNG" alt="project Imgage"/>
                            </div>
                          <p>"AnoGAN을 활용한 자동차 핸들 오류 검출 시스템 개발" 팀 프로젝트. 총 3인으로 구성된 팀에서 저는 알고리즘 적용 및 활용과 프로그램 UI 제작을 담당했습니다. 가장 먼저 알고리즘 선정을 위해 Anomaly Detection에 대한 이해가 필요했고, 이와 관련된 국내외 논문과 활용 사례를 찾아보았습니다. AnoGAN 알고리즘을 채택한 후 입력 데이터의 정상/비정상을 판단하는 기준인 anomaly score를 계산하는 수식을 찾아 코드로 추가하는 작업을 진행했습니다. UI는 산업용 프로그램 제작에 많이 쓰이는 QtDesigner와 PyQt5를 활용하여 구성했습니다.
                          <p>※ 제 3회 산학협력 최종 프로젝트 경진대회 AI SW개발 분야 우수상 수상 (한국품질재단 주관)</p>
                          </p>
                        </div>
                        <div className="projBtns">
                          <a href="https://github.com/mintchocoicecream/AnoGAN-">github</a>
                          <a href="https://drive.google.com/file/d/1cGhJvBldiP4HsT5CWcmAA8b76EMv564m/view?usp=sharing">ppt</a>
                        </div>
                      </div>
                      )}
                    </div>
                  )}
      </div>
    </main>
    );
}

export default Projects;
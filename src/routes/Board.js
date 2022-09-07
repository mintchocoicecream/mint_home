import React from "react";
import {Link} from "react-router-dom";

function Board() {

  return (
    <main className="only_container">
            <div className="title">
        <h2>Board</h2>
      </div>
      <div className="info">
          <div className="board_content">
            <div id="btn_upload">
              <Link to="/BoardWrites">게시물 작성</Link>
            </div>
            <div className="boards">
              <div className="boards_content">
                <div className="board_img"></div>
                <div className="board_infos">
                  <h4>공지사항</h4>
                  <h5>mintchocoicecream</h5>
                  <p>~Welcome~</p>
                </div>
              </div>
            </div>
        </div>
        
      </div>    
    </main>
      );
}

export default Board;
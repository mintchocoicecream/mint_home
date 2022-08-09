import React, { useState } from "react";

function Board() {
  const [addBoard, setAddBoard] = useState(false);

  const onAddBoard = () => {
    setAddBoard(true);
};

  const onModalCancel = () => {
    setAddBoard(false);
  }

  return (
    <main className="only_container">
            <div className="title">
        <h2>Board</h2>
      </div>
      <div className="info">
          <div className="board_content">
            <div id="btn_upload">
              <button onClick={onAddBoard}>+ 게시글 작성</button>
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
            {addBoard === true && (
              <div className="board_modal">
                <div id="modal_close">
                  <button onClick={onModalCancel}>X</button>
                </div>
                <h3>작업 중...🛠</h3>
              </div>
            )}
        </div>
        
      </div>    
    </main>
      );
}

export default Board;
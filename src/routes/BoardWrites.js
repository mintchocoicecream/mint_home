import React from "react";

function BoardWrites() {
    return (
      <main className="only_container">
        <div className="title">
          <h2>게시글 작성</h2>
        </div>
        <div className="info">
            <div className="board_content">
                <div className="board_writes">
                    <div className="writesContent">
                        <div>게시글 제목</div>
                        <div>작성자 이름</div>
                        <div>게시글 비밀번호</div>
                        <div>이미지 첨부</div>
                        <div>파일 첨부</div>
                        <div>글씨 굵기 , 크기, 기울기 설정</div>
                        <div>글씨쓰는 칸</div>
                        <div>글씨 제한 수 표시</div>
                        <div>작성 취소(이전 페이지로 돌아가기) 버튼</div>
                        <div>업로드(게시하기) 버튼</div>
                    </div>
                </div>
            </div>
        </div>    
      </main>
        );
  }
  
export default BoardWrites;
import React from "react";

function Start() {
    const window_height = document.documentElement.scrollHeight;;
    const icon_height = window.outerHeight;

  return (
    <div className="start" style={{height:window_height}}>
        <div className="start_content" style={{height: icon_height}}>
            <div className="icon"></div>
        </div>
    </div>
    );
}

export default Start;
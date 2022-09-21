import React, { useState } from "react";
import {Link} from "react-router-dom";

function Home() { 
  const [activated, setActivated] = useState(false);
  const sound = new Audio('../knocking.mp3');

  const Clicks = () => {
    setActivated(!activated);
  }

  const Sounds = () => {
    sound.currentTime = 0;
    sound.play();
  }

  const OffSounds = () => {
    sound.paused();
  }

  return (
    <main className="container">
      <div className="mainImg">
        <div className="homes homeProject">
          <Link to="/Projects">Projects</Link> 
        </div>
        <div className="homes homeProfile">
          <Link to="/Profile">Profile</Link> 
        </div>
        <div className="homes homeContact">
          <Link to="/Contact">Contact</Link> 
        </div>
        <div className="homesNav mainNav">
          <Link to="/"></Link>
        </div>
        <div className="door" onClick={Clicks}>
          {activated === true?(
            <div className="doorOpen">
              <div className="kitty"></div>
            </div>
          ) : (
            <div className="doorClosed" onMouseOver={Sounds} onMouseLeave={OffSounds}>
            </div>
          )}
        </div>
      </div>
    </main>
    );
}

export default Home;
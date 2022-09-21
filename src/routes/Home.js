import React, { useState } from "react";
import {Link} from "react-router-dom";
import open from "../sounds/open.mp3";

function Home() { 
  const [activated, setActivated] = useState(false);
  let sound = new Audio(open);

  const Clicks = () => {
    setActivated(!activated);
    sound.play();
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
            <div className="doorClosed" >
            </div>
          )}
        </div>
      </div>
    </main>
    );
}

export default Home;
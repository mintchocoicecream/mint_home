import React from "react";
import {Link} from "react-router-dom";

function Home() {


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
      </div>
    </main>
    );
}

export default Home;
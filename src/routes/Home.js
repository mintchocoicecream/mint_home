import React from "react";
import {Link} from "react-router-dom";

function Home() {


  return (
    <main className="container">
      <div className="content">
        <div className="homeImage">
        </div>
        <div className="griditem">
          <Link to="/Project">Projects</Link>
        </div>
        <div className="griditem">
          <Link  to="/Board">Board</Link>
        </div>
        <div className="griditem">
          <Link to="/Profile">Profile</Link>
        </div>
        <div className="griditem">
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="homeImage">
        </div>
      </div>  
    </main>
    );
}

export default Home;
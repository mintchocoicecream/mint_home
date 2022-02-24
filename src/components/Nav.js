import React from "react";
import {Link} from "react-router-dom";
import "../css/bootstrap.css";

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">MintChocoIcecream</Link>
           

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link to="/" id="homeNav" class="nav-link active">Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/About" id="aboutNav" class="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}

export default Navigation;
import React from "react";
import {Link} from "react-router-dom";
import "../css/bootstrap.css";

function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">MintChocoIcecream</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <Link to="/" class="nav-link active">Home
                        <span class="visually-hidden">(current)</span>
                        </Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn btn-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
)}

export default Navigation;
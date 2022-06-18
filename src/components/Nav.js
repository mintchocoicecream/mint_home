import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Navigation() {
    const [activated, setActivated] = useState("");

    useEffect(() => {
        const pages = document.location.href.split("/");
        let current = pages[3];
        if(current === ""){
            setActivated(current);
        }else if(current === "Project"){
            setActivated(current);
        }else if(current === "Board"){
            setActivated(current);
        }else if(current === "Profile"){
            setActivated(current);
        }else if(current === "Contact"){
            setActivated(current);
        }
    }, []);

    const onHome = () => {
        setActivated("");
    };

    const onProject = () => {
        setActivated("Project");
    };

    const onBoard = () => {
        setActivated("Board");
    };

    const onProfile = () => {
        setActivated("Profile");
    };

    const onContact = () => {
        setActivated("Contact");
    };


    return (
        <nav className="navbar" id="navbar">
            <div className="containerFluid">
            <Link className="navbarBrand" id="main" to="/">Mintchoco</Link>    
                <div className="navbarCollapse">
                    <ul className="navbarNav">
                        <li className="navItem" id="navItem">
                            {activated === "" ? (
                                <Link id="home" to="/" onClick={onHome} style={{color: "#20c997"}}>Home
                                </Link>
                            ) : (
                                <Link id="home" to="/" onClick={onHome}>Home
                                </Link>
                            )}
                            
                        </li>
                        <li className="navItem" id="navItem">
                            {activated === "Project" ? (
                                <Link id="project" to="/Project" onClick={onProject} style={{color: "#20c997"}}>Projects
                                </Link>
                            ) : (
                                <Link id="project" to="/Project" onClick={onProject}>Projects
                                </Link>
                            )}                            
                        </li>
                        <li className="navItem" id="navItem">
                            {activated === "Board" ? (
                                <Link id="board" to="/Board" onClick={onBoard} style={{color: "#20c997"}}>Board
                                </Link>
                            ) : (
                                <Link id="board" to="/Board" onClick={onBoard}>Board</Link>
                            )}  
                            
                        </li>
                        <li className="navItem" id="navItem">
                            {activated === "Profile" ? (
                                <Link id="profile" to="/Profile" onClick={onProfile} style={{color: "#20c997"}}>Profile
                                </Link>
                            ) : (
                                <Link id="profile" to="/Profile" onClick={onProfile}>Profile</Link>
                            )}                              
                        </li>
                        <li className="navItem" id="navItem">
                            {activated === "Contact" ? (
                                <Link id="contact" to="/Contact" onClick={onContact} style={{color: "#20c997"}}>Contact
                                </Link>
                            ) : (
                                <Link id="contact" to="/Contact" onClick={onContact}>Contact</Link>
                            )}  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}

export default Navigation;
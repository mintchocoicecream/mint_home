import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/Header.module.css";

function Navigation() {

    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.containerFluid}>
            <a className={styles.navbarBrand} id="main" href="/">Mintchoco</a>    
                <div className={styles.navbarCollapse}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navItem} id="home">
                            <Link className={styles.navLink} to="/">Home
                            </Link>
                        </li>
                        <li className={styles.navItem} id="project">
                            <Link className={styles.navLink} to="/Project">Project</Link>
                        </li>
                        <li className={styles.navItem} id="profile">
                            <Link className={styles.navLink} to="/Profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}

export default Navigation;
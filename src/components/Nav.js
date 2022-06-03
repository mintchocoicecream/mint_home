import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/Header.module.css";

function Navigation() {
    // const [activated, setActivated] = useState("");

    // useEffect(() => {
    //     const pages = document.location.href.split("/");
    //     let current = pages[3];
    //     if(current === ""){
    //         setActivated(current);
    //     }else if(current === "Project"){
    //         setActivated(current);
    //     }else if(current === "Board"){
    //         setActivated(current);
    //     }else if(current === "Profile"){
    //         setActivated(current);
    //     }else if(current === "Contact"){
    //         setActivated(current);
    //     }
    // }, []);

    // const onHome = () => {
    //     setActivated("");
    // }

    // const onProject = () => {
    //     setActivated("Project");
    // }

    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.containerFluid}>
            <Link className={styles.navbarBrand} id="main" to="/">Mintchoco</Link>    
                <div className={styles.navbarCollapse}>
                    <ul className={styles.navbarNav}>
                        <li className={styles.navItem} id="navItem">
                            <Link id="home" to="/">Home
                            </Link>
                        </li>
                        <li className={styles.navItem} id="navItem">
                            <Link id="project" to="/Project">Project</Link>
                        </li>
                        <li className={styles.navItem} id="navItem">
                            <Link id="board" to="/Board">Board</Link>
                        </li>
                        <li className={styles.navItem} id="navItem">
                            <Link id="profile" to="/Profile">Profile</Link>
                        </li>
                        <li className={styles.navItem} id="navItem">
                            <Link id="contact" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}

export default Navigation;
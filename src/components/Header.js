import React from "react";
import {Link} from "react-router-dom";
import styles from "../css/Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
        <div>
            <Link to="/" className={styles.link}>MintchocoIcecream</Link>
        </div>
        </header>
    )
}

export default Header;
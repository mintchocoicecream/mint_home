import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
        <div>
            <Link to="/" className="link">MintchocoIcecream</Link>
        </div>
        </header>
    )
}

export default Header;
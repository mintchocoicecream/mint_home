import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer id="footer">
        <div class="footerDiv">
            <a className="github" href="https://github.com/mintchocoicecream">
                <FontAwesomeIcon icon={faGithub} />
                <span>mintchocoicecream</span>
            </a>
            <h5>@MintchocoIcecream 2022</h5>
        </div>
      </footer>
    )
}

export default Footer;
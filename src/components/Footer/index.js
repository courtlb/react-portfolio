import React from "react";

function Footer() {
    return(
        <footer className="footer">
            <div>
                <a href="https://github.com/courtlb">
                    <img src={require("../../assets/images/github-logo.png")?.default} alt="github" className="githubLogo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/courtney-brown-73442888">
                    <img src={require("../../assets/images/linkedin-logo.png")?.default} alt="linkedin" className="linkedinLogo"></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
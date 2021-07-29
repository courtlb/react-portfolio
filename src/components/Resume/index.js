import React from "react";
import resume from "../../assets/resume/resume.doc";

function Resume() {
    return(
        <section>
            <div className="resume">
                <a href={resume} download>Download Resume</a>
            </div>
            <div>
                <h1 className="section-title extra-space">Technical Skills</h1>
            </div>
            <div className="skills">
                <h2>Languages</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Javascript ES6+</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                </ul>
                <h2>Applications</h2>
                <ul>
                    <li>GitHub</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
                <h2>Tools</h2>
                <ul>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Query</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;
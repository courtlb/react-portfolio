import React, { useState } from "react";

function Project(props) {
    const currentProject = useState(props)[0].project;
    const name = currentProject.name;
    const image = currentProject.image;
    const link = currentProject.link;
    const github = currentProject.github;

    return (
        <div className="card">
            <div className="cardImg">
                <a href={link}>
                    <img src={image} alt="screenshot of application" />
                </a>
            </div>
            <div className="cardText">
                <h2>{name}</h2>
                <a href={github}>Github Repository</a>
            </div>
        </div>
    );
}

export default Project;
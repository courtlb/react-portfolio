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
                <a href={link} target="_blank" rel="noreferrer" className="container">
                    <img src={image} className="image" alt="screenshot of application" />
                    <div className="overlay">Go to {name}</div>
                </a>
            </div>
            <div className="cardText">
                <a href={github} target="_blank" rel="noreferrer">View Github Repository for {name}</a>
            </div>
        </div>
    );
}

export default Project;
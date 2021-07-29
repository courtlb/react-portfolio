import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="intro my-5">
      <h1 id="about" className="section-title">About Me</h1>
      <div className="about">
        <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        <div className="my-2">
            <p>
            Hello! My name is Courtney, and I am a full-stack web developer located in Austin, Texas. 
            I am interested in leveraging my professional engineering background to create responsive web applications with a focus on seamless user interface. 
            I recently graduated from the University of Texas Coding Bootcamp, improving my skills in JavaScript, SQL, and the MERN stack. 
            I am passionate about breaking down large problems into smaller, manageable pieces, and collaborating with teammates to deliver a timely and impactful MVP. 
            I’m eager to leverage my experience on fast-paced, cross-functional teams to tackle exciting web development projects.            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
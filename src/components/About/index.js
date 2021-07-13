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
            Hello! My name is Courtney Brown, and I am a full-stack web developer in Austin, Texas. I am currently enrolled in the University of Texas' Coding Bootcamp. I graduated from Texas A&M University in 2016 with a degree in Petroleum Engineering. After working in the industry for several years, I decided to make a change to a career I am more passionate about. I love the problem solving and collaborative nature of coding, and am looking forward to learning more in the next few months of bootcamp.
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
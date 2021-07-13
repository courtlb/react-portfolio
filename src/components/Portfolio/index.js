import React, { useState } from 'react';
import Project from '../Project';

const Portfolio = () => {
    const projects = [
    {
      name: 'Angelfish',
      image: 'angelfish.png',
      link: 'https://angelfish-group.herokuapp.com',
      github: 'https://github.com/courtlb/angelfish-project'
    },
    {
      name: 'A Storm Is Brewing',
      image: 'storm.png',
      link: 'https://courtlb.github.io/storm-brewing',
      github: 'https://github.com/courtlb/storm-brewing'
    },
    {
      name: 'Tech Blog',
      image: 'blog.png',
      link: 'https://shrouded-journey-82502.herokuapp.com/',
      github: 'https://github.com/courtlb/tech-blog'
    },
    {
      name: 'Work Day Scheduler',
      image: 'scheduler.png',
      link: 'https://courtlb.github.io/work-day-scheduler/',
      github: 'https://github.com/courtlb/work-day-scheduler'
    },
    {
      name: 'Code Quiz',
      image: 'quiz.png',
      link: 'https://courtlb.github.io/code-quiz/',
      github: 'https://github.com/courtlb/code-quiz'
    },
    {
      name: 'Password Generator',
      image: 'password.png',
      link: 'https://courtlb.github.io/password-generator/',
      github: 'https://github.com/courtlb/password-generator'
    }
  ];

  return (
    <section>
      <div>
          <h1>Courtney Brown Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row">
          <li>
            <Project project={project[0]}></Project>
          </li>
          <li>
            <Project project={project[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row">
          <li>
            <Project project={project[2]}></Project>
          </li>
          <li>
            <Project project={project[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row">
          <li>
            <Project project={project[4]}></Project>
          </li>
          <li>
            <Project project={project[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
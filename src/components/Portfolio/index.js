import React from 'react';
import Project from '../Project';
import rex from '../../assets/images/rex.png'
import angelfish from '../../assets/images/angelfish.png';
import storm from '../../assets/images/storm.png';
import blog from '../../assets/images/blog.png';
import scheduler from '../../assets/images/scheduler.png';
import quiz from '../../assets/images/quiz.png';


const Portfolio = () => {
    const project = [
    {
      name: 'Rescue Express',
      image: rex,
      link: 'https://still-plains-06700.herokuapp.com/',
      github: 'https://github.com/courtlb/rex-project'
    },
    {
      name: 'Angelfish',
      image: angelfish,
      link: 'https://angelfish-group.herokuapp.com',
      github: 'https://github.com/courtlb/angelfish-project'
    },
    {
      name: 'A Storm Is Brewing',
      image: storm,
      link: 'https://courtlb.github.io/storm-brewing',
      github: 'https://github.com/courtlb/storm-brewing'
    },
    {
      name: 'Tech Blog',
      image: blog,
      link: 'https://shrouded-journey-82502.herokuapp.com/',
      github: 'https://github.com/courtlb/tech-blog'
    },
    {
      name: 'Work Day Scheduler',
      image: scheduler,
      link: 'https://courtlb.github.io/work-day-scheduler/',
      github: 'https://github.com/courtlb/work-day-scheduler'
    },
    {
      name: 'Code Quiz',
      image: quiz,
      link: 'https://courtlb.github.io/code-quiz/',
      github: 'https://github.com/courtlb/code-quiz'
    }
  ];

  return (
    <section>
      <div>
          <h1 className="section-title">My Portfolio</h1>
      </div>
      <div className="portfolio">
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
import React from 'react'
import './About.css'
import CV from '../../assets/CV.pdf'
const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about__container">



      <h2>Personal info</h2>
      <div>
        <p>I was born in 2001.</p>
        <p>I've been learning how to code since january 2021</p>
        <p>I want to become a professional front end developer (and maybe full-stack later on)</p>
        <p>Some of the skills I've learned so far include HTML, CSS, SASS, Javascript, React.js, Typescript, styled components, etc.</p>
        <p>Feel free to ask me anything!</p>
      </div>

      <h2>Some courses I've taken</h2>
        <div>
        <p>The Modern Javascript Bootcamp Course (2022) – Udemy academy – Colt Steele, Stephen Grider</p>
        <p>Responsive Web Design (2022) – freeCodeCamp.org</p>
        <p>The Modern React Bootcamp (2022) – Udemy academy – Colt Steele</p>
        </div>

        <div className="links">
          <a href={CV} download className="btn">Download CV</a>
          <a href="#contact" className="btn">
            Talk to me
          </a>
        </div>

    </div>
    </section>
  )
}

export default About
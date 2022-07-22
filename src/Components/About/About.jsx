import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about__container">
      <p>I was born in 2001.</p>
        <p>I've been learning how to code since january 2021. </p>
        <p>I'm trying to land my first job as a front end developer.</p>
        <p>Some of the skills I've learned so far include HTML, CSS, SASS, Javascript, React.js, Typescript, styled components, etc.</p>
        <a href="#contact" className="btn">
          Talk to me
        </a>
    </div>
    </section>
  )
}

export default About
import React from 'react'
import './Portfolio.css'
import IMG1 from "../../assets/IMG1.png"
import IMG2 from "../../assets/IMG2.png"
import IMG3 from "../../assets/IMG3.png"
import IMG4 from "../../assets/IMG4.png"

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Weather app; consuming multiple API',
    github: 'https://github.com/HeitorMontenegro/weather-app',
    demo: 'https://dribbble.com/shots/18856858-Weather-app'
  },
  {
    id:2,
    image: IMG2,
    title: 'React to do list',
    github: 'https://github.com/HeitorMontenegro/react-to-do-list',
    demo: 'https://dribbble.com/shots/18856861-To-do-list'
  },
  {
    id:3,
    image: IMG3,
    title: 'React and typescript to do list',
    github: 'https://github.com/HeitorMontenegro/TS-to-do-list',
    demo: 'https://dribbble.com/shots/18856863-To-do-list-typescript'
  },
  {
    id:4,
    image: IMG4,
    title: 'Vanilla javascript calculator',
    github: 'https://github.com/HeitorMontenegro/Simple-calculator-vanillaJS',
    demo: 'https://dribbble.com/shots/18856868-Vanilla-js-calculator'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      {
      data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">Github</a>
            <a href={demo} className="btn btn-primary">Live demo</a>
          </div>
        </article>
      );
      })
}
      </div>

    </section>
  )
}

export default Portfolio;
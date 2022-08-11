import React from 'react'
import './Portfolio.css'
import IMGtodo from "../../assets/IMGtodo.png"
import IMGcalc from "../../assets/IMGcalc.png"
import IMGtstodo from "../../assets/IMGtstodo.png"
import IMGweather from "../../assets/IMGweather.png"
import IMGpfinances from "../../assets/IMGpfinances.png"
import IMGbmi from "../../assets/IMGbmi.png"

const data = [
  {
    id:1,
    image: IMGpfinances,
    title: 'React/Typescript personal finances app',
    description: 'Keep track of your monthly expenses and income.',
    github: 'https://github.com/HeitorMontenegro/ts-personal-finances-app',
    demo: 'https://stirring-selkie-26c3e1.netlify.app/'
  },
  {
    id:2,
    image: IMGweather,
    title: 'Weather app',
    github: 'https://github.com/HeitorMontenegro/weather-app',
    description: 'Get to know the weather of any city in the world. The UI changes based on input. Built with multiple API.',
    demo: 'https://62e4df4c6768265c264bcccc--gilded-boba-da0572.netlify.app/'
  },
  {
    id:3,
    image: IMGtodo,
    title: 'React to do list',
    description: 'A simple to do list.',
    github: 'https://github.com/HeitorMontenegro/react-to-do-list',
    demo: 'https://62e4dfbf6d04c85b309ee417--vocal-crisp-4d5b4f.netlify.app/'
  },
  {
    id:4,
    image: IMGtstodo,
    title: 'React/Typescript to do list',
    description: 'A simple to do list.',
    github: 'https://github.com/HeitorMontenegro/TS-to-do-list',
    demo: 'https://chipper-tanuki-7fe59a.netlify.app/'
  },
  {
    id:5,
    image: IMGbmi,
    title: 'Vanilla javascript BMI calculator',
    description: 'Know your BMI and get a motivational quote :)',
    github: 'https://github.com/HeitorMontenegro/Javascript-BMI-calculator',
    demo: 'https://ephemeral-swan-bb71bc.netlify.app/'
  },
  {
    id:6,
    image: IMGcalc,
    title: 'Vanilla javascript calculator',
    description: 'A simple calculator.',
    github: 'https://github.com/HeitorMontenegro/Simple-calculator-vanillaJS',
    demo: 'https://funny-tapioca-5f9e0d.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      {
      data.map(({id, image, title, description, github, demo}) => {
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="portfolio__item-cta">
            <a rel="noreferrer" target="_blank" href={github} className="btn">Github</a>
            <a rel="noreferrer" target="_blank" href={demo} className="btn btn-primary">Live demo</a>
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
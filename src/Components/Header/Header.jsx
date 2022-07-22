import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Heitor Montenegro</h1>
        <h5 className="text-light">Frontend Prospective Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#portfolio" className="scroll__down">Scroll down</a>
      </div>
    </header>
  )
}

export default header
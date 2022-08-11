import React, { useEffect } from 'react'
import './Nav.css'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdContactMail } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

useEffect(() => {
  const handleScroll = event => {
    const scrollVar = window.scrollY

      if (scrollVar >= 1100.888916015625 && scrollVar < 2000.666748046875){

          setActiveNav('#about')

      }else if (scrollVar >= 2000.666748046875 && scrollVar < 3310.5556640625){

          setActiveNav('#portfolio')

      }else if(scrollVar >= 3310.5556640625){

          setActiveNav('#contact')

      }else{

          setActiveNav('#')

       }      
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);





  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav;
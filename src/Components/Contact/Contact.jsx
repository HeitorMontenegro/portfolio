import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <h4>Email</h4>
          <h5>heitormontenegro@hotmail.com</h5>
          <a href="mailto:heitormontenegro@hotmail.com">Send a message</a>
          </article>
          <article className="contact__option">
          <h4>Whatsapp</h4>
          <h5>+5583999405158</h5>
          <a href="https://wa.me/5583999405158">Send a message</a>
          </article>
        </div>




      </div>
      </section>
    );
}

export default Contact